import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { InspectionApiService } from 'src/app/inspection-api.service';
import { MapService } from '../../map/map.service';  // Import the service

@Component({
  selector: 'app-show-inspection',
  templateUrl: './show-inspection.component.html',
  styleUrls: ['./show-inspection.component.css']
})
export class ShowInspectionComponent implements OnInit {

  inspectionList$!: Observable<any[]>;
  inspectionTypesList$!: Observable<any[]>;
  inspectionTypesList: any = [];

  // Map to display data associate with foreign keys
  inspectionTypesMap: Map<number, string> = new Map()

  // Variables (properties)
  modalTitle: string = '';
  activateAddEditInspectionComponent: boolean = false;
  inspection: any;
  mapView: any;

  constructor(private service: InspectionApiService, private mapService: MapService) { }

  ngOnInit(): void {
    this.inspectionList$ = this.service.getInspectionList();
    this.inspectionTypesList$ = this.service.getInspectionTypesList();
    this.refreshInspectionTypesMap();

    // Subscribe to the mapView observable to get the map view
    this.mapService.mapView$.subscribe(view => {
      this.mapView = view;
      if (this.mapView) {
        console.log('Map view is initialized');
      }
    });
  }



  modalAdd() {
    this.inspection = {
      id: 0,
      status: null,
      comments: null,
      inspectionTypeId: null,
      latitude: null,   // Make sure latitude is included
      longitude: null,  // Make sure longitude is included
    };
    this.modalTitle = "Add Inspection";
    this.activateAddEditInspectionComponent = true;
  }

  modalEdit(item: any) {
    this.inspection = item; // When editing, make sure item has latitude and longitude
    this.modalTitle = "Edit Inspection";
    this.activateAddEditInspectionComponent = true;
  }

  delete(item: any) {
    if (confirm(`Are you sure you want to delete inspection ${item.id}`)) {
      this.service.deleteInspection(item.id).subscribe(res => {
        var closeModalBtn = document.getElementById('add-edit-modal-close');
        if (closeModalBtn) {
          closeModalBtn.click();
        }

        var showDeleteSuccess = document.getElementById('delete-success-alert');
        if (showDeleteSuccess) {
          showDeleteSuccess.style.display = "block";
        }
        setTimeout(function () {
          if (showDeleteSuccess) {
            showDeleteSuccess.style.display = "none"
          }
        }, 4000);
        this.inspectionList$ = this.service.getInspectionList();
      })
    }
  }

  modalClose() {
    this.activateAddEditInspectionComponent = false;
    this.inspectionList$ = this.service.getInspectionList();
  }

  refreshInspectionTypesMap() {
    this.service.getInspectionTypesList().subscribe(data => {
      this.inspectionTypesList = data;

      for (let i = 0; i < data.length; i++) {
        this.inspectionTypesMap.set(this.inspectionTypesList[i].id, this.inspectionTypesList[i].inspectionName);
      }
    })
  }

  @ViewChild('arcgisMap') arcgisMap: any;  // Reference to the map
  // Zoom to inspection location on map
  async  zoomToLocation(latitude: number, longitude: number) {
    console.log('Inspection:', this.inspection);  // Log the inspection object
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

    if (this.mapView) {
      console.log('Map view found, proceeding to zoom.');
      await this.mapView.goTo({
        center: [longitude, latitude],
        zoom: 15
      }).then(() => {
        console.log(`Zoomed to Latitude: ${latitude}, Longitude: ${longitude}`);
      }).catch((error: any) => {
        console.error('Error zooming to location:', error);
      });

      // Add pin marker
      await this.mapService.addOrUpdatePin(latitude, longitude);
    } else {
      console.error('Map view not found.');
    }
  }
}

import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MapService } from './map.service';  // Import the service
import WebMap from '@arcgis/core/WebMap';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @ViewChild('mapViewDiv', { static: true }) mapViewEl!: ElementRef;

  constructor(private mapService: MapService) {}

  async ngOnInit() {
    try {
      const [MapView, WebMap, GraphicsLayer] = await Promise.all([
        import('@arcgis/core/views/MapView').then(m => m.default),
        import('@arcgis/core/WebMap').then(m => m.default),
        import('@arcgis/core/layers/GraphicsLayer').then(m => m.default)
      ]);

      // Create graphics layer for pins
      const graphicsLayer = new GraphicsLayer();

      const webMap = new WebMap({
        basemap: 'streets-vector' // Use your desired basemap
      });

      const mapView = new MapView({
        container: this.mapViewEl.nativeElement,
        map: webMap,
        center: [0, 0], // Longitude, Latitude
        zoom: 2
      });

      // Once mapView is initialized, set it in the service
      this.mapService.setMapView(mapView);

    } catch (error) {
      console.error('Error loading the map:', error);
    }
  }
}

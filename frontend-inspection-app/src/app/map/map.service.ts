// map.service.ts
import { Injectable } from '@angular/core';
import MapView from '@arcgis/core/views/MapView';
import Graphic from '@arcgis/core/Graphic';
import Point from '@arcgis/core/geometry/Point';
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';
import { ReplaySubject, take } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private mapViewSource = new ReplaySubject<MapView>(1);
  mapView$ = this.mapViewSource.asObservable();
  private currentPin: Graphic | null = null;

  setMapView(view: MapView): void {
    this.mapViewSource.next(view);
  }

  async addOrUpdatePin(latitude: number, longitude: number): Promise<void> {
    const view = await this.mapViewSource.pipe(take(1)).toPromise();

    // Remove existing pin
    if (view && this.currentPin) {
      view.graphics.remove(this.currentPin);
    }

    // Create new pin
    const point = new Point({
      longitude: longitude,
      latitude: latitude
    });

    const markerSymbol = new SimpleMarkerSymbol({
      color: [255, 0, 0], // Red
    outline: {
      color: [0, 0, 0], // Black
      width: 3
    },
    size: 16,
    style: 'diamond'
    });

    const pointGraphic = new Graphic({
      geometry: point,
      symbol: markerSymbol
    });

    this.currentPin = pointGraphic;
    if (view) {
      view.graphics.add(pointGraphic);
    }
  }
}

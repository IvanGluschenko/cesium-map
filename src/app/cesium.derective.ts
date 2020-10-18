import { Directive, OnInit, ElementRef} from '@angular/core';
import { MapService } from './map.service';

@Directive({
 selector: '[appCesium]'
})
export class CesiumDirective implements OnInit {
   viewer
   mapProps = {
      animation: false,
      baseLayerPicker: false,
      fullscreenButton: false,
      vrButton: false,
      geocoder: false,
      homeButton: false,
      infoBox: false,
      sceneModePicker: false,
      selectionIndicator: false,
      timeline: false,
      navigationHelpButton: false,
      navigationInstructionsInitiallyVisible: false,
      resolutionScale: 4,
   }

   constructor(public el: ElementRef, private MapService: MapService) {}   

   ngOnInit() {
      this.initMap()
      this.zoomToCity(this.viewer)
      this.red()
      this.synhronizePosition()
   }

   initMap() {
      const viewer = new Cesium.Viewer(this.el.nativeElement, this.mapProps)
      viewer.scene.screenSpaceCameraController.inertiaSpin = 0;
      viewer.scene.screenSpaceCameraController.inertiaTranslate = 0;
      viewer.scene.screenSpaceCameraController.inertiaZoom = 0;
      this.viewer = viewer
      return viewer
   }

   zoomToCity(viewer) {
      const coord = Cesium.Cartesian3.fromDegrees(37.6, 55.7)

      const moscow = viewer.entities.add({
         position: coord,
         point: coord
      })
      viewer.zoomTo(moscow)
   }

   synhronizePosition() {
      this.MapService.mapState$.subscribe((mapCenter) => this.viewer.camera.position = mapCenter)
      this.MapService.mapState$.next(this.viewer.camera.position)
   }

   red() {
      const mapParentNode = this.el.nativeElement.parentNode
      // const camera = this.viewer.camera
      // camera.moveStart.addEventListener(() => {
      //    if(camera.changed)
      //    mapParentNode.style.backgroundColor = 'red'
      // })
      // camera.moveEnd.addEventListener(() => mapParentNode.style.backgroundColor = 'grey')

      
      const handler = new Cesium.ScreenSpaceEventHandler(this.el.nativeElement)
      handler.setInputAction(() => mapParentNode.style.backgroundColor = 'red', 
      Cesium.ScreenSpaceEventType.LEFT_DOWN)
      
      handler.setInputAction(() => mapParentNode.style.backgroundColor = 'rgb(187, 187, 187)'
      , Cesium.ScreenSpaceEventType.LEFT_UP)
   }

}
import { Component } from '@angular/core';
import { MapService } from './map.service';


Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4NzhjYWUzMi03M2M1LTQ2ZTItOTI5MS02OGM5NmVkNjA0ZTMiLCJpZCI6MzU4ODksImlhdCI6MTYwMjY2ODU0MX0.MEKTTPLm6CK6yt8gWM6LeaPn6FjinOkiDfKpvhZNnuE'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  constructor(private MapService: MapService) {}

  ngOnInit(): void {
    
  }
  
}

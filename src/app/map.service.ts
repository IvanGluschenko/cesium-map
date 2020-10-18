import { Injectable } from '@angular/core'
import {Subject} from 'rxjs'

@Injectable()
export class MapService {

    mapState$ = new Subject()
    
}
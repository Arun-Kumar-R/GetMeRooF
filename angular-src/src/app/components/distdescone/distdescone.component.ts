import { Component, OnInit } from '@angular/core';
import { DistanceoneService} from '../../services/distanceone.service';
@Component({
  selector: 'app-distdescone',
  templateUrl: './distdescone.component.html',
  styleUrls: ['./distdescone.component.css'],
  providers: [DistanceoneService]
})
export class DistdesconeComponent implements OnInit {

distonedesc:any;

  constructor(private _DistanceoneService:DistanceoneService) { }

  ngOnInit() {
    this._DistanceoneService.getDistanceOneDesc()
    .subscribe(resdistonedescData => this.distonedesc = resdistonedescData);
  }

}





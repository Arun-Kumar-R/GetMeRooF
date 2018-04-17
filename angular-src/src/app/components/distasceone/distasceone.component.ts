import { Component, OnInit } from '@angular/core';
import { DistanceoneService} from '../../services/distanceone.service';
@Component({
  selector: 'app-distasceone',
  templateUrl: './distasceone.component.html',
  styleUrls: ['./distasceone.component.css'],
  providers: [DistanceoneService]
})
export class DistasceoneComponent implements OnInit {
distoneasce:any;
  constructor(private _DistanceoneService:DistanceoneService) { }

  ngOnInit() {
    this._DistanceoneService.getDistanceOneAsce()
    .subscribe(resdistoneasceData => this.distoneasce = resdistoneasceData);
  }

}









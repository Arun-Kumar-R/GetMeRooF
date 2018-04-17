import { Component, OnInit } from '@angular/core';
import { DistanceService} from '../../services/distance.service';
@Component({
  selector: 'app-distance',
  templateUrl: './distance.component.html',
  styleUrls: ['./distance.component.css'],
   providers: [DistanceService]
})
export class DistanceComponent implements OnInit {

   Distance:any;

  constructor(private _DistanceService:DistanceService) { }

  ngOnInit() {
     this._DistanceService.getDistance()
    .subscribe(resDistanceData => this.Distance = resDistanceData);
  }

}









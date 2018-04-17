import { Component, OnInit } from '@angular/core';
import { DistanceService} from '../../services/distance.service';
@Component({
  selector: 'app-distdescall',
  templateUrl: './distdescall.component.html',
  styleUrls: ['./distdescall.component.css'],
   providers: [DistanceService]
})
export class DistdescallComponent implements OnInit {

 distdescall:any;

  constructor(private _DistanceService:DistanceService) { }

  ngOnInit() {
     this._DistanceService.getDistDescAll()
    .subscribe(resDistanceData => this. distdescall = resDistanceData);
  }

}






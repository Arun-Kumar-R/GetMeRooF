import { Component, OnInit } from '@angular/core';
import { RateoneService} from '../../services/rateone.service';
@Component({
  selector: 'app-rateasceone',
  templateUrl: './rateasceone.component.html',
  styleUrls: ['./rateasceone.component.css'],
  providers: [RateoneService]
})
export class RateasceoneComponent implements OnInit {

rateoneasce:any;

  constructor(private _RateoneService:RateoneService) { }

  ngOnInit() {
     this._RateoneService.getRateOneAsce()
    .subscribe(resrateoneasceData => this.rateoneasce = resrateoneasceData);
  }

}


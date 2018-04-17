import { Component, OnInit } from '@angular/core';
import { RateService} from '../../services/rate.service';
@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css'],
  providers: [RateService]
})
export class RateComponent implements OnInit {

Rate:any;

  constructor(private _RateService:RateService) { }

  ngOnInit() {
     this._RateService.getRate()
    .subscribe(resRateData => this.Rate = resRateData);
  }

}


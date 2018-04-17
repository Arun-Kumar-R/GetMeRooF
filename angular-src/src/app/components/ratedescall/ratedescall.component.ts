import { Component, OnInit } from '@angular/core';
import { RateService} from '../../services/rate.service';
@Component({
  selector: 'app-ratedescall',
  templateUrl: './ratedescall.component.html',
  styleUrls: ['./ratedescall.component.css'],
  providers: [RateService]
})
export class RatedescallComponent implements OnInit {

ratedescall:any;

  constructor(private _RateService:RateService) { }

  ngOnInit() {
     this._RateService.getRateDescAll()
    .subscribe(resRateData => this.ratedescall = resRateData);
  }

}




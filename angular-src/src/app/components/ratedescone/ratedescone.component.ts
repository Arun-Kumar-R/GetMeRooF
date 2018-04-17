import { Component, OnInit } from '@angular/core';
import { RateoneService} from '../../services/rateone.service';
@Component({
  selector: 'app-ratedescone',
  templateUrl: './ratedescone.component.html',
  styleUrls: ['./ratedescone.component.css'],
    providers: [RateoneService]
})
export class RatedesconeComponent implements OnInit {

rateonedesc:any;

  constructor(private _RateoneService:RateoneService) { }

  ngOnInit() {
     this._RateoneService.getRateOneDesc()
    .subscribe(resrateonedescData => this.rateonedesc = resrateonedescData);
  }

}






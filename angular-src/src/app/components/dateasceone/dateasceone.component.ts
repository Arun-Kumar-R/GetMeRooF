import { Component, OnInit } from '@angular/core';
import { DateoneService} from '../../services/dateone.service';
@Component({
  selector: 'app-dateasceone',
  templateUrl: './dateasceone.component.html',
  styleUrls: ['./dateasceone.component.css'],
  providers: [DateoneService]
})
export class DateasceoneComponent implements OnInit {

dateoneasce:any;

  constructor(private _DateoneService:DateoneService) { }

  ngOnInit() {
    this._DateoneService.getDateOneAsce()
    .subscribe(resdateoneasceData => this.dateoneasce= resdateoneasceData);
  }

}

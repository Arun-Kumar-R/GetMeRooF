import { Component, OnInit } from '@angular/core';
import { DateService} from '../../services/date.service';
@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css'],
  providers: [DateService]
})
export class DateComponent implements OnInit {

Date:any;
  constructor(private _DateService:DateService) { }

  ngOnInit() {
     this._DateService.getDate()
    .subscribe(resDateData => this.Date = resDateData);
  }

}

import { Component, OnInit } from '@angular/core';
import { DateService} from '../../services/date.service';

@Component({
  selector: 'app-datedescall',
  templateUrl: './datedescall.component.html',
  styleUrls: ['./datedescall.component.css'],
   providers: [DateService]
})
export class DatedescallComponent implements OnInit {

datedescall:any;

  constructor(private _DateService:DateService) { }

  ngOnInit() {
     this._DateService.getDateDescAll()
    .subscribe(resDateData => this.datedescall = resDateData);
  }

}



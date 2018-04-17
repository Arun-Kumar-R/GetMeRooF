import { Component, OnInit } from '@angular/core';
import { DateoneService} from '../../services/dateone.service';
@Component({
  selector: 'app-datedesceone',
  templateUrl: './datedesceone.component.html',
  styleUrls: ['./datedesceone.component.css'],
   providers: [DateoneService]
})
export class DatedesceoneComponent implements OnInit {

dateonedesc:any;

  constructor(private _DateoneService:DateoneService) { }

  ngOnInit() {
     this._DateoneService.getDateOneDesc()
    .subscribe(resdateonedescData => this.dateonedesc = resdateonedescData);
  }

}


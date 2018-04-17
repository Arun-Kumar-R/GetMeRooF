import { Component, OnInit } from '@angular/core';
import { SizeoneService} from '../../services/sizeone.service';
@Component({
  selector: 'app-sizedesceone',
  templateUrl: './sizedesceone.component.html',
  styleUrls: ['./sizedesceone.component.css'],
  providers: [SizeoneService]
})
export class SizedesceoneComponent implements OnInit {

sizeonedesc:any;

  constructor(private _sizeoneService:SizeoneService) { }

  ngOnInit() {
     this._sizeoneService.getSizeOneDesc()
    .subscribe(ressizeonedescData => this.sizeonedesc = ressizeonedescData);
  }

}












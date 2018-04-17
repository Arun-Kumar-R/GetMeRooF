import { Component, OnInit } from '@angular/core';
import { SizeoneService} from '../../services/sizeone.service';
@Component({
  selector: 'app-sizeasceone',
  templateUrl: './sizeasceone.component.html',
  styleUrls: ['./sizeasceone.component.css'],
   providers: [SizeoneService]
})
export class SizeasceoneComponent implements OnInit {

sizeoneasce:any;

  constructor(private _sizeoneService:SizeoneService) { }

  ngOnInit() {
    this._sizeoneService.getSizeOneAsce()
    .subscribe(ressizeoneasceData => this.sizeoneasce = ressizeoneasceData);
  }

}











import { Component, OnInit } from '@angular/core';
import { SizeService} from '../../services/size.service';
@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.css'],
  providers: [SizeService]
  })
export class SizeComponent implements OnInit {

size:any;

  constructor(private _sizeService:SizeService) { }

  ngOnInit() {
     this._sizeService.getSize()
    .subscribe(resSizeData => this.size = resSizeData);
  }

}









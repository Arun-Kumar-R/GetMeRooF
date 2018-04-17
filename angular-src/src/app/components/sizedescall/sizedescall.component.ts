import { Component, OnInit } from '@angular/core';
import { SizeService} from '../../services/size.service';
@Component({
  selector: 'app-sizedescall',
  templateUrl: './sizedescall.component.html',
  styleUrls: ['./sizedescall.component.css'],
   providers: [SizeService]
})
export class SizedescallComponent implements OnInit {

sizedescall:any;

  constructor(private _sizeService:SizeService) { }

  ngOnInit() {
     this._sizeService.getSizeDescAll()
    .subscribe(resSizeData => this.sizedescall = resSizeData);
  }

}

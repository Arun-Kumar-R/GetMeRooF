import { Component, OnInit,ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MatSort,MatSortable,MatTableDataSource } from '@angular/material';
import{ RoofService } from '../../services/roof.service';



@Component({
  selector: 'app-rooftable',
  templateUrl: './rooftable.component.html',
  styleUrls: ['./rooftable.component.css']
})
export class RooftableComponent implements OnInit {
@ViewChild(MatSort) sort:MatSort;
dataSource;

displayedColumns =['Distance','Rate','ProjectSize','DateOfComplition'];

  constructor(private roofService:RoofService) { }

  ngOnInit() {
    this.roofService.getUser().subscribe(results=>{
      if(!results){
        return;
      }
      this.dataSource = new MatTableDataSource(results); 
      this.dataSource.sort = this.sort;    
    })
  }

}

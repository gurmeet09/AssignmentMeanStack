import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../app.service'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
series:any
  constructor(private seriesservice:SeriesService) { }

  ngOnInit() {
    this.getSeries()
  }
  getSeries(){
  this.seriesservice.GetItems().subscribe(resdata => 
    { console.log(resdata, 'aaa');
    this.series=resdata;
  });
}
}
  
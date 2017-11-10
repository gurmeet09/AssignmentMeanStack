import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminmovies',
  templateUrl: './adminmovies.component.html',
  styleUrls: ['./adminmovies.component.css']
})
export class AdminmoviesComponent implements OnInit {
  NewSeries:{
    series_id:String,
    series_name:String,
    series_data:String,
    series_image:String

}={
    series_id:'',
    series_name:'',
    series_data:'',
    series_image:''
}
base64: any;
flag: boolean;
series=[ ];
  constructor(public router: Router,public seriesservice: SeriesService) { }

  ngOnInit() {
  }
  addseries() {
    this.NewSeries.series_image = this.base64;
    console.log(this.NewSeries)
    this.seriesservice.PostSeries(this.NewSeries)
      .subscribe(resdata => {
      console.log(resdata)
      if(resdata.status==true)
      alert("Series added successfuly");
      })
}
seriestoggle( ) {
  this.flag=!this.flag;
  }
  changeListener(event) {
    console.log(event.target)
    this.encodeImageFileAsURL(event.target)
    }
    encodeImageFileAsURL(element) {
    var file=element.files[ 0 ];
    var reader=new FileReader( );
    reader.onloadend=(data => {
    this.base64=reader.result;
    this.NewSeries.series_image=this.base64;
    //console.log('RESULT', reader.result)
    })
    reader.readAsDataURL(file);
    //console.log(this.base64);
    }

    btnClick(){
      this.router.navigateByUrl('/user');
    }

}

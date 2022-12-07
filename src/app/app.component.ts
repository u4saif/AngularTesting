import { AppService } from './../services/app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title2 = 'Welcome to Angular Testing';
  cardData:any;
  constructor(private appService:AppService){}
  ngOnInit(){
    this.appService.getData().subscribe((response)=>{
      console.warn(response);
      this.cardData=response;
    },
    (error)=>{});

    this.appService.failedGetData().subscribe((response)=>{
    },(error)=>{
      console.warn(error);
    })
  }
}

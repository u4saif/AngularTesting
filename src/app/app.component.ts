import { AppService } from './../services/app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Angular Testing';
  constructor(private appService:AppService){}
  ngOnInit(){
    this.appService.getData().subscribe((response)=>{
      console.warn(response);
    },(error)=>{});

    this.appService.failedGetData().subscribe((response)=>{
      console.warn(response);
    },(error)=>{})
  }
}

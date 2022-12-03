import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  URL='https://ap.unsplash.com/photos?page=1&query=random&client_id=Wodf-s3S_rzzMqYGrFLhqunWZMOEDAqvSqX3Gci6DVM';
  constructor(private http:HttpClient) { }

  addNumber(n,m){
    return n+m;
  }

  getData(){
    return this.http.get(this.URL);
  }

}

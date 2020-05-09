import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ImgService {
  client_id= environment.Unsplash.APPLICATION_ID;
  url='https://api.unsplash.com//photos?client_id='+this.client_id+'&fit=clip&w=100&h=100&page='
  
  constructor(private http:HttpClient) { }

  getRandom(page){
    console.log(page)
    return this.http.get(this.url+page+'&per_page=30')
  }

  getImgbyName(name){
    return this.http.get(this.url+"&query="+name);
  }
}

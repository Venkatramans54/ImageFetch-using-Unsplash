import { Component, OnInit } from '@angular/core';
import { ImgService } from '../img.service';
import { ResourceLoader } from '@angular/compiler';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  completeData:any
  images=[]
  page=1
  constructor(private imgService: ImgService) { }

  ngOnInit(): void {
    this.imgService.getRandom(this.page)
      .subscribe(res=>{
        this.completeData=res
        console.log(this.completeData)
      });
      this.page++;
  }

  loadImage(){
    this.imgService.getRandom(this.page)
      .subscribe(res=>{
        this.completeData=res
      })
      this.page++;
      document.documentElement.scrollTop=0;
  }

  fetchImage(imgType:any){
    this.imgService.getImgbyName(imgType)
    .subscribe(res=>{
      this.completeData=res
      console.log(this.completeData)
    });
  }

  viewImage(img){
    console.log('l')
    const anchorTag=document.createElement('a')
    anchorTag.setAttribute('href', encodeURI(img.links.download))
    anchorTag.setAttribute('target','__system');
    anchorTag.click();

  }
  downloadImage(img){
    var imga=new Blob([img.links.download],{type:"image/png"})
    const anchorTag=document.createElement('a');
    anchorTag.href=URL.createObjectURL(imga)
    anchorTag.download=img.user.name
    document.body.appendChild(anchorTag);
    anchorTag.click();
  }

}

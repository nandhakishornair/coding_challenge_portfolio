import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DetailsService } from '../details.service';
@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.css']
})
export class TestimonyComponent implements OnInit {
  testimonials = [{
    imageUrl:'',
    name :'',
    title : '',    
    description : ''
  }];  
  constructor(private myTestimony:DetailsService) { }

  ngOnInit(): void {
    this.myTestimony.getTestimonials()
    .subscribe((data)=>{
      this.testimonials = JSON.parse(JSON.stringify(data));      
    })       
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      // 940: {
      //   items: 4
      // }
    },
    nav: true
  }
}

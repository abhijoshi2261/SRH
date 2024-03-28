import { Component } from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  carouselArr:any[]=[
    {image:'.assets/product1.jpeg', text:'Sample Text1'},
    {image:'.assets/product2.jpeg', text:'Sample Text2'},
    {image:'.assets/product3.jpeg', text:'Sample Text3'},
    {image:'.assets/product4.jpeg', text:'Sample Text4'},
    {image:'.assets/product5.jpeg', text:'Sample Text5'},
  ];

}

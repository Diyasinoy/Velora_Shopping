import { Component } from '@angular/core';
import { Carousel } from "../../ui/carousel/carousel";
import { Cards } from '../../ui/cards/cards';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink , Carousel, Cards],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}

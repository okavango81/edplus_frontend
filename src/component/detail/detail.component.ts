import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {SlideCardComponent} from '../slide-card/slide-card.component';

@Component({
  selector: 'app-detail',
  imports: [

    SlideCardComponent
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

}

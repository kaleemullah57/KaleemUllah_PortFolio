import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-about-left-side',
  standalone: true,
  imports: [],
  templateUrl: './about-left-side.component.html',
  styleUrls: ['./about-left-side.component.css']
})
export class AboutLeftSideComponent  {


}

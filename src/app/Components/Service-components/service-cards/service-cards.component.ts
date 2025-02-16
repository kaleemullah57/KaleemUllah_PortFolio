import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-service-cards',
  standalone: true,
  imports: [],
  templateUrl: './service-cards.component.html',
  styleUrl: './service-cards.component.css'
})
export class ServiceCardsComponent {
  // @ViewChild('animatedSection', { static: true }) animatedSectionRef!: ElementRef;
 
}

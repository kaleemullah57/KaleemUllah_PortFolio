import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-service-cards',
  standalone: true,
  imports: [],
  templateUrl: './service-cards.component.html',
  styleUrl: './service-cards.component.css'
})
export class ServiceCardsComponent implements AfterViewInit {
  @ViewChild('animatedSection', { static: true }) animatedSectionRef!: ElementRef;
  ngAfterViewInit(): void {
    gsap.from(this.animatedSectionRef.nativeElement, {
      opacity: 0,
      y: -80,
      duration: 2,
      scale: 1,
      rotate:0,
      scrollTrigger: {
        trigger: this.animatedSectionRef.nativeElement,
        start: "top 90%", // Animation starts when the element enters the viewport (90% from top)
        toggleActions: "play none none reverse" // Reverses when scrolling up
      }
    });
  }
}

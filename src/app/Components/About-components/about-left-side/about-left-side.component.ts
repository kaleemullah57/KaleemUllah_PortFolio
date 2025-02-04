import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-about-left-side',
  standalone: true,
  imports: [],
  templateUrl: './about-left-side.component.html',
  styleUrls: ['./about-left-side.component.css']
})
export class AboutLeftSideComponent implements AfterViewInit {
  @ViewChild('animatedSection', { static: true }) animatedSectionRef!: ElementRef;
  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(this.animatedSectionRef.nativeElement, {
      opacity: 0,
      y : 80,
      duration: 2,
      scale: 1,
      scrollTrigger: {
        trigger: this.animatedSectionRef.nativeElement,
        start: "top 90%", // Animation starts when the element enters the viewport (90% from top)
        toggleActions: "play none none reverse" // Reverses when scrolling up
      }
    })
  }

}

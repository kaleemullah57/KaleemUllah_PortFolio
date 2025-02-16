import { AfterViewInit, Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
@Component({
  selector: 'app-about-right-side',
  standalone: true,
  imports: [],
  templateUrl: './about-right-side.component.html',
  styleUrls: ['./about-right-side.component.css']
})
export class AboutRightSideComponent  {

  // @ViewChild('animatedSection', { static: true }) animatedSectionRef! : ElementRef; 
  // ngAfterViewInit(): void {
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.from(this.animatedSectionRef.nativeElement, {
  //     opacity: 0,
  //     y : 80,
  //     duration : 2,
  //     scale: 1,
  //     scrollTrigger: {
  //       trigger: this.animatedSectionRef.nativeElement,
  //       start: "top 90%",
  //       toggleActions: 'play none none reverse',
  //     }
  //   })
  // }


}

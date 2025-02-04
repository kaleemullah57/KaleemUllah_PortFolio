import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { HeroLefSideComponent } from "../../Components/Hero-components/hero-lef-side/hero-lef-side.component";
import { HeroRightSideComponent } from '../../Components/Hero-components/hero-right-side/hero-right-side.component';
import { AboutLeftSideComponent } from "../../Components/About-components/about-left-side/about-left-side.component";
import { AboutRightSideComponent } from "../../Components/About-components/about-right-side/about-right-side.component";
import { ServiceCardsComponent } from "../../Components/Service-components/service-cards/service-cards.component";


import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);



@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    HeroLefSideComponent,
    HeroRightSideComponent,
    HeroLefSideComponent,
    AboutLeftSideComponent,
    AboutRightSideComponent,
    ServiceCardsComponent
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements AfterViewInit {

  // isNavbarCollapsed: any;




  @ViewChild('animatedSection', { static: true }) animatedSectionRef!: ElementRef;


  ngAfterViewInit(): void {
    gsap.from(this.animatedSectionRef.nativeElement, {
      opacity: 0,
      y: 20,
      duration: 2,
      scale: 1,
      scrollTrigger: {
        trigger: this.animatedSectionRef.nativeElement,
        start: "top 90%",
        toggleActions: 'play none none reverse',
      }
    })
  }
}





// @ViewChild('targettedElement') targetElementRef!: ElementRef;
   // this.targettedElement = this.targetElementRef.nativeElement;
  // Add this in constructor
  //  if (this.targetElementRef) {
  //   console.log("Targetted Element Initiliazed", this.targetElementRef.nativeElement);
  // }



  // colors: string[] = ['red', 'blue', 'green', 'black', 'gray', 'white']
  // getTargettedText(color: string) {

  //   const changeText = () => {
  //     if (this.targetElementRef) {
  //       this.targetElementRef.nativeElement.style.backgroundColor = color;
  //     }
  //   };
  //   return changeText();
  // }


  // handleClick() {
  //   const randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
  //   this.getTargettedText(randomColor);
  // }

// }

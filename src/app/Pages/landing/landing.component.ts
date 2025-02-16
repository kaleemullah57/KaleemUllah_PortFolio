import { CommonModule } from '@angular/common';
import {  Component, ElementRef,OnInit, ViewChild } from '@angular/core';
import { HeroLefSideComponent } from "../../Components/Hero-components/hero-lef-side/hero-lef-side.component";
import { HeroRightSideComponent } from '../../Components/Hero-components/hero-right-side/hero-right-side.component';
import { AboutLeftSideComponent } from "../../Components/About-components/about-left-side/about-left-side.component";
import { AboutRightSideComponent } from "../../Components/About-components/about-right-side/about-right-side.component";
import { ServiceCardsComponent } from "../../Components/Service-components/service-cards/service-cards.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavbarComponent } from '../../Components/navbar/navbar.component';
import { Console } from 'console';
import { ProjectsComponent } from '../../Components/Projects/projects/projects.component';





@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroLefSideComponent,
    HeroRightSideComponent,
    HeroLefSideComponent,
    AboutLeftSideComponent,
    AboutRightSideComponent,
    ServiceCardsComponent,
    ProjectsComponent,
    ReactiveFormsModule
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {


// Animation using GSAP Library
@ViewChild('animatedElement') animatedElement!: ElementRef;

  constructor(private fb: FormBuilder) {  }
  registerUsers: FormGroup = undefined!;
  ngOnInit(): void {
    this.registerUsers = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    console.log(window.screen.width);
  }

  onSubmit() {
    if (this.registerUsers.valid) {
      console.log('Form Data:', this.registerUsers.value);
    } else {
      console.log('Form is invalid');
    }

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

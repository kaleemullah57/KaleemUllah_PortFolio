import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingComponent } from "./Pages/landing/landing.component";
import { NavbarComponent } from "./Components/navbar/navbar.component";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandingComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'KUPortFolio';
}

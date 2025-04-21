import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {



  showData1 = true;
  blink1 = false;
  showData2 = false;
  blink2 = false;
  showData3 = false;
  blink3 = false;
  showData4 = false;
  blink4 =  false;
  showData5 = false;
  blink5 = false;

  toggleData1 (){
    this.showData1 = !this.showData1;

    if(this.showData1){
      this.blink1 = true;
      setTimeout(() => {
        this.blink1 = false;
      }, 500);
    }
  }

  toggleData2 (){
    this.showData2 = !this.showData2


    if(this.showData2){
      this.blink2 = true;

      setTimeout(() => {
        this.blink2 = false;
      }, 500);
    }
  }

  toggleData3 (){
    this.showData3 = !this.showData3;

    
    if(this.showData3){
      this.blink3 = true;

      setTimeout(() => {
        this.blink3 = false;
      }, 500);
    }
  }

  toggleData4 (){
    this.showData4 = !this.showData4;

    if(this.showData4){
      this.blink4 = true;

      setTimeout(() => {
        this.blink4 = false;
      }, 500);
    }
  }

  toggleData5 (){
    this.showData5 = !this.showData5;

    if(this.showData5){
      this.blink5 = true;

      setTimeout(() => {
        this.blink5 = false;
      }, 500);
    }
  }
}

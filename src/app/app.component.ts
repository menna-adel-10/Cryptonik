import { animate,state, style, transition, trigger } from '@angular/animations'
import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';


//const enterTransition = transition(':enter', [
  //style({
    //opacity: 0,
  //}),
  //animate('1s ease-in', style({ opacity: 1 })),
//]);
//const fadeIn = trigger('fadeIn', [enterTransition])
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'crypto-API';


}



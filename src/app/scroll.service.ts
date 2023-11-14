import { Injectable } from '@angular/core';
import * as ScrollMagic from 'scrollmagic';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  private scrollController: ScrollMagic.Controller;

  constructor() {
    this.scrollController = new ScrollMagic.Controller();
  }

  revealElement(elementId: string): void {
    new ScrollMagic.Scene({
      triggerElement: elementId,
      triggerHook: 0.8,
    })
    .setClassToggle(elementId, 'reveal')
    .addTo(this.scrollController);
  }
}

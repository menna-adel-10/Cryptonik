import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  faBars = faBars;
  faX = faXmark;
  click = false;

  handleClick() {
    this.click = !this.click;
  }

  toHome() {
    document.getElementById("home")?.scrollIntoView({behavior:"smooth"});
  }

  toFeatured() {
    document.getElementById("featured")?.scrollIntoView({behavior:"smooth"});
  }

  toEarn() {
    document.getElementById("earn")?.scrollIntoView({behavior:"smooth"});
  }

  toContact() {
    document.getElementById("contact")?.scrollIntoView({behavior:"smooth"});
  }
}


import { Component, OnInit } from '@angular/core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FeaturedService } from 'src/app/featured.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit{

  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;

  coins: any[] = [];
  data: any[] = [];
  constructor(private featuredService: FeaturedService) { }

  ngOnInit(): void {
    this.featuredService.getCoinData()
      .subscribe(
        data => {
          this.coins = data;
          console.log(data);
        },
        error => {
          console.log(error);
        },
      );
  }
}



import { Component, OnInit } from '@angular/core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FeaturedService } from './featured.service';
import { error } from '@ant-design/icons-angular';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit{

  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;

  data: any[] = [];
  constructor(private featuredService: FeaturedService) { }

  ngOnInit(): void {
    this.getCoinData();
  }

  getCoinData() {
    this.featuredService.getAllCoinData().subscribe((res: any) => {
      this.data = res
    }, error => {
      alert(error.message);
    })
    
  }

}



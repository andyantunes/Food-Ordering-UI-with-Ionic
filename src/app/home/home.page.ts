import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  protected categories = [];
  protected highlights = [];
  protected featured = [];

  protected catSlideOpts = {
    freeMode: true,
    slidesPerView: 3.5,
    slidesOffsetBefore: 11,
    spaceBetween: 10,
  };

  protected highlightSlidesOpts = {
    slidesPerView: 1.05,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
  };

  protected featuredSlidesOpts = {
    slidesPerView: 1.2,
    spaceBetween: 10,
    freeMode: true,
  };

  private homeJson: string;

  constructor(private http: HttpClient) {
    this.homeJson =
      'https://devdactic.fra1.digitaloceanspaces.com/foodui/home.json';
  }

  ngOnInit() {
    this.http.get(this.homeJson).subscribe((res: any) => {
      console.log(res);
      this.categories = res.categories;
      this.highlights = res.highlights;
      this.featured = res.featured;
    });
  }
}

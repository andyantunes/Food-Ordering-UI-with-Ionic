import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  private detailJson = '';

  protected data = null;

  constructor(private http: HttpClient) {
    this.detailJson =
      'https://devdactic.fra1.digitaloceanspaces.com/foodui/1.json';
  }

  ngOnInit() {
    this.http.get(this.detailJson).subscribe((res: any) => {
      this.data = res;
      console.log(res);
    });
  }
}

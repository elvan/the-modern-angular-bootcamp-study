import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { label: 'Favourites', value: '22' },
    { label: 'Page Views', value: '967' },
    { label: 'Users', value: '30' },
  ];

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(meta: Meta, title: Title) {

    title.setTitle('SEO - Home Page');

    meta.addTags([
      {
        name: 'author', content: 'Ramanuj'
      },
      {
        name: 'keywords', content: 'Angular 4 tutorial, Search Engine Optimization (SEO)'
      },
      {
        name: 'description', content: 'Home page descriptions in short.'
      }
    ]);

  }

  ngOnInit() {
  }

}

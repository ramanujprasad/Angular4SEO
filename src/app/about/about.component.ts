import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(meta: Meta, title: Title) {

    title.setTitle('SEO - About Page');

    meta.addTags([
      {
        name: 'author', content: 'Ramanuj'
      },
      {
        name: 'keywords', content: 'What do you know about SEO?'
      },
      {
        name: 'description', content: 'About page descriptions in short.'
      }
    ]);

  }

  ngOnInit() {
  }

}

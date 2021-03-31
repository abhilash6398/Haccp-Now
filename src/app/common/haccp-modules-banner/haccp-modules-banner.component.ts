import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-haccp-modules-banner',
  templateUrl: './haccp-modules-banner.component.html',
  styleUrls: ['./haccp-modules-banner.component.css']
})
export class HaccpModulesBannerComponent implements OnInit {

  @Input()
  title: String;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-haccp-module-internal-list',
  templateUrl: './haccp-module-internal-list.component.html',
  styleUrls: ['./haccp-module-internal-list.component.css']
})
export class HaccpModuleInternalListComponent implements OnInit {
  @Input()
  moduleID: any;

  constructor() { }

  ngOnInit(): void {
  }

}

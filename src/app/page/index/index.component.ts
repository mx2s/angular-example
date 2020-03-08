import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  @HostBinding('class') class = 'page-min-width';

  constructor() { }

  ngOnInit(): void {
  }

}

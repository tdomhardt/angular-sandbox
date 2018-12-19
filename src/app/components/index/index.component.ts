import { Component, OnInit, Inject} from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(){}

  items: number[] = [1, 2, 3, 4, 5, 6, 7];  
}

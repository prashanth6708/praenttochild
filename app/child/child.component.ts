import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() setMessage(msg) {
    this.childMessage = msg;
    console.log('this.childMessage: ', this.childMessage)
  }

  childMessage = ''

  constructor() { }

  ngOnInit() {
  }

}

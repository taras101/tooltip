import {Component, OnInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-tooltipbtn',
  templateUrl: './tooltipbtn.component.html',
  styleUrls: ['./tooltipbtn.component.sass']
})
export class TooltipbtnComponent implements OnInit {
  hider = true;
  btnId: number;

  @HostListener('click', ['$event'])
  tooltip(event) {
    // if this is showing and btnId has been set, do nothing
    if (!this.hider && this.btnId === event.currentTarget.id) {
    } else {
      // set btnId
      this.btnId = event.currentTarget.id;
      // let elem = document.querySelector('this.btnId');
      // let bounding = elem.getBoundingClientRect();
      // console.log(bounding);
    }
  }

  onKeydown(event) {
    if (event.key === 'Escape') {
      this.hider = true;
    }
  }

  // listen for window clicks
  @HostListener('window:click', ['$event.target.id'])
  onClick(targetElement: number) {
    this.hider = targetElement !== this.btnId;
  }

  constructor() {
  }

  ngOnInit() {
  }
}

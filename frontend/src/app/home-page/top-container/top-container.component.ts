import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-container',
  templateUrl: './top-container.component.html',
  styleUrls: ['./top-container.component.css']
})
export class TopContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /**
   * Scroll the window to an element
   * @param id The string id of the element
   */
  scrollIntoView(id: string) {
    // Select the element and then scroll to that element. https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
    document.querySelector(id).scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

}

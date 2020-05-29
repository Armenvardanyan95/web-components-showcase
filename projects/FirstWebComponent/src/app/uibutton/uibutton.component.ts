import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-uibutton',
  templateUrl: './uibutton.component.html',
  styleUrls: ['./uibutton.component.scss']
})
export class UIButtonComponent {

  @Input() label = '';

}

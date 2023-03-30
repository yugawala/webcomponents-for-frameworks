import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <fancy-button (click)="onClickMethod()">Angular側のボタン</fancy-button>
  `,
})
export class AppComponent {
  title = 'angular-app';

  onClickMethod() {
    alert('Angular側のボタンがクリックされました');
  }
}

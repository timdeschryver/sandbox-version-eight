import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sandbox-version-eight';

  constructor(private store: Store<any>) { }

  ping() {
    this.store.dispatch({ type: 'PING' });
  }
}

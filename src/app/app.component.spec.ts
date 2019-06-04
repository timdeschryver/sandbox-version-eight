import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { render } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('should create the app', async () => {
    const fixture = await render(AppComponent, {
      imports: [RouterTestingModule],
      providers: [provideMockStore()],
    });
    fixture.getByText('Dispatch PING action', {selector: 'button'});
  });
});

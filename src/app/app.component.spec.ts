import { RouterTestingModule } from '@angular/router/testing';
import { render } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('should create the app', async () => {
    const fixture = await render(AppComponent, {
      imports: [RouterTestingModule]
    });
    fixture.getByText('Here are some links to help you start:');
  });
});

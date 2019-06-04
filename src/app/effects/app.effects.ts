import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';

@Injectable()
export class AppEffects {
  @Effect()
  pingPong = this.actions$.pipe(
    ofType('PING'),
    map(() => ({ type: 'PONG' }))
  );

  constructor(private actions$: Actions) {}
}

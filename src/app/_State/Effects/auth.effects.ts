import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, EffectsFeatureModule, ofType } from '@ngrx/effects';
// import {Effect} from '@ngrx/effects'
 import { Observable } from 'rxjs';
 import { of } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { AuthServiceService } from 'app/_services/AuthService/auth-service.service';

import {
  AuthActionTypes,
  LogIn, LogInSuccess, LogInFailure,
  LogOut,
} from '../Action/auth.actions'
import { StorageSService } from 'app/_services/storageService/storage-s.service';



@Injectable()
export class AuthEffects {

  constructor(
    private actions: Actions,
    private authService: AuthServiceService,
    private router: Router,
    private storageSService :StorageSService
  ) {}


//   @Effect()
//   LogIn: Observable<any> = this.actions
//   .ofType(AuthActionTypes.LOGIN)
//   .map((action: LogIn) => action.payload)
//   .switchMap(payload => {
//     return this.authService.logIn(payload.email, payload.password)
//       .map((user) => {
//         return new LogInSuccess({token: user.token, email: payload.email});
//       })
//       .catch((error) => {
//         return Observable.of(new LogInFailure({ error: error }));
//       });
//   });

Login:Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN),
    map((action: LogIn) => action.payload),
    switchMap(payload => {
            return this.authService.Login(payload.username, payload.password)
            .pipe(
              map((user) => {
                return new LogInSuccess({nomUser: payload.nomUser,email:payload.email,prenomUser:payload.prenomUser,permissions:payload.permissions,jwtAccessToken:payload.jwtAccessToken});
              }),
              catchError((error) => {
                return of(new LogInFailure({ error: error }));
              })
              )
          })
);

  LogInSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_SUCCESS),
    tap((user) => {
      this.storageSService.saveToken(user.jwtAccessTocken);
      this.storageSService.saveUser(user);
      this.router.navigateByUrl('/Admin');
    })
  );


  
}
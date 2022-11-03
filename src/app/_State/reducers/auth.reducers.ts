import { AppUser } from 'app/Models/AppUser';
import { AuthActionTypes, All } from '../Action/auth.actions';


export interface State {
    // is a user authenticated?
    isAuthenticated: boolean;
    // if authenticated, there should be a user object
    user: AppUser | null;
    // error message
    errorMessage: string | null;
  }

  export const initialState: State = {
    isAuthenticated: false,
    user: null,
    errorMessage: null
  };


  export function reducer(state = initialState, action: All): State {
    switch (action.type) {
        case AuthActionTypes.LOGIN: {
            return {
              ...state,
              isAuthenticated: false,
              user: {
         
               username:action.payload.username,
               password:action.payload.password
              },
              errorMessage: null
            };
          }
      case AuthActionTypes.LOGIN_SUCCESS: {
        return {
          ...state,
          isAuthenticated: true,
          user: {
           nomUser:action.payload.nomUser,
           email: action.payload.email,
           prenomUser:action.payload.prenomUser,
           permissions:action.payload.permissions,
           jwtAccessToken:action.payload.jwtAccessToken
          },
          errorMessage: null
        };
      }
      case AuthActionTypes.LOGIN_FAILURE: {
        return {
          ...state,
          errorMessage: 'Username ou password incorrect'
        };
      }
      case AuthActionTypes.LOGOUT: {
        return initialState;
      }
      default: {
        return state;
      }
    }
  }
  
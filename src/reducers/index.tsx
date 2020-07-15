import { Action } from '../actions';
import { INCREMENT, DECREMENT } from '../constants/index';

export default (state = 0, action: Action): number => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return  state -1 ;
    default: 
      return state;
  }
  
}
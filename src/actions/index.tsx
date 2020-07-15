import {INCREMENT,DECREMENT} from '../constants'
export interface IncrementAction {
    type: INCREMENT;
}

export interface DecrementAction {
    type: DECREMENT;
}

export type Action = IncrementAction | DecrementAction;

export function increment(): IncrementAction {
    return {
        type: INCREMENT
    }
}

export function decrement(): DecrementAction {
    return {
        type: DECREMENT
    }
}
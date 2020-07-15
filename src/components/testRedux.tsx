import React, { Component } from 'react'
import {decrement, increment} from '../actions/index';
import { StoreState } from '../types/index';
import { connect,  } from 'react-redux';
import {Dispatch} from 'redux'

export interface IProps {
    value?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

 class TestRedux extends Component<IProps>{
    constructor(props: IProps){
        super(props)
        this.state = {

        }
    }
    render() {
        const { value, onIncrement, onDecrement} = this.props
        return (
            <div>
                <p>value{value}</p>
                <button onClick={onDecrement}>-</button>
                <button onClick={onIncrement}>+</button>
            </div>
        )
    }
}
const mapStateToProps = (state: StoreState): { value: number} => ({
    value: state
})
  
const  mapDispatchToProps = (dispatch: Dispatch) => ({
    
      onIncrement: () => dispatch(increment()),
      onDecrement: () => dispatch(decrement()),
    
  })
  
export default connect(mapStateToProps, mapDispatchToProps)(TestRedux);
import React from 'react';
import Home from './components/Home'
import List from './pages/List'
import TestRedux from './components/testRedux'
class App extends React.Component{

  constructor(props: any){
    super(props)
    this.state = {

    }
  }
  onFatherClick = (a: string) => {
    console.log(a)
  }
  render(){
    return (
      <div className="App">
        <p>love me</p>
        <Home title='标题' onFatherClick={ this.onFatherClick.bind(this)}/>
        <br/>
        <br/>
        <br/>
        <List />
        <br/>
        <br/>
        <br/>
        <TestRedux />
      </div>
    );
  }
}

export default App;

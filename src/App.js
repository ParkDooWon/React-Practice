import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import './App.css';

function App() {

  return (
      <Wrapper>
        <Hello name = 'react' color='red' canShow = {true}/>  {/*canShow에 값 지정안하면 자동으로 true로 설정*/}
        <Hello color='green'/>
        <Hello/>
      </Wrapper>
  );
}

export default App;
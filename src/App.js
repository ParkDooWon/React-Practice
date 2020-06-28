import React from 'react';
import Hello from './Hello';
import './App.css';

function App() {
  const name = 'react';
  const style = {
      backgroundColor: 'black',
      color: 'aqua',
      fontSize: 64,
      padding: 93
  }

  return (
      <>
          {/*이건 안보임*/}
          /*이건 보임*/
          <Hello />
          <div style={style}>
              {/*이렇게 주석도 가능*/}
              {name}</div>
          <div className="gray-box">dd</div>
      </>
  )
}

export default App;
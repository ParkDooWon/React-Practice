import React, {useState} from 'react';
// import { createGlobalStyle } from 'styled-components';
// import TodoTemplate from './components/TodoTemplate';
// import TodoHead from './components/TodoHead';
// import TodoList from "./components/TodoList";
// import TodoCreate from "./components/TodoCreate";
// import {TodoProvider} from "./TodoContext";

// const GlobalStyle = createGlobalStyle`
//     body {
//       background: #e9ecef
//     }
// `;

function Colors() {
    const [message, setMessage] = useState('');
    const [color, setColor] = useState('black');

    return (
        <div>
            <button onClick={() => setMessage('Enter')}>입장</button>
            <button onClick={() => setMessage('Bye!')}>퇴장</button>
            <h1 style={{color}}>{message}</h1>
            <button onClick={() => setColor('red')}>Red</button>
            <button onClick={() => setColor('blue')}>Blue</button>
            <button onClick={() => setColor('green')}>Green</button>
        </div>
    )
}

function App() {
  return (
      <Colors/>
      // <TodoProvider>
      //   <GlobalStyle/>
      //   <TodoTemplate>
      //     <TodoHead/>
      //     <TodoList/>
      //     <TodoCreate/>
      //   </TodoTemplate>
      // </TodoProvider>
  );
}

export default App;
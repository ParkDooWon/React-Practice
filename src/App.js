import React from 'react';
import Info from "./Info";

function App() {
  const names = ['doo', 'ab', 'c'];
  const t = names.map(index => index.concat('s'));
  console.log(t);

  return (
      <Info/>
  );
}

export default App;
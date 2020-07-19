import React from 'react';
// import EventPractice from "./EventPractice";
import IterationSample from "./IterationSample";

function App() {
  const names = ['doo', 'ab', 'c'];
  const t = names.map(index => index.concat('s'));
  console.log(t);

  return (
      <IterationSample/>
  );
}

export default App;
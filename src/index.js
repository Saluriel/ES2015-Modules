import React from 'react';
import ReactDOM from 'react-dom/client';
import foods from './foods'
import { choice, remove } from './helpers';

let fruit = choice(foods)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <p>I'd like one {fruit}, please!</p>
      <p>Here you go: {fruit}</p>
      <p>Delicious!  May I have another?</p>
      <p>I'm sorry we're all out.  We have {foods.length} left!</p>
    </div>
  </React.StrictMode>
);



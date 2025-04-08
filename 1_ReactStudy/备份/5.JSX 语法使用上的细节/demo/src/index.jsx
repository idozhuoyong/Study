import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

let text = "React 学习"
root.render(
  <>
    <div>
      {text}
    </div>
  </>
);


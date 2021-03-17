
import ReactDOM from 'react-dom';
// const index = 0;

setInterval(() =>{
  const element =(
    <h1 className="heading">
    <span className="text">Hello World {new Date().toLocaleTimeString()}</span>
    
    </h1>
  );
  ReactDOM.render(element, document.getElementById('root'));
},)




// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// reportWebVitals();

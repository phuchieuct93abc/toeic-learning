import React from 'react';
import './App.css';

function App() {

  let logo = "https://frontend.cloudaccess.host/wp-content/uploads/2019/03/010a9061-dcf4-4dd9-b879-ba1a7305280f-150x150.png"
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo}  alt="logo" />
        Welcome to        <a href="{blog}">Frontend        </a>
        Check to see if CircleCI works
      </header>
    </div>
  );
}

export default App;

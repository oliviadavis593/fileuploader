import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const FILES = [
    {"fileType":"jpg","size":"4.3MB","name":"me on skis.jpg","status":"Synced"},
    {"fileType":"mov","size":"1.3GB","name":"cats falling.mov","status":"Uploaded"},
    {"fileType":"txt","size":"0.9KB","name":"My December expenses.txt","status":"Uploaded"},
    {"fileType":"mp3","size":"3.4MB","name":"disturbed_sound_of_silence.mp3","status":"New"},
];

ReactDOM.render(<App files={FILES} />, document.getElementById('root'));

//Explaining the code 
/*
- added a declaration const to hold some data to test this app 
- Passed the const to the App component as a prop 
- FILES const = an array of file objects for display in the user interface
- Notice the props files={FILES} being paseed to App
*/
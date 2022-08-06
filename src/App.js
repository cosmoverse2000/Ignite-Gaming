import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import Nav from './Nav';

function App() {


  const [weather, setWeather] = useState(null);
  const [input, setInput] = useState("");
  useEffect(() => {
    const res = axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=London&aqi=no`).then(data => {
      setWeather(data.data);
      // console.log(data.data);
      // console.log(process.env.REACT_APP_API_KEY);
    }).catch(err => {
      console.log(err);
    })
  }, []);

  const weatherInput = (e) => {
    setInput(e.target.value);
  };

  const showWeather = () => {
    console.log(input);
    axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${input}&aqi=no`).then(data => {
      setWeather(data.data);
      // console.log(data.data);
    }).catch(err => {
      console.log(err);
    });
  }


  const counter = useSelector((state) => state.counter);
  const isLogin = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();



  return (
    <div>
      Hello Axios
      <div>
        <input type="text" placeholder="Enter City" onChange={weatherInput}></input>
        <button type='submit' onClick={showWeather}>Submit</button>
      </div>

      {weather && (<div>
        <h1>{weather.location.name}</h1>
        <h2>{weather.location.region}</h2>
        <h3>{weather.current.condition.text}</h3>
        <img src={weather.current.condition.icon}></img>
        <h3>{weather.current.temp_c} °C</h3>

      </div>)}

      {console.log(counter, "okok")}
      <div>
        <h1>Counter : {counter}</h1>
        <button onClick={() => { dispatch({ type: "INCREMENT" }) }} >Increment</button>
        <Nav />
        {isLogin && (
          <h1>MOIVE LIST</h1>
        )}
      </div>

    </div>
  );
}

export default App;

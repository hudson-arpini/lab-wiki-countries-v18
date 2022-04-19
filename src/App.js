import {BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from "axios"
import { NavBar } from "./Components/NavBar";
import { CountriesList } from "./Components/CountriesList";
import { CountryDetails } from "./Components/CountryDetails";


function App() {

  const [countries, setCountries]= useState([])

  useEffect(()=>{
    async function fetchCountries(){
      const response = await axios.get("https://ih-countries-api.herokuapp.com/countries")

      setCountries(response.data)
    }

    fetchCountries()
  },[])

  return (
    <div className="App">
    <BrowserRouter>
      <NavBar/>
      <CountriesList list={countries}/>
      <Routes>
        <Route path="/country/:countryCode" element={<CountryDetails />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

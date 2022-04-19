import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import axios from "axios"

export function CountryDetails() {
    const params = useParams()
    const[country, setCountry]=useState({})

    useEffect(()=>{
        async function fetchCountry(){
            const response = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${params.countryCode}`)
            setCountry(response.data)
        }
        
        fetchCountry()
    },[])

    console.log(country)
    console.log(params)
    
    return (
        <h1>{country.alpha3Code}</h1>
        
    )
        
}

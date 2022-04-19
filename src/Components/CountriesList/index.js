import { Link } from "react-router-dom";

export function CountriesList (props) {
    return (
    <ul>
    {props.list.map((country)=>{return (
        <li key={country.alpha3Code}>
        <Link to={`/country/${country.alpha3Code}`}>
            <button>
                <img src= {`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt='countryflag' />
                <strong>{country.name.common}</strong>
            </button>
        </Link>
        </li>
    )})}
    </ul>  
    )
    ;
}

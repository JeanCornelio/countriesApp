//API
const API_URL = 'https://restcountries.com/v3.1';


//Get All Contries
export const getAllCountries = async ()  =>{
    const response = await fetch(`${API_URL}/all`);
    const countries = await response.json();
    return countries
}

//Get Contrie
export const getCountrieCode = async (code)  =>{
    const response = await fetch(`${API_URL}/alpha/${code}`);
    const countrie = await response.json();
    return countrie
}



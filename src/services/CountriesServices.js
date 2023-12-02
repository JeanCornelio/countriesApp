//API
const API_URL = 'https://restcountries.com/v3.1';


//Get All Countries
export const getAllCountries = async ()  =>{
    const response = await fetch(`${API_URL}/all`);
    const countries = await response.json();
    return countries
}

//Get Countrie
export const getCountrieCode = async (code)  =>{
    const response = await fetch(`${API_URL}/alpha/${code}`);
    const countrie = await response.json();
    return countrie
}

//Get Countries for Search 
export const getForSearch = async (name)  =>{
    const response = await fetch(`${API_URL}/name/${name}?fields=name,altSpellings`);
    const countrie = await response.json();
    if(countrie.length > 0){
        return countrie
    }
    return  []
}



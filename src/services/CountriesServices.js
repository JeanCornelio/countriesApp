//API
const API_URL = 'https://restcountries.com/v3.1';
const API_URL_v2 = 'https://restcountries.com/v2';


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
export const getCountriesForSearch = async (name)  =>{
    const response = await fetch(`${API_URL}/name/${name}?fields=name,altSpellings`);
    const countrie = await response.json();
    if(countrie.length > 0){
        return countrie
    }
    return  []
}

//Get Capital for Search 
export const getCapitalsForSearch = async (name)  =>{
    const response = await fetch(`${API_URL}/capital/${name}?fields=name,altSpellings,capital`);
    const capital = await response.json();
    if(capital.length > 0){
        return capital
    }
    return  []
}

//Get Countries for Region
export const getForRegion = async (sigla)  =>{
    const response = await fetch(`${API_URL_v2}/regionalbloc/${sigla}?capital,alpha3Code,flags,population,region,cca`);
    const regions = await response.json();
   
    return  regions
}

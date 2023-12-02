import { getForSearch } from "../../services"
import { setCountriesObtained } from "./CountriesSlice"



export const getCountriesSearch = (name) =>{
    
    return async  (dispatch) =>{
        

        if(name === null || name.length < 4){
            dispatch(setCountriesObtained([]))
        }else{
            const data = await  getForSearch(name)
            
            dispatch(setCountriesObtained(data))
        }
       
      
        
    }
}
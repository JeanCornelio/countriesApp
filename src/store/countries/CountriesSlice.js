import { createSlice } from '@reduxjs/toolkit';

export const CountriesSlice = createSlice({
    name: 'countrie',
    initialState: {
        inputValue: '',
        countriesObtained: [],
        regions: [],
        showSearch: false,
    },
    reducers: {
        setCountriesObtained: (state, {payload}) => {
            //console.log(payload);
            state.countriesObtained = payload
        },
        setInputValue: (state, {payload}) => {
            //console.log(payload);
            state.inputValue = payload
        },
        setRegions: (state, {payload}) => {
            //console.log(payload);
            state.regions = payload
        },
        cleanRegions: (state) => {
            //console.log(payload);
            state.regions = []
        },
        setValueShowSearch: (state, {payload}) => {
            //console.log(payload);
            state.showSearch = payload
        },
      
    }
});


// Action creators are generated for each case reducer function
export const { setCountriesObtained, setInputValue, setRegions,cleanRegions, setValueShowSearch, } = CountriesSlice.actions;
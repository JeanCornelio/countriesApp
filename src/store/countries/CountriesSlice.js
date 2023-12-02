import { createSlice } from '@reduxjs/toolkit';

export const CountriesSlice = createSlice({
    name: 'countrie',
    initialState: {
        inputValue: '',
        countriesObtained: []
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
    }
});


// Action creators are generated for each case reducer function
export const { setCountriesObtained, setInputValue } = CountriesSlice.actions;
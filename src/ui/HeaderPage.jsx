import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { InputSearch } from "../components/InputSearch";
import { useDispatch } from "react-redux";
import { getCountriesSearch } from "../store/countries/thunks";
import { useSelector } from "react-redux";
import { setInputValue } from "../store/countries/CountriesSlice";

export const HeaderPage = () => {
  const [location, setLocation] = useState("");
  const [showSerach, setShowSerach] = useState(false);
  const { countriesObtained, inputValue } = useSelector((state) => state.countries);
  const loc = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const namePath = loc.pathname.split("/")[1];
    const name = namePath.toUpperCase();
    setLocation(name);
  }, [loc]);

 
 
  useEffect(() => {
   
    const delayInputTimeoutId = setTimeout(() => {
      dispatch(getCountriesSearch(inputValue));
    }, 500);
    return () => clearTimeout(delayInputTimeoutId);
  }, [inputValue]);

 

  const resetStatesSearch = () => {
    setShowSerach(!showSerach);
    dispatch(getCountriesSearch(null));
    dispatch(setInputValue(''));
  };

  return (
    <header className="relative">
      <div className=" bg-cyan-950 sm:rounded-none lg:rounded-tl-3xl lg:rounded-bl-3xl absolute w-full  shadow-xl flex items-center z-20 justify-between">
        <h4 className="text-4xl text-white p-5">{location}</h4>
        <button
          onClick={() => setShowSerach(!showSerach)}
          className="mx-5 text-white bg-cyan-900 p-2 rounded-md transition ease-in-out delay-50 border hover:border-cyan-500 hover:text-cyan-500 "
        >
          <i className="bi bi-search" />
        </button>
      </div>
      <div
        className={
          showSerach
            ? "bg-cyan-950  rounded-bl-3xl w-full shadow-xl  justify-between items-center absolute  z-10 py-4 pt-10  mt-16"
            : "bg-cyan-950  rounded-tl-3xl rounded-bl-3xl w-full shadow-xl  justify-between items-center absolute h-20 z-10 pt-4 hidden"
        }
      >
        <InputSearch  />
        {countriesObtained.length > 0 && (
          <div className="mx-5  bg-cyan-800 border border-cyan-700 cursor-pointer rounded-lg divide-y divide-cyan-700">
            {countriesObtained.map((countrie) => (
              <Link
                to={`/countrie/${countrie.altSpellings[0]}`}
                onClick={resetStatesSearch}
                key={countrie.name.common}
                className="text-white block text-sm px-2 py-2 border-cyan-700"
              >
                {countrie.name.common}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

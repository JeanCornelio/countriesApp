import { useEffect, useState } from "react";
import { getAllCountries } from "../services";
import { CardContrie } from "../components";

export const CountriesPage = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    all();
  }, []);


  const all = async () => {
    const data = await getAllCountries();
    setCountries(data);
  };



  console.log(countries);

  return (
    <section className="mt-20">
      <div className="p-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
        {
        countries.length > 0 &&  countries.map(countrie =>(
           <CardContrie {...countrie} key={countrie.name.common} />
          ))
        }
      </div>
    </section>
  );
};

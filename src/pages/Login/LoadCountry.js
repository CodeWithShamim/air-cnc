import React, { useEffect, useState } from "react";

const LoadCountry = () => {
  const [countries, setCountries] = useState({ data: null, loading: false });

  useEffect(() => {
    setCountries({ data: null, loading: true });
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries({ data: data, loading: false }));
  }, []);

  if (countries?.loading) {
    return <option>Loading.........</option>;
  }
  const countryName = countries?.data?.map((country) => country.name.common);

  return (
    <>
      <option>Country/Region</option>
      {countryName?.sort()?.map((name) => (
        <option value={name}>{name}</option>
      ))}
    </>
  );
};

export default LoadCountry;

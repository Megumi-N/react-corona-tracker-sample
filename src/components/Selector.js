import { useState } from 'react';
import countriesJson from '../countries.json';

const Selector = () => {
  const [country, setCountry] = useState('');
  const getCountryData = () => {};
  return (
    <div>
      <p>Selector</p>
      <select onChange={(e) => setCountry(e.target.value)}>
        {countriesJson.map((country, index) => (
          <option value={country.Slug} key={index}>
            {country.Country}
          </option>
        ))}
      </select>
      {country}
    </div>
  );
};

export default Selector;

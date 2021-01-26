import React from "react";

const CharacterItem = ({ onecountry }) => {
const { continent,country,countryInfo,
          population,cases,recovered,
          deaths,tests,todayCases,
          todayRecovered,todayDeaths} = onecountry;
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={countryInfo.flag} alt="" />
        </div>
        <div className="card-back">
          <h1>{country}</h1>
          <ul>
            <li>
              <strong>Continent:</strong> {continent}
            </li>
            <li>
              <strong>Population:</strong> {population}
            </li>
            <li>
              <strong>Cases:</strong> {cases}
            </li>
            <li>
              <strong>Tested:</strong> {tests}
            </li>
            <li>
              <strong>Recovered:</strong> {recovered}
            </li>
            <li>
              <strong>Deaths:</strong> {deaths}
            </li>
            <li>
              <strong>Today Cases:</strong> {todayCases}
            </li>
            <li>
              <strong>Today Recovered:</strong> {todayRecovered}
            </li>
            <li>
              <strong>Today Deaths:</strong> {todayDeaths}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;

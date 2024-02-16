import React, { useEffect, useState } from "react";
import "./App.css";


function App() {

  const [data, setData] = useState([]);
  const [region, setRegion] = useState([]);
  const [item, setItem] = useState([]);


  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      setData(data)
      setRegion(data.map((e) => e.region))
      setItem(data)
    })
  }, [])

//  console.log(data)
//  console.log(region)


  const handleSearch = (e) => {
    if(e.target.value.length === 0) {
      setItem(data)
    } else {
      setItem(data.filter((x) => x.name.common.toLowerCase().includes(e.target.value.toLowerCase())))
    }
  }



  return (
    <div className="App">


    <div>

    <h1>Country</h1>

    <div className="searchDiv">
      <input type="text" onChange={handleSearch} placeholder="Ölkəni axtar"/>


    </div>

    </div>




      <div className="countryMain">

    {
    item.map((country, index) => {
      return(
        <div key={index} className="country">
        <div className="flag">
          <img src={country.flags.png} />
        </div>
        <div className="informations">
          <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <h2>Name:</h2>
            <p>{country.name.official}</p>
          </div>
          <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <h2>Region:</h2>
            <p>{country.region}</p>
          </div>
          <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <h2>Population:</h2>
            <p>{country.population}</p>
          </div>
          <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <h2>Capital:</h2>
            <p>{country.capital}</p>
          </div>
        </div>
      </div>

      )
    })

    }


      </div>
    </div>
  );
}

export default App;
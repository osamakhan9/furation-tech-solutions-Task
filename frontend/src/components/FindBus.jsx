import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './SearchFormCss/style.css'
const SearchForm = () => {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [loading,setLoading]=useState(false)
  const [buses,setBuses]=useState([])

  const handleFromCityChange = (e) => {
    setFromCity(e.target.value);
  };

  const handleToCityChange = (e) => {
    setToCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const data = await axios.post(
        "https://furation-tech.onrender.com/api/bus/search",
        {
          from: fromCity,
          to: toCity,
        },
        config
      );
      setBuses(data.data);
      setLoading(true)
    } catch (error) {}
  };

  return (
    <div>
      <form id="searchBus" onSubmit={handleSubmit}>
      <label>
        From:
        <input type="text" value={fromCity} onChange={handleFromCityChange} />
      </label>
      <label>
        To:
        <input type="text" value={toCity} onChange={handleToCityChange} />
      </label>
      <button  type="submit">Search</button>
    </form>
    
    <div className="searchAppend">
    {
      loading&&(
        <table id="customers">
      <thead style={{
        background:"blue",
        color:"white"
      }}>
        <tr>
          <th>BUS NAME</th>
          <th>FROM</th>
          <th>TO</th>
          <th>CHECK</th>
        </tr>
      </thead>
      <tbody style={{
        textAlign:"center"
      }}>
        {buses.map((item, index) => (
          <tr key={item._id}>
            <td>{item.name}</td>
            <td>{item.from}</td>
            <td>{item.to}</td>
            <td><Link to="/seatbook"><button onClick={()=>{
              localStorage.setItem("item",JSON.stringify(item))
            }}>Check Site </button></Link></td>
          </tr>
        ))}

      </tbody>
    </table>
      )
    }
    </div>
    </div>
  );
};

export default SearchForm;

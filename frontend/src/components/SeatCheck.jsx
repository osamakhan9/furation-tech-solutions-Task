import React, { useEffect, useState } from "react";
import axios from "axios";
import './SeatCss/style.css'

const SeatBook = () => {
  const [seatsofbus, setSeatsofBus] = useState([]);
  const [chooseSeat, setChooseSeat] = useState();
  useEffect(() => {
    async function fetchSeats() {
      let user = JSON.parse(localStorage.getItem("item"));
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      try {
        const seats = await axios.get(
          `https://furation-tech.onrender.com/api/bus/search/${user._id}`,
          config
        );
        let ob = seats.data.seats;
        let arr = [];
        for (let x in ob) {
          let object = {};
          object[`${x}`] = ob[x];
          arr.push(object);
        }
        setSeatsofBus(arr);
      } catch (error) {
        alert(error.message);
      }
    }
    fetchSeats();
  }, [chooseSeat]);

  async function addToCart() {
    let user = JSON.parse(localStorage.getItem("user"));
    let bus = JSON.parse(localStorage.getItem("item"));
    let token = user.token;
    const config = {
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    };

    try {
      const cart = await axios.post("https://furation-tech.onrender.com/api/bus/cart/add", {
        userId: user._id,
        busId: bus._id,
        seatNo: chooseSeat
      }, config)

      console.log("tocket added")
      alert("book Successfully site")
      window.location.href = "/cart"
      
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <>
      <h1 className="seatA">Seat Available</h1>

      <div id="seatdiv">
      

          {seatsofbus.map((element, index) => {
            return (



              <div key={index + 1}>

                <button className="seatNo">No :{index + 1}</button>
                <button
                  type="button"
                  onClick={(e) => {
                    setChooseSeat(index + 1);
                    addToCart();
                  }}
                >
                  {element[`${index + 1}`] ? <p>Booked</p> : "Availabe"}
                </button>
              </div>


            );
          })}
        </div>
     
    </>
  );
};

export default SeatBook;

import "./styles.css";
import { useState } from "react";

const placeTypes = {
  "Hill Station": [
    { name: "Manali", state: "Himachal Pradesh" },
    { name: "Gulmarg", state: "Jammu and Kashmir" },
    { name: "Nainital", state: "Uttarkhand" },
    { name: "Mussoorie", state: "Uttarkhand" },
    { name: "Palampuri", state: "Himachal Pradesh" }
  ],
  Beach: [
    { name: "Varkala", state: "Kerala" },
    { name: "Gokarna", state: "Karnataka" },
    { name: "Baga", state: "Goa" },
    { name: "Tarkali", state: "Maharashtra" },
    { name: "Pondicherry", state: "Tamil Nadu" }
  ],
  "Water Falls": [
    { name: "Shivanasamudra", state: "Karnataka" },
    { name: "Dudhsagar", state: "Goa" },
    { name: "Athirapally", state: "Kerala" },
    { name: "Hogenakkal", state: "Tamil Nadu" },
    { name: "Nohsngithiang", state: "Meghalaya" }
  ],
  Monuments: [
    { name: "Taj Mahal", state: "Uttar Pradesh" },
    { name: "Qutub Minar", state: "Delhi" },
    { name: "Golden Temple", state: "Amritsar" },
    { name: "Mysore Palace", state: "Karnataka" },
    { name: "Amer Fort", state: "Rajasthan" }
  ]
};
export default function App() {
  const [selectedGenre, setGenre] = useState("Hill Station");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>Travel India</h1>
      <h2>Checkout tourist places in India!!</h2>
      <h3>Select your interest to continue..</h3>
      <div>
        {Object.keys(placeTypes).map((genre) => (
          <button className="button" onClick={() => genreClickHandler(genre)}>
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul>
          {placeTypes[selectedGenre].map((place) => (
            <li className="li" key={place.name}>
              {" "}
              <div className="name"> {place.name} </div>
              <div className="state"> {place.state} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

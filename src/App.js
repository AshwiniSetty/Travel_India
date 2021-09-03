import "./styles.css";
import { useState } from "react";

const placeTypes = {
  "Hill Station": [
    { name: "Manali", state: "Himachal Pradesh", rating: "⭐⭐⭐⭐" },
    { name: "Gulmarg", state: "Jammu and Kashmir", rating: "⭐⭐⭐⭐" },
    { name: "Nainital", state: "Uttarkhand", rating: "⭐⭐⭐⭐⭐" },
    { name: "Mussoorie", state: "Uttarkhand", rating: "⭐⭐⭐⭐" },
    { name: "Palampuri", state: "Himachal Pradesh", rating: "⭐⭐⭐⭐⭐" }
  ],
  Beach: [
    { name: "Varkala", state: "Kerala", rating: "⭐⭐⭐⭐⭐" },
    { name: "Gokarna", state: "Karnataka", rating: "⭐⭐⭐⭐" },
    { name: "Baga", state: "Goa", rating: "⭐⭐⭐⭐⭐" },
    { name: "Tarkali", state: "Maharashtra", rating: "⭐⭐⭐⭐" },
    { name: "Pondicherry", state: "Tamil Nadu", rating: "⭐⭐⭐⭐⭐" }
  ],
  "Water Falls": [
    { name: "Shivanasamudra", state: "Karnataka", rating: "⭐⭐⭐⭐" },
    { name: "Dudhsagar", state: "Goa", rating: "⭐⭐⭐⭐⭐" },
    { name: "Athirapally", state: "Kerala", rating: "⭐⭐⭐⭐" },
    { name: "Hogenakkal", state: "Tamil Nadu", rating: "⭐⭐⭐⭐⭐" },
    { name: "Nohsngithiang", state: "Meghalaya", rating: "⭐⭐⭐⭐⭐" }
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
        <ul className="container">
          {placeTypes[selectedGenre].map((place) => (
            <li className="li" key={place.name}>
              {" "}
              <div className="name"> {place.name} </div>
              <div className="state">State:{place.state} </div>
              <div className="rating"> Rating:{place.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

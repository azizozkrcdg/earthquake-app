import { useState, useEffect } from "react";
import axios from "axios";
import "./Earthquake.css";

const Earthquake = () => {
  const [earthquakes, setEarthquakes] = useState([]);

  const [search, setSearch] = useState(""); // konuma göre arama
  const [minMag, setMinMag] = useState(""); // minimum büyüklük filtresi
  const [maxMag, setMaxMag] = useState(""); // maksimum büyüklük filtresi

  const filteredEarthquakes = earthquakes.filter((eq) => {
    const locationMatch = eq.location
      .toLowerCase()
      .includes(search.toLowerCase());
    const minMatch = minMag === "" || eq.magnitude >= parseFloat(minMag);
    const maxMatch = maxMag === "" || eq.magnitude <= parseFloat(maxMag);
    return locationMatch && minMatch && maxMatch;
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/earthquake")
      .then((res) => {
        console.log(res.data);
        setEarthquakes(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="earthquake-container">
      <h1 className="earthquake-title">Son Depremler</h1>
      <div className="filters">
        <input
          type="text"
          placeholder="Konuma göre ara"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          type="number"
          placeholder="Min Büyüklük"
          value={minMag}
          onChange={(e) => setMinMag(e.target.value)}
          step="0.1"
        />
        <input
          type="number"
          placeholder="Max Büyüklük"
          value={maxMag}
          onChange={(e) => setMaxMag(e.target.value)}
          step="0.1"
        />
      </div>

      <table className="earthquake-table">
        <thead>
          <tr>
            <th>Tarih</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th>Derinlik (km)</th>
            <th>Büyüklük</th>
            <th>Yer</th>
          </tr>
        </thead>

        <tbody>
          {filteredEarthquakes.map((d, i) => (
            <tr key={i}>
              <td>{d.date}</td>
              <td>{d.latitude}</td>
              <td>{d.longitude}</td>
              <td>{d.depth}</td>
              <td>{d.magnitude}</td>
              <td>{d.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Earthquake;

import { useState, useEffect } from "react";
import axios from "axios";
import "./Earthquake.css"; 

const Earthquake = () => {
  const [earthquakes, setEarthquakes] = useState([]);

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
          {earthquakes.map((d, i) => (
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

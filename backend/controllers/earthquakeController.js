import * as cheerio from "cheerio";
import axios from "axios";

const getEarthquakeData = async (req, res) => {
  try {
    const response = await axios.get(
      "https://deprem.afad.gov.tr/last-earthquakes.html"
    );
    const $ = cheerio.load(response.data);
    const rows = $("table tbody tr");
    const data = [];

    rows.each((index, row) => {
      const columns = $(row)
        .find("td")
        .map((index, el) => $(el).text().trim())
        .get();
      if (columns.length >= 6) {
        data.push({
          date: columns[0],
          latitude: columns[1],
          longitude: columns[2],
          depth: columns[3],
          magnitude: columns[5],
          location: columns[6],
        });
      }
    });
    res.status(200).json(data);
  } catch (error) {
    console.error('Hata:', error.message);
    res.status(500).send('Veri alınamadı.');
  }
};

export default {
  getEarthquakeData,
};

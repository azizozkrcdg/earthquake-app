import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const EarthquakeChart = ({ data }) => {
  // Tarihe göre sıralama ve veri formatı
  const sortedData = [...data]
    .filter(d => d.date && d.magnitude)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map((d) => {
      const dateObj = new Date(d.date)
      return {
        time: dateObj.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
        magnitude: d.magnitude,
      }
      
    });

  return (
    <div style={{ width: '100%', height: 300, marginTop: '30px' }}>
      <h3 style={{ textAlign: 'center' }}>Zamana Göre Büyüklük</h3>
      <ResponsiveContainer>
        <LineChart data={sortedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip />
          <Line type="monotone" dataKey="magnitude" stroke="#ff7300" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EarthquakeChart;

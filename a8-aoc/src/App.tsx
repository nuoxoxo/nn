import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchToken = async () => {
    try {
      const response = await axios.get('.aoc-token');
      return response.data.trim(); // trim any leading/trailing whitespace
    } catch (error: any) {
      console.error('Error while fetching token:', error.message);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://adventofcode.com/2022/day/10/input`;
      const sessionToken = await fetchToken();

      if (!sessionToken) {
        console.error('Session token not found.');
        setLoading(false);
        return;
      }

      const headers = {
        'content-Type': 'application/json',
        'Accept': '/',
        'Cache-Control': 'no-cache',
        'Cookie': `session=${sessionToken}`,
      };

      axios.defaults.withCredentials = true;
      try {
        const response = await axios.get(url, { headers });
        setData(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <pre>{data ? JSON.stringify(data, null, 2) : 'No data available.'}</pre>
      )}
    </div>
  );
}

export default App;

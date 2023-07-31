import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://adventofcode.com/2022/day/10/input`;
      const axiosConfig: Object = {
        headers: { 
          'content-Type': 'application/json',
          "Accept": "/",
          "Cache-Control": "no-cache",
          'Cookie': `session=${process.env.advent_of_code_session_token}`,
        },
        credentials: "same-origin"
      }
      // const headers = { Authorization: `Bearer ${process.env.advent_of_code_session_token}` }
      axios.defaults.withCredentials = true;
      try {
        const response = await axios.get(url, /*{ headers }*/ axiosConfig);
        setData(response.data);
      } catch (error:any) {
        // console.error('Error while fetching data:', error.message);
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

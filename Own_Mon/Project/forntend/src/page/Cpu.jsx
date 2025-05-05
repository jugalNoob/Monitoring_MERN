import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

function Cpu() {
  const [cpuUsage, setCpuUsage] = useState([]);

  const fetchCpuUsage = async () => {
    try {
      const response = await axios.get('http://localhost:9000/cpu');
      setCpuUsage(response.data);
    } catch (error) {
      console.error("Error fetching CPU usage:", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(fetchCpuUsage, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: '30px' }}>
      <h2 style={{ textAlign: 'center' }}>Live CPU Usage</h2>
      {cpuUsage.length > 0 ? (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={cpuUsage}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="core" label={{ value: 'Core', position: 'insideBottom', offset: -5 }} />
            <YAxis label={{ value: 'Usage (%)', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Bar dataKey="usage" fill="#8884d8" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Cpu;

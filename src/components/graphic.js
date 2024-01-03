import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import 'chart.js/auto';
import 'chartjs-adapter-moment';
import { Line } from 'react-chartjs-2';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Graphics() {
  const [temperatureData, setTemperatureData] = useState([]);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Temperature',
        data: temperatureData,
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        pointStyle: 'circle',
        pointRadius: 5,
        pointHoverRadius: 8,
      },
    ],
  });

  //Utilisation de l'API pour les donnees
  useEffect(() => {
    fetch('http://localhost:3001/getTemperatureData')
      .then(response => {
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Data from API:', data);

        //donnee temperature presente dans le JSON

        const temperatures = Array.isArray(data[0]?.data)
          ? data[0].data.map(entry => entry.temperature)
          : [];

        console.log('Temperatures:', temperatures);

        //donnee date presente dans le tableau

        const formattedDates = Array.isArray(data[0]?.data)
        ? data[0].data.map(entry => moment(entry.date).format('YYYY-MM-DD HH:mm:ss'))
          : [];

        console.log('Formatted Dates:', formattedDates);

        const updatedChartData = {
          labels: formattedDates,
          datasets: [
            {
              ...chartData.datasets[0],
              data: temperatures,
            },
          ],
        };

        setChartData(updatedChartData);
        setTemperatureData(temperatures);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const chartOptions = {
    scales: {
      x: {
        type: 'time', 
        position: 'bottom',
        time: {
          unit: 'hour', 
          displayFormats: {
            hour: 'HH:mm', 
          },
        },
        title: {
          display: true,
          text: 'Heures',
        },
      },
      y: {
        beginAtZero: true,
        max: 30,
        title: {
          display: true,
          text: 'Température (°C)',
        },
      },
    },
  };

  //Utilisation de chart.js pour afficher la courbe et Link to pour revenir à la page

  return (
    <div className="container text-center mt-8">
      <h1>Graphique</h1>
      <Line key={Math.random()} data={chartData} options={chartOptions} />
      <nav className="mt-3">
        <Link to="/" className="btn btn-primary">Retour à la page d'accueil</Link>
      </nav>
    </div>
  );
}

export default Graphics;

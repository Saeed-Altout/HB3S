"use client";
import { useRef, useEffect } from "react";
import {
  Chart,
  ChartTypeRegistry,
  ChartData,
  ChartOptions,
} from "chart.js/auto";

interface CanvasWithChart extends HTMLCanvasElement {
  chart?: Chart;
}

export const TemperatureChart = () => {
  const chartRef = useRef<CanvasWithChart>(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const context = chartRef.current.getContext("2d");

      if (context) {
        const data: ChartData<keyof ChartTypeRegistry, number[], string> = {
          labels: [
            "00:00",
            "01:00",
            "02:00",
            "03:00",
            "04:00",
            "05:00",
            "06:00",
            "07:00",
            "08:00",
            "09:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
            "23:00",
            "24:00",
          ],
          datasets: [
            {
              label: "Glucose",
              data: [
                25, 27, 22, 26, 20, 21, 27, 25, 27, 22, 26, 20, 21, 27, 25, 27,
                22, 26, 20, 21, 27, 20, 21, 27,
              ],
              backgroundColor: ["rgb(255,25 ,25)"],
            },
          ],
        };

        const options: ChartOptions<keyof ChartTypeRegistry> = {
          scales: {
            x: {
              type: "category",
              grid: {
                display: false,
              },
            },
            y: {
              beginAtZero: true,
              grid: {
                display: false,
              },
            },
          },
        };

        const newChart = new Chart(context, {
          type: "bar",
          data,
          options,
        });

        // Store the chart instance for future cleanup
        chartRef.current.chart = newChart;
      }
    }

    // Cleanup function to destroy chart instance when component unmounts
    return () => {
      if (chartRef.current?.chart) {
        chartRef.current.chart.destroy();
      }
    };
  }, []);

  return (
    <div className="w-full">
      <canvas ref={chartRef} className="h-full w-full relative" />
    </div>
  );
};

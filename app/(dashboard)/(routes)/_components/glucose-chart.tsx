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

export const GlucoseChart = () => {
  const chartRef = useRef<CanvasWithChart>(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const context = chartRef.current.getContext("2d");

      if (context) {
        const data: ChartData<keyof ChartTypeRegistry, number[], string> = {
          labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          datasets: [
            {
              label: "Glucose",
              data: [100, 90, 30, 120, 160, 50, 90],
              backgroundColor: ["rgb(15,150 ,255)"],
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
    <div>
      <canvas ref={chartRef} className="h-full w-full relative" />
    </div>
  );
};

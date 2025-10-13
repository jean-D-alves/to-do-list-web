import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

export default function TaskChart({ done, notDone }) {
  const chartRef = useRef(null); 
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }


    chartInstanceRef.current = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Concluídas", "Não Concluídas"],
        datasets: [
          {
            data: [done, notDone],
            backgroundColor: ["#36A2EB", "#d3254bff"],
            hoverOffset: 10,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "bottom" },
          title: { display: true, text: "Status das Tasks" },
        },
      },
    });


    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [done, notDone]); 

  return (
    <div style={{ width: "300px", height: "300px" }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
}

import { useState, useEffect } from "react";
import { handleDashBourd } from "../functions/handleDashBourd.js";
import TaskChart from "./handleTaskChart.jsx";

export default function Dashboard() {
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await handleDashBourd();
      if (data) setDashboard(data);
      console.log(data);
    }
    fetchData();
  }, []);

  if (!dashboard) {
    return <p>Carregando dados do dashboard...</p>;
  }

  return (
    <div className="account-content">
      <h2>Resumo das Tasks</h2>
      <p>✅ Concluídas: {dashboard.totalDonetrue.total}</p>
      <p>❌ Não Concluídas: {dashboard.totalDonefalse.total}</p>

      <TaskChart
        done={dashboard.totalDonetrue.total}
        notDone={dashboard.totalDonefalse.total}
      />
    </div>
  );
}

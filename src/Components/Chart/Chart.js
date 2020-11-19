import React, { useEffect, useContext} from "react";
import { Line } from "react-chartjs-2";
import { DashboardContext } from '../../Context/DashboardContext'

const DashboardChart = () => {

  const { chartData, chart } = useContext(DashboardContext)

  useEffect(() => {
    chart();
  }, [chart]);

  return (
    <div>
      <Line data={chartData} className="chart"/>
    </div>
  );
};

export default DashboardChart;

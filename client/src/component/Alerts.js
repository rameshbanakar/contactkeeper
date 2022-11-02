import React, { useContext } from "react";
import AlertContext from "../context/alert/AlertContext";
const Alerts = () => {
  const alertContext = useContext(AlertContext);
  const { alerts } = alertContext;
  return (
    alerts.length > 0 &&
    alerts.map((alert) => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        <i className="fa-solid fa-circle-exclamation"></i>{alert.msg}
      </div>
    ))
  );
};

export default Alerts;

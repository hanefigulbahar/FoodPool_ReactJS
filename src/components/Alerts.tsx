import React from "react";
import { Alert, AlertColor } from "@mui/material";

type Props = {
  title: string;
  alertType?: AlertColor | undefined;
};

const Alerts = ({ alertType, title }: Props) => {
  return (
    <Alert className="m-10" severity={alertType}>
      {title}
    </Alert>
  );
};

export default Alerts;

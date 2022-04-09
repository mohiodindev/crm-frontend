import React from "react";
import "./App.css";

import { DefaultLayout } from "./Layout/DefaultLayout";
import { DashBoardPage } from "./pages/dashboard/DashBoardPage";
import { AddTicket } from "./pages/new-ticket/AddTicket";
function App() {
  return (
    <div>
      <DefaultLayout>
        {/*<DashBoardPage /> */}
        <AddTicket />
      </DefaultLayout>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";

import { DefaultLayout } from "./Layout/DefaultLayout";
import { DashBoardPage } from "./pages/dashboard/DashBoardPage";

function App() {
  return (
    <div>
      <DefaultLayout>
        <DashBoardPage></DashBoardPage>
      </DefaultLayout>
    </div>
  );
}

export default App;

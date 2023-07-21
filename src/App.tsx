import React, { FC } from "react";
import "./App.css";
import { AppRoutes } from "./components/AppRoutes";
import { Navbar } from "./components/Navbar";
import { Layout } from 'antd'

const App: FC = () => {
  
  return (
    <div className="App">
      <Layout>
        <Navbar/>
        <Layout.Content>
          <AppRoutes/>
        </Layout.Content>
      </Layout>
    </div>
  );
}

export default App;

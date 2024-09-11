import { Route, Routes } from "react-router-dom";
import "./App.css";
import "../src/styles/common.css";
import MainPage from "./pages/MainPage";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import LoginRegisterPage from "./pages/LoginRegisterPage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/loginregister" element={<LoginRegisterPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

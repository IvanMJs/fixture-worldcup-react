import "./App.css";
import HomePage from "./page/HomePage/HomePage";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Fechas from "./page/Fechas/Fechas";
import Equipos from "./page/Equipos/Equipos";


function App() {
  return (
    <ChakraProvider>
      <Router>
        <Header />
        {/* 👇️ Wrap your Route components in a Routes component */}
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/equipos" element={<Equipos />} />
        </Routes>
        <Routes>
          <Route path="/fechas" element={<Fechas />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;

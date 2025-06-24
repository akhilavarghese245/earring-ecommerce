import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar />

        {/* Main content area grows to fill space */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* You can add more routes here */}
          </Routes>
        </main>

        <Footer />
      </Router>
    </div>
  );
}

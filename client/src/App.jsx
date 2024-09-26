import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Buy from "./pages/Buy";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CarDetails from "./pages/CarDetails";
import { UserProvider } from "./UserContext/UserContext";
import CreateCar from "./pages/CreateCar";
import Service from "./pages/Service";

function App() {
  return (
    <>
      <UserProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/buy/cardetails/:id" element={<CarDetails />} />
            <Route path="/createcar" element={<CreateCar />} />
            <Route path="/service" element={<Service />} />
          </Routes>
        </Router>

        <Footer />
      </UserProvider>
    </>
  );
}

export default App;

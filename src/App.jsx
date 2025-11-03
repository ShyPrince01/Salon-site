import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BookAppointment from "./pages/BookAppointment";
import OurStory from "./pages/OurStory";
import ContactUs from "./pages/ContactUs";
import ServiceMenu from "./pages/ServiceMenu";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bookappointment" element={<BookAppointment />} />
          <Route path="/servicemenu" element={<ServiceMenu />} />
          <Route path="/ourstory" element={<OurStory />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

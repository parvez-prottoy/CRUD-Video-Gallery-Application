import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import VideoPage from "./pages/VideoPage";
import AddPage from "./pages/AddPage";
const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/videos/:videoId" element={<VideoPage />} />
        <Route path="/videos/add" element={<AddPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

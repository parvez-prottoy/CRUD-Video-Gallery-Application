import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
const App = () => {
  return (
    <Router>
      <Navigation />
      <Footer />
    </Router>
  );
};

export default App;

import Navigation from "../navigation/Navigation";
import Review from "../review/Review";
import Rating from "../rating/Rating";
import Analysis from "../analysis/Analysis";
import Visitor from "../visitor/Visitor";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Review />
      <Rating />
      <Analysis />
      <Visitor />
    </div>
  );
}

export default App;

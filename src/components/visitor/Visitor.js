import Chart from "../chart/Chart";
import "./Visitor.css";

function Visitor() {
  return (
    <div className="Visitor">
      <div className="Visitor-heading">Website Visitors</div>
      <p className="Visitor-content">960</p>
      <Chart/>
    </div>
  );
}

export default Visitor;

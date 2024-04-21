import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Compare() {
  document.body.style.backgroundColor = "#ffffff";

  return (
    <>
      <Navbar />
      <div className="product-container">
        <h1>Compare Our Products</h1>
      </div>
      <table>
        <tr>
          <th>Specification</th>
          <th>Rhyno SE03 Lite</th>
          <th>Rhyno SE03</th>
          <th>Rhyno SE03 Max</th>
        </tr>
        <tr>
          <td>Battery</td>
          <td>1.8Kwh</td>
          <td>2.7Kwh</td>
          <td>2.7Kwh</td>
        </tr>
        <tr>
          <td>Battery features</td>
          <td>LFP with 1500 cycles<br />Active Balancing<br />Waterproof (IP67)</td>
          <td>LFP with 1500 cycles<br />Active Balancing<br />Waterproof (IP67)</td>
          <td>LFP with 1500 cycles<br />Active Balancing<br />Waterproof (IP67)</td>
        </tr>
        <tr>
          <td>Battery warranty</td>
          <td>3 Years</td>
          <td>3 Years</td>
          <td>3 Years</td>
        </tr>
        <tr>
          <td>Charging time</td>
          <td>3 hours (12A)</td>
          <td>4 hours (12A)</td>
          <td>4 hours (12A)</td>
        </tr>
        <tr>
          <td>Motor</td>
          <td>1500W</td>
          <td>1500W</td>
          <td>2000W</td>
        </tr>
        <tr>
          <td>Max Speed</td>
          <td>55 km/h</td>
          <td>55 km/h</td>
          <td>65 km/h</td>
        </tr>
        <tr>
          <td>Warranty on electronics</td>
          <td>1 year</td>
          <td>1 year</td>
          <td>1 year</td>
        </tr>
        <tr>
          <td>Max range (@30km/h)</td>
          <td>100 km</td>
          <td>150 km</td>
          <td>120 km</td>
        </tr>
        <tr>
          <td>Max range (@45km/h)</td>
          <td>90 km</td>
          <td>110 km</td>
          <td>100 km</td>
        </tr>
        <tr>
          <td>Max range (@full speed)</td>
          <td>60 km</td>
          <td>90 km</td>
          <td>80 km</td>
        </tr>
        <tr>
          <td>Other key benefits</td>
          <td>Fire-safe battery<br />Range prediction<br />Comfortable ride<br />Stable and safe</td>
          <td>Fire-safe battery<br />Range prediction<br />Comfortable ride<br />Stable and safe</td>
          <td>Fire-safe battery<br />Range prediction<br />Comfortable ride<br />Stable and safe</td>
        </tr>
      </table>
      <Footer />
    </>
  );
}

export default Compare
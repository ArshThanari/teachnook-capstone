import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./Products.css"
import Bike from "../../assets/red-side.png"

function SE03Max() {
  document.body.style.backgroundColor = "#ffffff";

  return (
    <>
      <Navbar />
      <div className="product-container">
        <img src={Bike} alt="golden bike" width="500px" />
        <div className="product-desc">
          <h2>SE03 Max</h2>
          <p>This Rhyno is tuned for long drives and no thrills. Like all other variants, this machine comes with a fire-safe advanced LFP battery and all the other benefits of owning a Rhyno, along with a perfect blend of battery capacity and motor power to provide up to 150 km range on a single charge. While it may not provide a thrilling ride, it promises a dependable and unwavering presence on the long stretches.</p>
        </div>
      </div>
      <table>
        <tr>
          <th>Specification</th>
          <th>Rhyno SE03 Max</th>
        </tr>
        <tr>
          <td>Battery</td>
          <td>2.7Kwh</td>
        </tr>
        <tr>
          <td>Battery features</td>
          <td>LFP with 1500 cycles<br />Active Balancing<br />Waterproof (IP67)</td>
        </tr>
        <tr>
          <td>Battery warranty</td>
          <td>3 Years</td>
        </tr>
        <tr>
          <td>Charging time</td>
          <td>4 hours (12A)</td>
        </tr>
        <tr>
          <td>Motor</td>
          <td>2000W</td>
        </tr>
        <tr>
          <td>Max Speed</td>
          <td>65 km/h</td>
        </tr>
        <tr>
          <td>Warranty on electronics</td>
          <td>1 year</td>
        </tr>
        <tr>
          <td>Max range (@30km/h)</td>
          <td>120 km</td>
        </tr>
        <tr>
          <td>Max range (@45km/h)</td>
          <td>100 km</td>
        </tr>
        <tr>
          <td>Max range (@full speed)</td>
          <td>80 km</td>
        </tr>
        <tr>
          <td>Other key benefits</td>
          <td>Fire-safe battery<br />Range prediction<br />Comfortable ride<br />Stable and safe</td>
        </tr>
      </table>
      <Footer />
    </>
  );
}

export default SE03Max
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./Products.css"
import Bike from "../../assets/blue.png"

function SE03Lite() {
  document.body.style.backgroundColor = "#ffffff";

  return (
    <>
      <Navbar />
      <div className="product-container">
        <img src={Bike} alt="blue bike" width="500px" />
        <div className="product-desc">
          <h2>SE03 Lite</h2>
          <p>This Rhyno is an entry-level variant tailor with a fire-safe advanced LFP battery and all the other benefits of owning a Rhyno but is designed with a smaller battery and motor. Offering the same elegance, comfort, and style, this variant is tailored for those seeking an easy-on-the-pocket solution without sacrificing essential benefits. With an 80-100 km range on a single charge and 	a top speed of 55 km/h, the Rhyno SE03 Lite ensures effortless commuting. If you're in pursuit of thrills or frequently ride with a pillion, we recommend exploring our higher-power variants. Here are some technical details for the SE03 Lite that you might find valuable. ed for medium-power, single-person usage. This machine maintains the Rhyno standards.</p>
        </div>
      </div>
      <table>
        <tr>
          <th>Specification</th>
          <th>Rhyno SE03 Lite</th>
        </tr>
        <tr>
          <td>Battery</td>
          <td>1.8Kwh</td>
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
          <td>3 hours (12A)</td>
        </tr>
        <tr>
          <td>Motor</td>
          <td>1500W</td>
        </tr>
        <tr>
          <td>Max Speed</td>
          <td>55 km/h</td>
        </tr>
        <tr>
          <td>Warranty on electronics</td>
          <td>1 year</td>
        </tr>
        <tr>
          <td>Max range (@30km/h)</td>
          <td>100 km</td>
        </tr>
        <tr>
          <td>Max range (@45km/h)</td>
          <td>90 km</td>
        </tr>
        <tr>
          <td>Max range (@full speed)</td>
          <td>70 km</td>
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

export default SE03Lite
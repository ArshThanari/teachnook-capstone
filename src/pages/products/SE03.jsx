import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./Products.css"
import Bike from "../../assets/red.png"

function SE03() {
  document.body.style.backgroundColor = "#ffffff";

  return (
    <>
      <Navbar />
      <div className="product-container">
        <img src={Bike} alt="red bike" width="500px" />
        <div className="product-desc">
          <h2>SE03</h2>
          <p>Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhyno. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!</p>
        </div>
      </div>
      <table>
        <tr>
          <th>Specification</th>
          <th>Rhyno SE03</th>
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
          <td>150 km</td>
        </tr>
        <tr>
          <td>Max range (@45km/h)</td>
          <td>110 km</td>
        </tr>
        <tr>
          <td>Max range (@full speed)</td>
          <td>90 km</td>
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

export default SE03
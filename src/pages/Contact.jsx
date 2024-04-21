import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import contactPNG from "../assets/contact.jpeg"
import "./Contact.css"

function Contact() {

  document.body.style.backgroundColor = "#ffffff";

  return (
    <>
      <Navbar />
      <div className="contact-container">
        <img src={contactPNG} alt="ceo posing with EV" />
        <h2>Contact Us</h2>
        <ul>
          <li>Mail: <a href="mailto:info@rhyno.in">info@rhyno.in</a></li>
          <li>Mobile no.: <a href="tel:+91-9023987528">+91-9023987528</a></li>
          <li>Location: Rhyno Wheels Private limited, Near UG hostel gate #2, Behind PDEU, Raisan, Gandhinagar, Gujarat, India.</li>
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default Contact
import "../common.css";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="page">
      <div className="main-container">
        <div className="medium-spacer" />
        <div className="heading text-center">Contact me</div>
        <p style={{ textAlign: "center" }} id="phone-number-and-email">
          Phone number: 1 (469) 715-7991
          <br />
          Email: alexphillipsdev@gmail.com
        </p>
        <div id="links" style={{ textAlign: "center" }}>
          <div>My GitHub:</div>
          <a href="https://github.com/alexcphillips" target="_blank">
            https://github.com/alexcphillips
          </a>
          <div className="small-spacer" />
          <div>My Codewars:</div>
          <a
            style={{ paddingTop: 0 }}
            href="https://codewars.com/users/alexphillips"
            target="_blank"
          >
            https://codewars.com/users/alexphillips
          </a>
        </div>

        <div className="footer" />
      </div>
    </div>
  );
}

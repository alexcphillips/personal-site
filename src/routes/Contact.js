import "./Contact.css";

export default function Contact() {
  return (
    <div id="page">
      <div id="main-container">
        <div id="heading">Contact me</div>
        <p id="phone-number-and-email">
          Phone number: 1 (469) 715-7991
          <br />
          Email: alexphillipsdev@gmail.com
        </p>
        <div id="links" style={{ textAlign: "center" }}>
          <div>My GitHub:</div>
          <a href="https://github.com/alexcphillips" target="_blank">
            https://github.com/alexcphillips
          </a>
          <div id="spacer-small" />
          <div>My Codewars:</div>
          <a
            style={{ paddingTop: 0 }}
            href="https://codewars.com/users/alexphillips"
            target="_blank"
          >
            https://codewars.com/users/alexphillips
          </a>
        </div>

        <div id="footer" />
      </div>
    </div>
  );
}

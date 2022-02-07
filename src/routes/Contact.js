import "../common.css";
import "./Contact.css";

import CopyButton from "../Components/copyButton";

export default function Contact() {
  // const email = "alexphillipsdev@gmail.com";
  // const phoneNumber = "1(469) 715-7991";
  // const github = "https://github.com/alexcphillips";
  // const codewars = "https://codewars.com/users/alexphillips";

  const contactInfo = ["1(469) 715-7991", "alexphillipsdev@gmail.com"];

  const links = [
    "https://github.com/alexcphillips",
    "https://codewars.com/users/alexphillips",
    "https://alexcphillips.com"
  ];

  return (
    <>
      <div className="contact-section">
        {contactInfo.map((text) => {
          return (
            <div className="section" key={text}>
              <CopyButton text={text} /> {text}
            </div>
          );
        })}
      </div>

      <div className="link-section">
        {links.map((text) => {
          return (
            <div className="section" key={text}>
              <CopyButton text={text} />{" "}
              <a href={text} target="_blank" rel="noreferrer">
                {text}
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
  // <div className="page">
  //   <div className="main-container">
  //     <div className="medium-spacer" />
  //     <div className="title text-center">Contact me</div>
  //     <div className="tiny-spacer" />
  //     <div style={{ width: "100%", backgroundColor: "red" }}>
  //       {/* <div style={{ textAlign: "center" }} id="phone-number-and-email">
  //         Phone number: 1 (469) 715-7991
  //         <br />
  //         <p
  //           style={{
  //             backgroundColor: "lightgrey",
  //             width: "",
  //             textAlign: "center"
  //           }}
  //         >
  //           {" "}
  //           <button style={{ border: "1px solid black" }} onClick={copyEmail}>
  //             {" "}
  //             {copyEmailIcon}
  //           </button>{" "}
  //           {email}
  //         </p>
  //       </div> */}
  //     </div>

  //     <div id="links" style={{ textAlign: "center" }}>
  //       <div>My GitHub:</div>
  //       <a href="https://github.com/alexcphillips" target="_blank">
  //         https://github.com/alexcphillips
  //       </a>
  //       <div className="small-spacer" />
  //       <div>My Codewars:</div>{" "}
  //       <a
  //         style={{ paddingTop: 0 }}
  //         href="https://codewars.com/users/alexphillips"
  //         target="_blank"
  //       >
  //         https://codewars.com/users/alexphillips
  //       </a>
  //     </div>

  //     <div className="footer" />
  //   </div>
  // </div>
}

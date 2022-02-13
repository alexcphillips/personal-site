import "../common.css";
import "./Contact.css";

// import { useDeviceDetect } from "../utilities";

import CopyButton from "../Components/copyButton";

export default function Contact() {
  const contactInfo = [
    {
      text: "1(469) 715-7991"
    },
    {
      text: "alexphillipsdev@gmail.com"
    },
    {
      text: "https://www.linkedin.com/in/alexander-phillips-b435b321b/",
      isLink: true
    }
  ];

  const links = [
    {
      text: "https://github.com/alexcphillips",
      isLink: true
    },
    {
      text: "https://codewars.com/users/alexphillips",
      isLink: true
    },
    {
      text: "http://alexcphillips.com",
      isLink: true
    }
  ];

  return (
    <div className="page">
      <div className="main-container">
        <div className="left-align-container">
          <div className="small-spacer" />
          <div className="heading">Contact Me</div>
          <div className="tiny-spacer" />
          <div className="section">
            {contactInfo.map(({ text, isLink }) => {
              return (
                <div className="contact-content" key={text}>
                  {(!isLink && (
                    <>
                      {/* <CopyButton text={text} /> {text} <br /> */}
                      {text} <br />
                    </>
                  )) || (
                    <>
                      <div className="link-content" key={text}>
                        {/* <CopyButton text={text} />{" "} */}
                        <a href={text} target="_blank" rel="noreferrer">
                          {text}
                        </a>
                        <br />
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
          <div className="small-spacer" />
          <div className="heading">Other</div>
          <div className="tiny-spacer" />
          <div className="section">
            {links.map(({ text, isLink }) => {
              return (
                <div className="contact-content" key={text}>
                  {(!isLink && (
                    <>
                      <CopyButton text={text} /> {text} <br />
                    </>
                  )) || (
                    <>
                      <div className="link-content" key={text}>
                        {/* <CopyButton text={text} />{" "} */}
                        <a href={text} target="_blank" rel="noreferrer">
                          {text}
                        </a>
                        <br />
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

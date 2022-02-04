import "../../../common.css";
import "./notes.css";

const installDockerComposeOnEc2 = (
  <>
    <div className="small-spacer" />
    <div className="title">Installing Docker Compose on an AWS EC2</div>
    This guide assumes you have already installed Docker on your EC2. If not,
    see my guide on{" "}
    <a href="/notes/installing-docker-on-ec2">Installing Docker on EC2</a>
    <div className="small-spacer" />
    <div className="box">
      Install docker-compose
      <code>
        sudo curl -L
        "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname
        -s)-$(uname -m)" -o /usr/local/bin/docker-compose
      </code>{" "}
      <br />
      then, give add excutable permissions with{" "}
      <code>sudo chmod +x /usr/local/bin/docker-compose</code>
    </div>
  </>
);

export default installDockerComposeOnEc2;

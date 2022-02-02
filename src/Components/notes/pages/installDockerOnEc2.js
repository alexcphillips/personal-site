import "../../../common.css";
import "./notes.css";

const installDockerOnEc2 = (
  <>
    <div className="small-spacer" />
    <div className="title">Installing Docker on an AWS EC2</div>
    This guide assumes you have already launched an EC2 Instance, have it's
    keys, and can SSH into it. If not, see my guide on{" "}
    <a href="/launching-an-aws-ec2-instance" target="_blank">
      Launching an EC2 Instance
    </a>{" "}
    or{" "}
    <a href="/ssh-into-an-aws-ec2-instance" target="_blank">
      SSH into an AWS EC2 Instance
    </a>
    <div className="small-spacer" />
    SSH Inside your EC2 Instance (<code>ssh -i ec2-user@ElasticIP</code>), then
    run
    <div className="box">
      <h6>Amazon Linux</h6>
      <li>
        <code>sudo yum install docker</code>
      </li>
      <div className="tiny-spacer" />
      <h6>Amazon Linux 2</h6>
      <li>
        <code>sudo amazon-linux-extras install docker</code>
      </li>
    </div>
    <div className="tiny-spacer" />
    Then, <code>sudo service docker start</code>
    <div className="tiny-spacer" />
    You can add ec2-user (yourself) to the docker group to execute commands
    without using sudo <code>sudo usermod -a -G docker ec2-user</code>
    <div className="tiny-spacer" />
    verify installation with <code>docker info</code>
    <div className="small-spacer" />
    <div className="box">
      <h6>Errors</h6>
      Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the
      docker daemon running? <br />
      Run <code>sudo service docker restart</code>
    </div>
  </>
);

export default installDockerOnEc2;

import Ec2 from "./ec2";
import sshEc2 from "./sshEc2";
import installDockerOnEc2 from "./installDockerOnEc2";
import installDockerComposeOnEc2 from "./installDockerComposeOnEc2";

let notes = {
  "launching-an-aws-ec2": Ec2,
  "ssh-into-an-aws-ec2": sshEc2,
  "install-docker-on-ec2": installDockerOnEc2,
  "install-docker-compose-on-ec2": installDockerComposeOnEc2
};

export default notes;

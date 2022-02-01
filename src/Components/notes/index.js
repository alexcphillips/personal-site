import Ec2 from "./ec2";
import sshEc2 from "./sshEc2";
import installDockerOnEc2 from "./installDockerOnEc2";

let notes = {
  "launching-an-aws-ec2-instance": Ec2,
  "ssh-into-an-aws-ec2-instance": sshEc2,
  "install-docker-on-ec2-instance": installDockerOnEc2
};

export default notes;

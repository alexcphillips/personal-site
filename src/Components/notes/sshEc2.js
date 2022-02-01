import "../../common.css";
import "./notes.css";

const sshEc2 = (
  <>
    <div className="small-spacer" />
    <div className="title">SSH into an AWS EC2</div>
    <li>
      This guide assumes you have already launched an EC2 Instance and have it's
      keypair. If not, see my guide on{" "}
      <a href="launching-an-aws-ec2-instance" target="_blank">
        Launching an EC2 Instance
      </a>
    </li>
    <div className="spacer-small" />
    <li>
      Run <code>chmod 400 ./path/to/key</code> on your keys
    </li>
    <div className="tiny-spacer" />
    You should be able to ssh into your EC2 instance by running{" "}
    <code>ssh -i ./path/to/key yourAmiUsername@ElasticipOrPublicDNS</code>{" "}
    <br />
    Each Linux instance launches with a default Linux system user account. The
    default user name is determined by the AMI that was specified when you
    launched the instance.
    <div className="tiny-spacer" />
    <li>
      For Amazon Linux 2 or the Amazon Linux AMI, the user name is EC2-user.
    </li>
    <li>For a CentOS AMI, the user name is centos.</li>
    <li>For a Debian AMI, the user name is admin.</li>
    <li>For a Fedora AMI, the user name is ec2-user or fedora.</li>
    <li>For a RHEL AMI, the user name is ec2-user or root.</li>
    <li>For a SUSE AMI, the user name is ec2-user or root.</li>
    <li>For an Ubuntu AMI, the user name is ubuntu.</li>
    <li>
      Otherwise, if EC2-user and root don't work, check with the AMI provider.
    </li>
  </>
);

export default sshEc2;

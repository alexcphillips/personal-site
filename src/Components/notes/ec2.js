import "../../common.css";
import "./notes.css";

const ec2 = (
  <>
    <div className="small-spacer" />
    <div className="title">Launching an AWS Ec2 instance</div>
    AWS Login:{" "}
    <a
      href="https://console.aws.amazon.com/billing/home?#preferences"
      target="_blank"
    >
      https://console.aws.amazon.com/billing/home?#preferences
    </a>
    <div className="small-spacer" />
    <li>Log into the AWS Management Console</li>
    <li>Navigate to EC2 service</li>
    <li>Click Launch Instance</li>
    <li>Select the desired AMI, some are marked free tier eligible</li>
    <li>Select an Instance Type, some are marked free tier eligible.</li>
    <li>Configure instances as needed</li>
    <li>
      You can add storage in step 4, if you're using a free tier eligible
      instance you may want to increase the instance's storage. You can get up
      to 30 GB of EBS General Purpose (SSD) or magnetic storage while instance
      remains free tier eligible.
    </li>
    <li>
      You may tag instances to quickly identify a specific resource based on the
      tags that you've assigned to it
    </li>
    <li>
      Configure security group to control traffic. For example, if you want to
      set up a web server and allow Internet traffic to reach your instance, add
      rules that allow unrestricted access to the HTTP and HTTPS ports.
    </li>
    <li>Proceed to review and launch instance</li>
    <li>
      You can create billing alerts to be notified when you may be charged{" "}
      <br />
      Create Billing Alerts:{" "}
      <a
        href="https://console.aws.amazon.com/billing/home?#preferences"
        target="_blank"
      >
        https://console.aws.amazon.com/billing/home?#preferences
      </a>
    </li>
    <br />
    <div className="foooter">
      It's highly recommended to{" "}
      <a
        href="https://us-east-2.console.aws.amazon.com/ec2/v2/home?region=us-east-2#Addresses:"
        target="_blank"
      >
        create an Elastic IP
      </a>{" "}
      for your instance. You can use the Elastic IP to connect to your instance
      - even when it's Public DNS changes.
    </div>
  </>
);

export default ec2;

import React from "react";

const ArticleCCSA = () => {
  return (
    <div style={{ color: "#9CA3AF" }}>
      <div>
        {/* Header */}
        <div>
          <h1 style={{ color: "white" }}>
            <strong>CCSA Articles</strong>
          </h1>
          <p style={{ color: "#9CA3AF" }}>
            Computer Components and System Administration
          </p>
        </div>

        {/* Article 1 - Module 1 */}
        <article>
          <div>
            <span style={{ color: "white" }}>
              <strong>Module 1</strong>
            </span>
            <h2 style={{ color: "white" }}>
              <strong>Basic Computer Components</strong>
            </h2>
          </div>

          <div>
            <section>
              <h3 style={{ color: "white" }}>
                <strong>1. Introduction to Computer Hardware</strong>
              </h3>

              <h4 style={{ color: "white" }}>
                <strong>Overview of Computer Components</strong>
              </h4>
              <p>
                Understanding computer components is fundamental to system
                administration and troubleshooting. Every computer system
                consists of essential hardware components that work together to
                process data and execute instructions.
              </p>

              <h4 style={{ color: "white" }}>
                <strong>Importance of Understanding Hardware</strong>
              </h4>
              <p>
                Hardware knowledge enables system administrators to make
                informed decisions about system upgrades, troubleshoot
                performance issues, and ensure optimal system configuration for
                specific use cases.
              </p>

              <div>
                <h4 style={{ color: "white" }}>
                  <strong>Video Cards</strong>
                </h4>
                <p>
                  <strong style={{ color: "white" }}>
                    Types and Functions:
                  </strong>
                </p>
                <ul>
                  <li>
                    Integrated graphics solutions built into motherboards or
                    CPUs
                  </li>
                  <li>
                    Dedicated graphics cards for high-performance computing and
                    gaming
                  </li>
                  <li>
                    Workstation cards optimized for professional applications
                  </li>
                </ul>
                <p>
                  <strong style={{ color: "white" }}>
                    Installation and Troubleshooting:
                  </strong>
                </p>
                <ul>
                  <li>PCIe slot compatibility and power requirements</li>
                  <li>Driver installation and updates</li>
                  <li>Common display issues and resolution techniques</li>
                </ul>
              </div>

              <div>
                <h4 style={{ color: "white" }}>
                  <strong>System Board / Motherboard</strong>
                </h4>
                <p>
                  <strong style={{ color: "white" }}>
                    Components and Layout:
                  </strong>
                </p>
                <ul>
                  <li>CPU socket and chipset architecture</li>
                  <li>RAM slots and expansion card slots</li>
                  <li>Power connectors and I/O ports</li>
                  <li>BIOS/UEFI firmware interface</li>
                </ul>
                <p>
                  <strong style={{ color: "white" }}>
                    Installation and Troubleshooting:
                  </strong>
                </p>
                <ul>
                  <li>Component compatibility verification</li>
                  <li>POST (Power-On Self Test) error diagnosis</li>
                  <li>BIOS configuration and firmware updates</li>
                </ul>
              </div>

              <div>
                <h4 style={{ color: "white" }}>
                  <strong>Hard Drive and RAM</strong>
                </h4>
                <p>
                  <strong style={{ color: "white" }}>
                    Types and Functions:
                  </strong>
                </p>
                <ul>
                  <li>
                    <strong style={{ color: "white" }}>Storage:</strong> HDD,
                    SSD, NVMe drives and their performance characteristics
                  </li>
                  <li>
                    <strong style={{ color: "white" }}>Memory:</strong> DDR4,
                    DDR5 RAM types and speed specifications
                  </li>
                  <li>Storage interfaces: SATA, M.2, PCIe connections</li>
                </ul>
                <p>
                  <strong style={{ color: "white" }}>
                    Installation and Troubleshooting:
                  </strong>
                </p>
                <ul>
                  <li>Physical installation procedures and cable management</li>
                  <li>Memory testing and error detection</li>
                  <li>Drive health monitoring and data recovery basics</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 style={{ color: "white" }}>
                <strong>2. Assembling a Computer</strong>
              </h3>

              <h4 style={{ color: "white" }}>
                <strong>Step-by-Step Guide to Building a Machine</strong>
              </h4>
              <ul>
                <li>Pre-assembly preparation and component verification</li>
                <li>Motherboard installation and component mounting</li>
                <li>Power supply installation and cable routing</li>
                <li>First boot and system configuration</li>
              </ul>

              <h4 style={{ color: "white" }}>
                <strong>Common Issues and Solutions</strong>
              </h4>
              <ul>
                <li>No POST conditions and diagnostic procedures</li>
                <li>Component compatibility conflicts</li>
                <li>Cable connection errors and power issues</li>
                <li>Initial system optimization and driver installation</li>
              </ul>
            </section>

            <section>
              <h3 style={{ color: "white" }}>
                <strong>3. Understanding Peripherals</strong>
              </h3>
              <p>
                Peripherals extend computer functionality and include input
                devices (keyboards, mice), output devices (monitors, printers),
                and storage devices (external drives, USB devices).
                Understanding peripheral connectivity and troubleshooting is
                essential for comprehensive system support.
              </p>

              <h4 style={{ color: "white" }}>
                <strong>What Goes Into a Computer?</strong>
              </h4>
              <ul>
                <li>Essential components for basic functionality</li>
                <li>Optional components for enhanced performance</li>
                <li>Peripheral integration and driver requirements</li>
              </ul>
            </section>

            <section>
              <h3 style={{ color: "white" }}>
                <strong>4. Understanding Machines and Operating Systems</strong>
              </h3>
              <p>
                The relationship between hardware and software is fundamental to
                system administration. Understanding how operating systems
                interact with hardware components enables better troubleshooting
                and system optimization.
              </p>

              <h4 style={{ color: "white" }}>
                <strong>Cable Types</strong>
              </h4>
              <ul>
                <li>Power cables: ATX, PCIe power connectors</li>
                <li>Data cables: SATA, USB, network cables</li>
                <li>Display cables: HDMI, DisplayPort, VGA</li>
                <li>Cable management best practices</li>
              </ul>
            </section>
          </div>
        </article>

        {/* Article 2 - Module 2 */}
        <article>
          <div>
            <span style={{ color: "white" }}>
              <strong>Module 2</strong>
            </span>
            <h2 style={{ color: "white" }}>
              <strong>
                Essential Troubleshooting Skills for System Analysts
              </strong>
            </h2>
          </div>

          <div>
            <section>
              <h3 style={{ color: "white" }}>
                <strong>1. Basic Troubleshooting Techniques</strong>
              </h3>

              <h4 style={{ color: "white" }}>
                <strong>Common Issues and Their Solutions</strong>
              </h4>
              <ul>
                <li>System boot failures and diagnostic approaches</li>
                <li>Performance degradation analysis</li>
                <li>Hardware failure identification</li>
                <li>Software conflicts and resolution strategies</li>
              </ul>

              <h4 style={{ color: "white" }}>
                <strong>Tools and Software for Troubleshooting</strong>
              </h4>
              <ul>
                <li>Built-in Windows diagnostic tools</li>
                <li>Third-party hardware testing utilities</li>
                <li>System monitoring and logging tools</li>
                <li>Remote diagnostic capabilities</li>
              </ul>
            </section>

            <section>
              <h3 style={{ color: "white" }}>
                <strong>2. Remote Troubleshooting</strong>
              </h3>

              <h4 style={{ color: "white" }}>
                <strong>Using Remote Access Tools</strong>
              </h4>
              <p>
                <strong style={{ color: "white" }}>
                  Dameware and RDC (Remote Desktop Connection):
                </strong>
              </p>
              <ul>
                <li>Remote desktop connection setup and security</li>
                <li>Dameware Mini Remote Control for IT support</li>
                <li>Screen sharing and file transfer capabilities</li>
                <li>Troubleshooting connectivity issues</li>
              </ul>

              <h4 style={{ color: "white" }}>
                <strong>Best Practices for Remote Troubleshooting</strong>
              </h4>
              <ul>
                <li>Security considerations for remote access</li>
                <li>Documentation and communication protocols</li>
                <li>Escalation procedures for complex issues</li>
                <li>Remote session management and logging</li>
              </ul>
            </section>

            <section>
              <h3 style={{ color: "white" }}>
                <strong>3. Promoting Good Customer Service</strong>
              </h3>
              <ul>
                <li>Effective communication techniques with end users</li>
                <li>Managing user expectations during troubleshooting</li>
                <li>Professional demeanor in technical support scenarios</li>
                <li>Follow-up procedures and user satisfaction</li>
              </ul>
            </section>
          </div>
        </article>

        {/* Article 3 - Module 3 */}
        <article>
          <div>
            <span style={{ color: "white" }}>
              <strong>Module 3</strong>
            </span>
            <h2 style={{ color: "white" }}>
              <strong>Software and Operating Systems</strong>
            </h2>
          </div>

          <div>
            <section>
              <h3 style={{ color: "white" }}>
                <strong>1. Types of Operating Systems</strong>
              </h3>

              <h4 style={{ color: "white" }}>
                <strong>Overview of Different OS</strong>
              </h4>
              <ul>
                <li>
                  <strong style={{ color: "white" }}>Windows:</strong> Desktop
                  and server versions, licensing, and enterprise features
                </li>
                <li>
                  <strong style={{ color: "white" }}>Linux:</strong>{" "}
                  Distributions, command-line interface, and server applications
                </li>
                <li>
                  <strong style={{ color: "white" }}>macOS:</strong> Apple
                  ecosystem integration and enterprise deployment
                </li>
                <li>
                  Mobile operating systems: iOS, Android for enterprise mobility
                </li>
              </ul>
            </section>

            <section>
              <h3 style={{ color: "white" }}>
                <strong>2. Cloud Environments</strong>
              </h3>

              <h4 style={{ color: "white" }}>
                <strong>Different Cloud Platforms and Their Uses</strong>
              </h4>
              <ul>
                <li>
                  <strong style={{ color: "white" }}>
                    AWS (Amazon Web Services):
                  </strong>{" "}
                  EC2, S3, and enterprise cloud solutions
                </li>
                <li>
                  <strong style={{ color: "white" }}>Microsoft Azure:</strong>{" "}
                  Integration with on-premises Windows infrastructure
                </li>
                <li>
                  <strong style={{ color: "white" }}>
                    Google Cloud Platform:
                  </strong>{" "}
                  Analytics and machine learning capabilities
                </li>
                <li>Hybrid cloud strategies and migration considerations</li>
              </ul>
            </section>

            <section>
              <h3 style={{ color: "white" }}>
                <strong>3. Admin Tools and Command Line</strong>
              </h3>

              <h4 style={{ color: "white" }}>
                <strong>Basics of Admin Tools</strong>
              </h4>
              <ul>
                <li>
                  <strong style={{ color: "white" }}>Command Prompt:</strong>{" "}
                  Windows batch scripting and system administration
                </li>
                <li>
                  <strong style={{ color: "white" }}>PowerShell:</strong>{" "}
                  Advanced Windows automation and remote management
                </li>
                <li>
                  <strong style={{ color: "white" }}>Linux Commands:</strong>{" "}
                  File system navigation, process management, and scripting
                </li>
                <li>Cross-platform tool compatibility and best practices</li>
              </ul>
            </section>

            <section>
              <h3 style={{ color: "white" }}>
                <strong>4. Alternatives to Microsoft Office</strong>
              </h3>

              <h4 style={{ color: "white" }}>
                <strong>Overview of Alternatives</strong>
              </h4>
              <ul>
                <li>
                  <strong style={{ color: "white" }}>Google Workspace:</strong>{" "}
                  Cloud-based collaboration and productivity
                </li>
                <li>
                  <strong style={{ color: "white" }}>LibreOffice:</strong>{" "}
                  Open-source office suite for cost-effective solutions
                </li>
                <li>
                  <strong style={{ color: "white" }}>Office 365:</strong>{" "}
                  Subscription-based Microsoft productivity suite
                </li>
                <li>Compatibility considerations and migration strategies</li>
              </ul>
            </section>
          </div>
        </article>

        {/* Article 4 - Module 4 */}
        <article>
          <div>
            <span style={{ color: "white" }}>
              <strong>Module 4</strong>
            </span>
            <h2 style={{ color: "white" }}>
              <strong>Advanced Administration Tools</strong>
            </h2>
          </div>

          <div>
            <section>
              <h3 style={{ color: "white" }}>
                <strong>1. Active Directory</strong>
              </h3>

              <h4 style={{ color: "white" }}>
                <strong>Overview of Active Directory</strong>
              </h4>
              <p>
                <strong style={{ color: "white" }}>Platform Variations:</strong>
              </p>
              <ul>
                <li>
                  <strong style={{ color: "white" }}>
                    Azure Active Directory:
                  </strong>{" "}
                  Cloud-based identity and access management
                </li>
                <li>
                  <strong style={{ color: "white" }}>
                    AWS Directory Service:
                  </strong>{" "}
                  Managed Microsoft AD in the cloud
                </li>
                <li>
                  <strong style={{ color: "white" }}>
                    Windows Active Directory:
                  </strong>{" "}
                  On-premises domain services
                </li>
              </ul>

              <h4 style={{ color: "white" }}>
                <strong>Basic Cloud Account Management</strong>
              </h4>
              <p>
                <strong style={{ color: "white" }}>
                  Adding and Deleting Accounts:
                </strong>
              </p>
              <ul>
                <li>User account provisioning and deprovisioning</li>
                <li>Group policy management and security settings</li>
                <li>Role-based access control (RBAC) implementation</li>
                <li>Multi-factor authentication setup and management</li>
              </ul>
            </section>

            <section>
              <h3 style={{ color: "white" }}>
                <strong>2. Backup and Data Recovery</strong>
              </h3>

              <h4 style={{ color: "white" }}>
                <strong>Explaining Backup and Data Recovery</strong>
              </h4>
              <ul>
                <li>
                  Backup strategies: Full, incremental, and differential backups
                </li>
                <li>Cloud backup solutions and hybrid approaches</li>
                <li>Disaster recovery planning and business continuity</li>
                <li>
                  Recovery time objective (RTO) and recovery point objective
                  (RPO)
                </li>
              </ul>
            </section>

            <section>
              <h3 style={{ color: "white" }}>
                <strong>3. Bash Video Scripting</strong>
              </h3>

              <h4 style={{ color: "white" }}>
                <strong>Automation and Scripting</strong>
              </h4>
              <ul>
                <li>Basic Bash scripting syntax and variables</li>
                <li>Conditional statements and loops for automation</li>
                <li>File manipulation and system administration tasks</li>
                <li>Script scheduling with cron and task automation</li>
              </ul>
            </section>
          </div>
        </article>

        {/* Article 5 - Module 5 */}
        <article>
          <div>
            <span style={{ color: "white" }}>
              <strong>Module 5</strong>
            </span>
            <h2 style={{ color: "white" }}>
              <strong>Network and Server Administration</strong>
            </h2>
          </div>

          <div>
            <section>
              <h3 style={{ color: "white" }}>
                <strong>1. File and Print Services</strong>
              </h3>

              <h4 style={{ color: "white" }}>
                <strong>Troubleshooting Common Printer Issues</strong>
              </h4>
              <ul>
                <li>Print spooler service management and troubleshooting</li>
                <li>Driver conflicts and installation procedures</li>
                <li>Network printer connectivity issues</li>
                <li>Print queue management and job prioritization</li>
              </ul>

              <h4 style={{ color: "white" }}>
                <strong>Print Queues and Printer Configurations</strong>
              </h4>
              <ul>
                <li>Queue management and job scheduling</li>
                <li>Printer sharing and network configuration</li>
                <li>Security settings for shared printers</li>
                <li>Print accounting and usage monitoring</li>
              </ul>
            </section>

            <section>
              <h3 style={{ color: "white" }}>
                <strong>2. Network Configuration Basics</strong>
              </h3>

              <h4 style={{ color: "white" }}>
                <strong>Fundamental Network Concepts</strong>
              </h4>
              <ul>
                <li>TCP/IP configuration and subnetting basics</li>
                <li>DHCP and DNS configuration</li>
                <li>VLAN setup and network segmentation</li>
                <li>Firewall configuration and port management</li>
              </ul>
            </section>

            <section>
              <h3 style={{ color: "white" }}>
                <strong>3. Network Monitoring</strong>
              </h3>

              <h4 style={{ color: "white" }}>
                <strong>Tools in AWS and Why It's Important</strong>
              </h4>
              <ul>
                <li>
                  <strong style={{ color: "white" }}>CloudWatch:</strong> AWS
                  native monitoring and alerting service
                </li>
                <li>
                  <strong style={{ color: "white" }}>VPC Flow Logs:</strong>{" "}
                  Network traffic analysis and security monitoring
                </li>
                <li>
                  <strong style={{ color: "white" }}>AWS Config:</strong>{" "}
                  Configuration compliance and change tracking
                </li>
                <li>Performance metrics and proactive issue identification</li>
              </ul>

              <h4 style={{ color: "white" }}>
                <strong>Importance of Network Monitoring</strong>
              </h4>
              <ul>
                <li>Proactive issue identification and resolution</li>
                <li>Security threat detection and response</li>
                <li>Performance optimization and capacity planning</li>
                <li>Compliance reporting and audit trail maintenance</li>
              </ul>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ArticleCCSA;

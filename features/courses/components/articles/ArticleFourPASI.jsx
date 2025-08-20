const ArticleForthPASI = () => {
  return (
    <div className="text-gray-400">
      <div>
        {/* Header */}
        <div>
          <h1 className="text-white font-bold">PASI Articles</h1>
          <p className="text-gray-400">
            Professional Advancement in Service Infrastructure - Team Lead
            Certification
          </p>
        </div>

        {/* Article - Module 6 */}
        <article>
          <div>
            <span className="text-white font-bold">Module 6</span>
            <h2 className="text-white font-bold">Network Basics</h2>
          </div>

          <div>
            <section>
              <h3 className="text-white font-bold">
                Networking Basics: An Exploration of Essential Concepts
              </h3>
              <p>
                In today&apos;s interconnected world, understanding the basics
                of networking is crucial for both IT professionals and
                enthusiasts. This article explores{" "}
                <span className="text-white">
                  network configuration concepts
                </span>{" "}
                (IPv4, IPv6, DNS, VPNs) and{" "}
                <span className="text-white">network connections</span> (cable,
                fiber, LANs), providing essential insights for anyone learning
                or refreshing knowledge.
              </p>
            </section>

            {/* Networking Configuration Concepts */}
            <section>
              <h3 className="text-white font-bold">
                Networking Configuration Concepts
              </h3>
              <ul className="list-disc ml-6">
                <li>
                  <strong className="text-white">IPv4 and IPv6:</strong> IPv4
                  uses a 32-bit address system (over 4 billion addresses). IPv6
                  expands to 128-bit addresses, offering nearly unlimited
                  addresses, better routing, and improved security.
                </li>
                <li>
                  <strong className="text-white">DNS:</strong> The Domain Name
                  System acts as the internet’s phonebook, translating
                  human-readable domain names into IP addresses.
                </li>
                <li>
                  <strong className="text-white">VPNs:</strong> Virtual Private
                  Networks secure data by encrypting internet traffic, masking
                  IP addresses, and enabling safe remote access.
                </li>
              </ul>
            </section>

            {/* Internet Connections and Network Types */}
            <section>
              <h3 className="text-white font-bold">
                Internet Connections and Network Types
              </h3>
              <ul className="list-disc ml-6">
                <li>
                  <strong className="text-white">Cable Internet:</strong> Uses
                  coaxial cables, widely available but can slow with high user
                  traffic.
                </li>
                <li>
                  <strong className="text-white">Fiber Optic Internet:</strong>{" "}
                  Uses light over fiber cables for faster, more reliable,
                  interference-free connections.
                </li>
                <li>
                  <strong className="text-white">
                    LANs (Local Area Networks):
                  </strong>{" "}
                  Connect devices within small areas like homes or offices.
                  <ul className="list-disc ml-6">
                    <li>
                      <strong className="text-white">Wired LANs:</strong>{" "}
                      Stable, high-speed, ideal for critical systems.
                    </li>
                    <li>
                      <strong className="text-white">
                        Wireless LANs (Wi-Fi):
                      </strong>{" "}
                      Flexible, mobile, but prone to interference.
                    </li>
                  </ul>
                </li>
              </ul>
            </section>

            {/* Security Basics */}
            <div>
              <h2 className="text-white font-bold">Security Basics</h2>

              {/* Physical Security */}
              <section>
                <h3 className="text-white font-bold">
                  Physical Security Measures
                </h3>
                <ul className="list-disc ml-6">
                  <li>
                    <strong className="text-white">Locks:</strong> Prevent
                    unauthorized physical access.
                  </li>
                  <li>
                    <strong className="text-white">Badge Readers:</strong> Allow
                    access only to authorized personnel.
                  </li>
                  <li>
                    <strong className="text-white">CAC & CAC Readers:</strong>{" "}
                    Used in government and military for secure access.
                  </li>
                  <li>
                    <strong className="text-white">Security Guards:</strong>{" "}
                    Provide on-site monitoring and rapid response.
                  </li>
                </ul>
              </section>

              {/* Logical Security */}
              <section>
                <h3 className="text-white font-bold">
                  Logical Security Concepts
                </h3>
                <ul className="list-disc ml-6">
                  <li>
                    <strong className="text-white">
                      Active Directory (AD):
                    </strong>{" "}
                    Manages user access and permissions.
                  </li>
                  <li>
                    <strong className="text-white">
                      Antivirus/Anti-malware:
                    </strong>{" "}
                    Detect and remove malicious software.
                  </li>
                  <li>
                    <strong className="text-white">Firewalls:</strong> Filter
                    and control network traffic.
                  </li>
                  <li>
                    <strong className="text-white">Certificates:</strong>{" "}
                    Authenticate users and encrypt sensitive communications.
                  </li>
                </ul>
              </section>

              {/* Wireless Security */}
              <section>
                <h3 className="text-white font-bold">
                  Wireless Security Protocols
                </h3>
                <ul className="list-disc ml-6">
                  <li>
                    <strong className="text-white">WPA2:</strong> Strong
                    encryption standard for Wi-Fi.
                  </li>
                  <li>
                    <strong className="text-white">WPA3:</strong> Enhanced
                    encryption and brute-force protection.
                  </li>
                  <li>
                    <strong className="text-white">RADIUS:</strong> Centralized
                    authentication for users accessing networks.
                  </li>
                </ul>
              </section>

              {/* Malware */}
              <section>
                <h3 className="text-white font-bold">
                  Detecting and Preventing Malware
                </h3>
                <ul className="list-disc ml-6">
                  <li>
                    <strong className="text-white">Regular Scanning:</strong>{" "}
                    Use updated antivirus tools to detect threats.
                  </li>
                  <li>
                    <strong className="text-white">Software Updates:</strong>{" "}
                    Patch vulnerabilities to prevent exploits.
                  </li>
                  <li>
                    <strong className="text-white">User Education:</strong>{" "}
                    Train staff to avoid suspicious links and attachments.
                  </li>
                </ul>
              </section>

              {/* Social Engineering */}
              <section>
                <h3 className="text-white font-bold">
                  Social Engineering Threats
                </h3>
                <ul className="list-disc ml-6">
                  <li>
                    <strong className="text-white">Phishing:</strong> Fake
                    emails trick users into revealing sensitive information.
                  </li>
                  <li>
                    <strong className="text-white">DDoS:</strong> Overwhelms
                    systems with traffic, mitigated with robust architecture.
                  </li>
                  <li>
                    <strong className="text-white">Brute Force:</strong>{" "}
                    Automated password guessing blocked with MFA and strong
                    passwords.
                  </li>
                  <li>
                    <strong className="text-white">MITM Attacks:</strong>{" "}
                    Attackers intercept communication, defended by encryption.
                  </li>
                </ul>
              </section>

              {/* Device Security */}
              <section>
                <h3 className="text-white font-bold">
                  Securing Workstations and Mobile Devices
                </h3>
                <ul className="list-disc ml-6">
                  <li>
                    <strong className="text-white">
                      Workstation Security:
                    </strong>{" "}
                    Strong passwords, hard drive encryption, restricted
                    privileges.
                  </li>
                  <li>
                    <strong className="text-white">
                      Mobile Device Management (MDM):
                    </strong>{" "}
                    Ensures device compliance and protection.
                  </li>
                  <li>
                    <strong className="text-white">Regular Backups:</strong>{" "}
                    Protect against data loss from malware or failures.
                  </li>
                  <li>
                    <strong className="text-white">Remote Wipe:</strong>{" "}
                    Securely erase data if a device is lost or stolen.
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ArticleForthPASI;

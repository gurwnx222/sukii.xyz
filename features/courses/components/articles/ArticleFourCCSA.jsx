import React from "react";

const ArticleFourCCSA = () => {
  return (
    <div className="text-gray-400">
      <div>
        {/* Header */}
        <div>
          <h1 className="text-white font-bold">CCSA Articles</h1>
          <p className="text-gray-400">Certified Computer Systems Analyst</p>
        </div>

        {/* Article 1 - Remote Access */}
        <article>
          <div>
            <span className="text-white font-bold">Module 2</span>
            <h2 className="text-white font-bold">
              Best Practices for Remoting into Someone&apos;s Workstation
            </h2>
          </div>

          <div>
            <section>
              <h3 className="text-white font-bold">
                Best Practices for Remote Access
              </h3>

              <div>
                <h4 className="text-white font-bold">
                  Communicate with the User
                </h4>
                <ul className="list-disc ml-6">
                  <li>
                    <strong className="text-white">Inform the User:</strong> Let
                    them know before initiating a session so they can prepare.
                  </li>
                  <li>
                    <strong className="text-white">Maintain Privacy:</strong>{" "}
                    Respect privacy by closing unnecessary apps and avoiding
                    personal files.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-white font-bold">
                Why SolarWinds and Microsoft Remote Desktop are Common
              </h3>

              <div>
                <h4 className="text-white font-bold">SolarWinds</h4>
                <ul className="list-disc ml-6">
                  <li>
                    <strong className="text-white">Comprehensive Tools:</strong>{" "}
                    Wide range of IT management tools.
                  </li>
                  <li>
                    <strong className="text-white">High Performance:</strong>{" "}
                    Robust and reliable with minimal downtime.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold">
                  Microsoft Remote Desktop
                </h4>
                <ul className="list-disc ml-6">
                  <li>
                    <strong className="text-white">
                      Built-In Integration:
                    </strong>{" "}
                    Pre-installed with Windows, no extra setup.
                  </li>
                  <li>
                    <strong className="text-white">Ease of Use:</strong> Simple,
                    secure, and efficient.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-white font-bold">
                Advantages of Remoting into a Workstation
              </h3>

              <div>
                <h4 className="text-white font-bold">Efficiency</h4>
                <ul className="list-disc ml-6">
                  <li>
                    <strong className="text-white">Immediate Support:</strong>{" "}
                    Instant troubleshooting without travel.
                  </li>
                  <li>
                    <strong className="text-white">Quick Fixes:</strong> Faster
                    issue resolution.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold">Cost-Effective</h4>
                <ul className="list-disc ml-6">
                  <li>Reduce travel expenses.</li>
                  <li>Optimize IT staff resources.</li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold">Flexibility</h4>
                <ul className="list-disc ml-6">
                  <li>Support from anywhere.</li>
                  <li>Enable 24/7 assistance for global teams.</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-white font-bold">
                Examples of Remote Troubleshooting Tasks
              </h3>
              <ul className="list-disc ml-6">
                <li>Adding a printer remotely.</li>
                <li>Installing or updating software.</li>
                <li>Running diagnostics and performance checks.</li>
                <li>User account management.</li>
              </ul>
            </section>
          </div>
        </article>

        {/* Article 2 - Operating Systems */}
        <article>
          <div>
            <span className="text-white font-bold">Module 3</span>
            <h2 className="text-white font-bold">
              Brief Overview of Operating Systems
            </h2>
          </div>

          <div>
            <section>
              <h3 className="text-white font-bold">
                Overview of Famous Operating Systems
              </h3>

              {/* Windows */}
              <div>
                <h4 className="text-white font-bold">
                  <a
                    href="https://www.microsoft.com/windows"
                    className="text-blue-400 underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Windows
                  </a>
                </h4>
                <ul className="list-disc ml-6">
                  <li>
                    <strong className="text-white">Developer:</strong> Microsoft
                  </li>
                  <li>
                    <strong className="text-white">Latest Version:</strong>{" "}
                    Windows 11
                  </li>
                  <li>User-friendly GUI with Start Menu, Taskbar.</li>
                  <li>Supports a wide range of software/hardware.</li>
                  <li>Includes Edge, File Explorer, Office.</li>
                  <li>Security: Defender, BitLocker, Updates.</li>
                </ul>
              </div>

              {/* Linux */}
              <div>
                <h4 className="text-white font-bold">
                  <a
                    href="https://www.linux.org/"
                    className="text-blue-400 underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Linux
                  </a>
                </h4>
                <ul className="list-disc ml-6">
                  <li>
                    <strong className="text-white">Initial Release:</strong>{" "}
                    1991
                  </li>
                  <li>Open-source, secure, customizable.</li>
                  <li>Popular distros: Ubuntu, Fedora, Debian, RHEL.</li>
                  <li>Strong CLI for developers/admins.</li>
                  <li>Ideal for servers, dev, and scientific computing.</li>
                </ul>
              </div>

              {/* macOS */}
              <div>
                <h4 className="text-white font-bold">
                  <a
                    href="https://www.apple.com/macos/"
                    className="text-blue-400 underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    macOS
                  </a>
                </h4>
                <ul className="list-disc ml-6">
                  <li>
                    <strong className="text-white">Developer:</strong> Apple
                    Inc.
                  </li>
                  <li>
                    <strong className="text-white">Latest Version:</strong>{" "}
                    Ventura (2024)
                  </li>
                  <li>Sleek UI, seamless Apple ecosystem integration.</li>
                  <li>Includes Safari, Mail, iWork, Final Cut Pro.</li>
                  <li>UNIX-based foundation with strong security.</li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold">Summary</h4>
                <ul className="list-disc ml-6">
                  <li>
                    <strong className="text-white">Windows:</strong> Versatile,
                    gaming + enterprise.
                  </li>
                  <li>
                    <strong className="text-white">Linux:</strong> Secure,
                    open-source, great for dev + servers.
                  </li>
                  <li>
                    <strong className="text-white">macOS:</strong> Creative
                    professionals + Apple users.
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ArticleFourCCSA;

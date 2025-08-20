import React from "react";

const ArticleFifthCASI = () => {
  return (
    <div style={{ color: "#9CA3AF" }}>
      <div>
        {/* Header */}
        <div>
          <h1 style={{ color: "white" }}>
            <strong>CASI Articles</strong>
          </h1>
          <p style={{ color: "#9CA3AF" }}>
            Cybersecurity Analytics and Solutions Implementation
          </p>
        </div>

        {/* Article 1 - Cryptographic Concepts and Algorithms */}
        <article>
          <div>
            <span style={{ color: "white" }}>
              <strong>Module 15</strong>
            </span>
            <h2 style={{ color: "white" }}>
              <strong>
                Lecture 15.1: Cryptographic Concepts and Algorithms
              </strong>
            </h2>
          </div>

          <div>
            <section>
              <h3 style={{ color: "white" }}>
                <strong>Introduction</strong>
              </h3>
              <p>
                In this lecture, we will dive deep into cryptography—both its
                core concepts and the different algorithms that make it possible
                for us to keep data safe in a digital world. You'll gain a
                strong understanding of how encryption works, why it's
                necessary, and the key algorithms that shape modern-day
                cryptography.
              </p>
            </section>

            <section>
              <h3 style={{ color: "white" }}>
                <strong>What is Cryptography?</strong>
              </h3>
              <p>
                At its core, cryptography is the science of securing information
                so that only the intended recipient can read or understand it.
                It is used in almost everything we do online, whether it's
                sending messages, making purchases, or accessing sensitive
                information. The fundamental idea behind cryptography is to take
                plain, readable information (plaintext) and turn it into an
                unreadable format (ciphertext). This transformation is done
                using encryption algorithms, and the information can only be
                turned back into its original form through a process called
                decryption.
              </p>
              <div>
                <h4 style={{ color: "white" }}>
                  <strong>Cryptography Protects</strong>
                </h4>
                <ul>
                  <li>
                    <strong style={{ color: "white" }}>Confidentiality:</strong>{" "}
                    Only the intended person can read the data.
                  </li>
                  <li>
                    <strong style={{ color: "white" }}>Integrity:</strong>{" "}
                    Ensures the data has not been altered.
                  </li>
                  <li>
                    <strong style={{ color: "white" }}>Authentication:</strong>{" "}
                    Verifies the identity of the parties involved.
                  </li>
                  <li>
                    <strong style={{ color: "white" }}>Non-repudiation:</strong>{" "}
                    Prevents denial of actions like sending a message.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h3 style={{ color: "white" }}>
                <strong>Types of Cryptography</strong>
              </h3>

              <div>
                <h4 style={{ color: "white" }}>
                  <strong>Symmetric Encryption</strong>
                </h4>
                <p>
                  Symmetric encryption uses a single key to both encrypt and
                  decrypt data. It's fast and efficient for large amounts of
                  data but requires a secure way of sharing the key between
                  parties.
                </p>
                <div>
                  <h5 style={{ color: "white" }}>
                    <strong>Example: AES (Advanced Encryption Standard)</strong>
                  </h5>
                  <p>
                    In AES, the same key is used to encrypt and decrypt data.
                    AES is widely used for securing everything from personal
                    files to large-scale government secrets. The challenge with
                    symmetric encryption is sharing the key securely between two
                    parties. If an attacker gets hold of the key, they can
                    decrypt all the data.
                  </p>
                </div>
              </div>

              <div>
                <h4 style={{ color: "white" }}>
                  <strong>Asymmetric Encryption</strong>
                </h4>
                <p>
                  Asymmetric encryption uses two keys: a public key for
                  encryption and a private key for decryption. Only the private
                  key, which is kept secret by the recipient, can decrypt the
                  data. This makes it more secure for exchanging data,
                  especially across the internet, but it's slower than symmetric
                  encryption.
                </p>
                <div>
                  <h5 style={{ color: "white" }}>
                    <strong>Example: RSA (Rivest-Shamir-Adleman)</strong>
                  </h5>
                  <p>
                    RSA uses a pair of keys—public and private—to encrypt and
                    decrypt data. It's widely used in secure communications,
                    including SSL/TLS for website security. The public key is
                    available to anyone, but only the person with the private
                    key can decrypt messages.
                  </p>
                </div>
              </div>

              <div>
                <h4 style={{ color: "white" }}>
                  <strong>Hashing</strong>
                </h4>
                <p>
                  Hashing is a one-way process that converts data into a
                  fixed-length string of characters, which is unique for each
                  input. Unlike encryption, hashing cannot be reversed, meaning
                  it's typically used to ensure data integrity (like verifying a
                  password) rather than protecting confidentiality.
                </p>
                <div>
                  <h5 style={{ color: "white" }}>
                    <strong>Example: SHA-256 (Secure Hash Algorithm)</strong>
                  </h5>
                  <p>
                    SHA-256 generates a unique 256-bit hash for any input data.
                    It's commonly used in verifying the integrity of downloaded
                    files or in securing passwords.
                  </p>
                </div>
              </div>

              <div>
                <h4 style={{ color: "white" }}>
                  <strong>Hybrid Encryption</strong>
                </h4>
                <p>
                  Hybrid encryption is a combination of symmetric and asymmetric
                  encryption. Typically, asymmetric encryption (like RSA) is
                  used to encrypt a symmetric key (like AES), and then that
                  symmetric key is used to encrypt the actual data. This
                  provides the security benefits of asymmetric encryption with
                  the speed of symmetric encryption.
                </p>
                <div>
                  <h5 style={{ color: "white" }}>
                    <strong>
                      Example: SSL/TLS (Secure Sockets Layer / Transport Layer
                      Security)
                    </strong>
                  </h5>
                  <p>
                    When you access a secure website (https://), your browser
                    uses SSL/TLS to establish a secure connection. The browser
                    and server exchange public keys and use asymmetric
                    encryption to securely exchange an AES key, which is then
                    used for fast encryption of the actual data.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 style={{ color: "white" }}>
                <strong>Common Cryptographic Algorithms</strong>
              </h3>

              <div>
                <h4 style={{ color: "white" }}>
                  <strong>AES (Advanced Encryption Standard)</strong>
                </h4>
                <ul>
                  <li>
                    <strong style={{ color: "white" }}>Key Type:</strong>{" "}
                    Symmetric
                  </li>
                  <li>
                    <strong style={{ color: "white" }}>Strengths:</strong> Very
                    fast, highly secure, widely adopted for everything from file
                    encryption to secure communication.
                  </li>
                  <li>
                    <strong style={{ color: "white" }}>Weaknesses:</strong>{" "}
                    Requires secure key distribution.
                  </li>
                </ul>
              </div>

              <div>
                <h4 style={{ color: "white" }}>
                  <strong>RSA (Rivest-Shamir-Adleman)</strong>
                </h4>
                <ul>
                  <li>
                    <strong style={{ color: "white" }}>Key Type:</strong>{" "}
                    Asymmetric
                  </li>
                  <li>
                    <strong style={{ color: "white" }}>Strengths:</strong> Great
                    for secure key exchange and digital signatures.
                  </li>
                  <li>
                    <strong style={{ color: "white" }}>Weaknesses:</strong>{" "}
                    Slower for large data encryption.
                  </li>
                </ul>
              </div>

              <div>
                <h4 style={{ color: "white" }}>
                  <strong>SHA-256 (Secure Hash Algorithm)</strong>
                </h4>
                <ul>
                  <li>
                    <strong style={{ color: "white" }}>Key Type:</strong>{" "}
                    Hashing (not reversible)
                  </li>
                  <li>
                    <strong style={{ color: "white" }}>Strengths:</strong>{" "}
                    Ensures data integrity, widely used in blockchain technology
                    and for verifying passwords.
                  </li>
                  <li>
                    <strong style={{ color: "white" }}>Weaknesses:</strong>{" "}
                    Vulnerable to brute-force attacks if used without additional
                    security measures (e.g., salting for passwords).
                  </li>
                </ul>
              </div>

              <div>
                <h4 style={{ color: "white" }}>
                  <strong>
                    ECDSA (Elliptic Curve Digital Signature Algorithm)
                  </strong>
                </h4>
                <ul>
                  <li>
                    <strong style={{ color: "white" }}>Key Type:</strong>{" "}
                    Asymmetric (used for digital signatures)
                  </li>
                  <li>
                    <strong style={{ color: "white" }}>Strengths:</strong>{" "}
                    Provides the same security level as RSA but with much
                    smaller key sizes, making it more efficient.
                  </li>
                  <li>
                    <strong style={{ color: "white" }}>Weaknesses:</strong> More
                    complex to implement.
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </article>

        {/* Article 2 - Implementing Cryptographic Solutions */}
        <article>
          <div>
            <span style={{ color: "white" }}>
              <strong>Module 15</strong>
            </span>
            <h2 style={{ color: "white" }}>
              <strong>
                Lecture 15.2: Implementing Cryptographic Solutions
              </strong>
            </h2>
          </div>

          <div>
            <section>
              <h3 style={{ color: "white" }}>
                <strong>Introduction</strong>
              </h3>
              <p>
                In this lecture, we focus on putting cryptography into practice.
                You'll learn how to use cryptographic techniques to solve
                real-world security problems, implement secure systems, and
                prevent common attacks.
              </p>
            </section>

            <section>
              <h3 style={{ color: "white" }}>
                <strong>How Do You Use Encryption in Practice?</strong>
              </h3>

              <div>
                <h4 style={{ color: "white" }}>
                  <strong>File Encryption</strong>
                </h4>
                <p>
                  Suppose you have a sensitive document that you want to store
                  securely on your computer. You can use AES to encrypt the
                  file, which converts the contents into unreadable data unless
                  someone has the correct decryption key.
                </p>
                <p>
                  Tools like VeraCrypt or BitLocker use AES to secure files and
                  folders on your computer. You'll need to remember a password
                  or key to decrypt the file when you need access to it.
                </p>
              </div>

              <div>
                <h4 style={{ color: "white" }}>
                  <strong>Secure Communication</strong>
                </h4>
                <p>
                  When you send an email or visit a website, cryptography helps
                  keep your information secure during transmission. Email
                  services like ProtonMail use asymmetric encryption (like RSA)
                  to ensure that only the intended recipient can read the
                  message. For web browsing, SSL/TLS ensures your connection to
                  websites is encrypted, preventing attackers from intercepting
                  your data.
                </p>
              </div>

              <div>
                <h4 style={{ color: "white" }}>
                  <strong>Authentication and Digital Signatures</strong>
                </h4>
                <p>
                  Imagine you're a developer working on software updates. You
                  can use a digital signature (like RSA or ECDSA) to "sign" your
                  update so that users can verify it came from you and hasn't
                  been altered. This is used in everything from software
                  downloads to blockchain transactions to prove the authenticity
                  and integrity of data.
                </p>
              </div>

              <div>
                <h4 style={{ color: "white" }}>
                  <strong>Password Storage</strong>
                </h4>
                <p>
                  When users create passwords for a website, you don't store
                  their actual password. Instead, you hash the password using an
                  algorithm like SHA-256 and store the hash. When users log in,
                  the entered password is hashed again, and the two hashes are
                  compared. By using salting (adding a random value to the
                  password before hashing), you protect against common attacks
                  like rainbow table attacks.
                </p>
              </div>
            </section>

            <section>
              <h3 style={{ color: "white" }}>
                <strong>Common Cryptographic Attacks</strong>
              </h3>
              <p>
                While cryptography is incredibly powerful, it's not foolproof.
                Understanding common attacks helps you design better systems.
              </p>

              <div>
                <h4 style={{ color: "white" }}>
                  <strong>Brute-Force Attack</strong>
                </h4>
                <p>
                  This attack involves trying every possible key combination
                  until the correct one is found. This is why longer, more
                  complex keys (like 256-bit AES) are more secure than shorter
                  ones.
                </p>
              </div>

              <div>
                <h4 style={{ color: "white" }}>
                  <strong>Man-in-the-Middle Attack</strong>
                </h4>
                <p>
                  In this type of attack, a hacker intercepts and possibly
                  alters the communication between two parties without either
                  knowing. SSL/TLS helps prevent this by ensuring that both
                  parties' identities are authenticated before data is
                  exchanged.
                </p>
              </div>

              <div>
                <h4 style={{ color: "white" }}>
                  <strong>Hash Collision Attack</strong>
                </h4>
                <p>
                  This occurs when two different inputs produce the same hash,
                  which can allow attackers to fool a system that relies on
                  hashes for integrity checks. Strong hash functions like
                  SHA-256 are designed to minimize the chances of collisions.
                </p>
              </div>

              <div>
                <h4 style={{ color: "white" }}>
                  <strong>Replay Attack</strong>
                </h4>
                <p>
                  In a replay attack, an attacker intercepts data (like a
                  message or login request) and then sends it again to trick the
                  system into granting access. Using nonces (numbers that are
                  used only once) helps prevent this type of attack.
                </p>
              </div>
            </section>

            <section>
              <h3 style={{ color: "white" }}>
                <strong>Key Takeaways</strong>
              </h3>
              <ul>
                <li>
                  <strong style={{ color: "white" }}>
                    Symmetric encryption
                  </strong>{" "}
                  is fast and used for bulk data encryption (like AES).
                </li>
                <li>
                  <strong style={{ color: "white" }}>
                    Asymmetric encryption
                  </strong>{" "}
                  is slower but useful for secure key exchange and digital
                  signatures (like RSA).
                </li>
                <li>
                  <strong style={{ color: "white" }}>Hashing</strong> ensures
                  data integrity and is used for things like password storage
                  (SHA-256).
                </li>
                <li>
                  <strong style={{ color: "white" }}>Hybrid encryption</strong>{" "}
                  combines the strengths of symmetric and asymmetric encryption
                  for secure communication.
                </li>
                <li>
                  <strong style={{ color: "white" }}>
                    Understanding common cryptographic attacks
                  </strong>{" "}
                  like brute-force, man-in-the-middle, and replay attacks helps
                  prevent security vulnerabilities.
                </li>
              </ul>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ArticleFifthCASI;

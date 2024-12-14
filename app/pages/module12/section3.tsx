
const Section3 = () => {
  return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Section 3: Security Protocols and Techniques</h1>
        <p className="text-white mb-4">
          In this section, we cover key security protocols and techniques that help protect data during transmission and ensure system integrity.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600">Security Protocols</h2>
        <p className="text-white mb-4">
          Security protocols are standardized methods of securing communications between systems. These protocols ensure the confidentiality, integrity, and authenticity of data.
        </p>

        <ul className="list-disc pl-5">
          <li>SSL/TLS: Protocols used to secure communication over networks.</li>
          <li>IPSec: Used to secure IP communications by authenticating and encrypting each IP packet.</li>
          <li>SSH: A protocol for secure remote login and command execution on systems.</li>
          <li>HTTPS: The secure version of HTTP, encrypted via SSL/TLS.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-600">Security Techniques</h2>
        <ul className="list-disc pl-5">
          <li>VPNs: Securing communication over untrusted networks.</li>
          <li>Encryption: Protecting data both at rest and in transit.</li>
          <li>Multi-factor Authentication (MFA): Strengthening authentication procedures.</li>
        </ul>
      </div>
  );
};

export default Section3;

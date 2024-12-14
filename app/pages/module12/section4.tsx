
const Section4 = () => {
  return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Section 4: System Security</h1>
        <p className="text-white mb-4">
          This section focuses on securing individual systems, including operating system hardening and applying necessary security patches.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600">System Hardening</h2>
        <p className="text-white mb-4">
          System hardening involves securing a system by reducing its surface of vulnerability. This is done by disabling unnecessary services, applying patches, and configuring the system for optimal security.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600">Key Steps for Hardening Systems</h2>
        <ul className="list-disc pl-5">
          <li>Disabling unused ports and services</li>
          <li>Regularly updating software and operating systems with security patches</li>
          <li>Enforcing strong password policies and user authentication</li>
          <li>Implementing proper access control mechanisms</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-600">Securing Operating Systems</h2>
        <p className="text-white">
          This involves configuring OS settings, applying security patches, and using tools like antivirus and endpoint protection to prevent malware.
        </p>
      </div>
  );
};

export default Section4;

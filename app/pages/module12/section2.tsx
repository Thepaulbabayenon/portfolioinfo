
const Section2 = () => {
  return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Section 2: Defending Network Perimeter</h1>
        <p className="text-white mb-4">
          This section covers the importance of securing the network perimeter. A strong perimeter defense is the first line of defense against external threats.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600">What is a Network Perimeter?</h2>
        <p className="text-white mb-4">
          A network perimeter refers to the boundary that separates the internal network from the external world. It is the front line of defense against unauthorized access.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600">Techniques for Defending the Perimeter</h2>
        <ul className="list-disc pl-5">
          <li>Firewalls: Hardware or software used to block unauthorized access.</li>
          <li>VPNs: Virtual Private Networks to secure remote access to the internal network.</li>
          <li>Network Segmentation: Dividing the network into smaller subnets to contain potential threats.</li>
          <li>Intrusion Detection/Prevention Systems (IDS/IPS): Systems designed to detect and stop malicious activity.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-600">Common Network Perimeter Threats</h2>
        <p className="text-white">
          Common threats include Distributed Denial of Service (DDoS) attacks, malware, and unauthorized access by insiders or external attackers.
        </p>
      </div>
  );
};

export default Section2;

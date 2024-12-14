import Layout from '../../../components/LayoutModule';

const Section5 = () => {
  return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Section 5: Defense Against Advanced Threats</h1>
        <p className="text-white mb-4">
          In this section, we will cover advanced persistent threats (APTs), the techniques used by attackers, and how organizations can defend against them using threat intelligence and other defensive measures.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600">What are Advanced Persistent Threats (APTs)?</h2>
        <p className="text-white mb-4">
          APTs are complex, long-term cyberattacks that typically target high-value assets and are carried out with sophisticated techniques, often by state-sponsored actors or well-funded groups.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600">Defending Against APTs</h2>
        <ul className="list-disc pl-5">
          <li>Continuous monitoring and analysis of network traffic</li>
          <li>Threat intelligence sharing and analysis to detect early signs of APTs</li>
          <li>Incident response plans and drills for responding to APTs</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-600">Using Threat Intelligence</h2>
        <p className="text-white">
          Threat intelligence involves gathering and analyzing information about emerging threats. Organizations can use this information to proactively defend against APTs by identifying attack patterns and vulnerabilities.
        </p>
      </div>
  );
};

export default Section5;

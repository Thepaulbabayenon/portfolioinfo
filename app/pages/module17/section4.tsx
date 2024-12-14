// section4.tsx
const Section4 = () => {
  return (
    <section id="section4" className="space-y-4">
      <h2 className="text-2xl font-semibold text-green-600">Section 4: Cloud Security Threats and Mitigation</h2>
      <p className="text-white">
        Understanding the common threats in cloud environments is crucial for mitigating risks. In this section, we’ll explore different cloud security threats and effective strategies for countering them.
      </p>

      <h3 className="text-xl font-semibold text-green-500">Key Concepts:</h3>
      <ul className="list-disc pl-6 text-white">
        <li>
          <strong>Data Breaches:</strong> 
          Unauthorized access to sensitive data in the cloud can lead to significant losses. To mitigate this, use encryption, access controls, and strong authentication measures.
        </li>
        <li>
          <strong>Insider Threats:</strong> 
          Malicious or negligent actions from employees can compromise cloud security. Implementing strict access controls and monitoring can help reduce this risk.
        </li>
        <li>
          <strong>DDoS (Distributed Denial of Service) Attacks:</strong> 
          Attackers may overwhelm cloud services with traffic, causing downtime. Cloud providers offer services like AWS Shield and Azure DDoS Protection to counter these attacks.
        </li>
        <li>
          <strong>Misconfigurations:</strong> 
          Incorrect configurations in cloud environments can leave systems vulnerable. Regularly audit cloud settings and use tools like <em>Cloud Security Posture Management (CSPM)</em> to detect misconfigurations.
        </li>
      </ul>
    </section>
  );
};

export default Section4;

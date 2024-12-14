// section5.tsx
const Section5 = () => {
  return (
    <section id="section5" className="space-y-4">
      <h2 className="text-2xl font-semibold text-green-600">Section 5: Compliance and Legal Issues</h2>
      <p className="text-white">
        Cloud security isn’t just about technology; it also involves meeting legal and regulatory requirements. This section explores how to navigate the legal landscape surrounding cloud security and compliance.
      </p>

      <h3 className="text-xl font-semibold text-green-500">Key Concepts:</h3>
      <ul className="list-disc pl-6 text-white">
        <li>
          <strong>Regulations and Standards:</strong> 
          Regulations like <em>GDPR</em>, <em>HIPAA</em>, and <em>CCPA</em> govern how cloud providers handle personal and sensitive data. Cloud service providers should ensure compliance with these laws.
        </li>
        <li>
          <strong>Cloud Service Agreements:</strong> 
          It is important to understand and negotiate cloud service agreements (SLAs) to address security, data ownership, and privacy concerns.
        </li>
        <li>
          <strong>Third-Party Risk Management:</strong> 
          Cloud customers must evaluate third-party cloud providers to ensure they meet the necessary security standards and regulatory requirements.
        </li>
        <li>
          <strong>Data Sovereignty:</strong> 
          Cloud customers need to be aware of where their data is stored, as data protection laws vary by country and region.
        </li>
      </ul>
    </section>
  );
};

export default Section5;

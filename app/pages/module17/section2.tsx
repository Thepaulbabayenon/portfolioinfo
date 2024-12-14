// section2.tsx
const Section2 = () => {
  return (
    <section id="section2" className="space-y-4">
      <h2 className="text-2xl font-semibold text-green-600">Section 2: Cloud Security Architecture</h2>
      <p className="text-white">
        Cloud security architecture involves designing and implementing secure cloud environments. This section discusses frameworks and strategies for creating secure infrastructures in the cloud, ensuring your cloud applications are protected.
      </p>

      <h3 className="text-xl font-semibold text-green-500">Key Concepts:</h3>
      <ul className="list-disc pl-6 text-white">
        <li>
          <strong>Cloud Security Frameworks:</strong> 
          Popular security frameworks like the <em>Cloud Security Alliance (CSA)</em> and <em>NIST SP 800-53</em> provide guidelines and best practices for cloud security.
        </li>
        <li>
          <strong>Virtual Private Cloud (VPC):</strong> 
          A VPC allows you to isolate and control your cloud resources, enhancing security with private subnets and custom IP addressing.
        </li>
        <li>
          <strong>Encryption in the Cloud:</strong> 
          Protecting data in transit and at rest through encryption ensures data confidentiality and integrity in cloud environments.
        </li>
        <li>
          <strong>Identity and Access Management (IAM):</strong> 
          IAM controls who can access resources in the cloud and what actions they can perform, using roles, policies, and multi-factor authentication (MFA).
        </li>
      </ul>
    </section>
  );
};

export default Section2;

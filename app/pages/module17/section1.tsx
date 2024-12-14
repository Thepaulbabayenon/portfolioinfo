// section1.tsx
const Section1 = () => {
  return (
    <section id="section1" className="space-y-4">
      <h2 className="text-2xl font-semibold text-green-600">Section 1: Introduction to Cloud Computing and Security</h2>
      <p className="text-white">
        Cloud computing has become an essential part of modern IT infrastructure, enabling businesses to scale and innovate. In this section, we will explore the basics of cloud computing, including its different models and services, and the security challenges it brings.
      </p>

      <h3 className="text-xl font-semibold text-green-500">Key Concepts:</h3>
      <ul className="list-disc pl-6 text-white">
        <li>
          <strong>Cloud Computing Models:</strong> 
          The three main cloud models are <em>Public Cloud</em>, <em>Private Cloud</em>, and <em>Hybrid Cloud</em>. 
          Each model offers different levels of control, flexibility, and security.
        </li>
        <li>
          <strong>Cloud Service Types:</strong> 
          Cloud services can be categorized as <em>Infrastructure as a Service (IaaS)</em>, 
          <em>Platform as a Service (PaaS)</em>, and <em>Software as a Service (SaaS)</em>.
        </li>
        <li>
          <strong>Shared Responsibility Model:</strong> 
          In the cloud, security responsibilities are shared between the cloud provider and the customer. 
          The provider secures the infrastructure, while the customer ensures the security of their data and applications.
        </li>
        <li>
          <strong>Cloud Security Challenges:</strong> 
          Data privacy concerns, loss of control over data, and securing multi-tenant environments.
        </li>
      </ul>
    </section>
  );
};

export default Section1;

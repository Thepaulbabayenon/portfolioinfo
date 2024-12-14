// section3.tsx
const Section3 = () => {
  return (
    <section id="section3" className="space-y-4">
      <h2 className="text-2xl font-semibold text-green-600">Section 3: Secure Cloud Storage</h2>
      <p className="text-white">
        Data storage is one of the most important cloud services. In this section, we cover how to keep your data safe in the cloud by using encryption, redundancy, and compliance measures.
      </p>

      <h3 className="text-xl font-semibold text-green-500">Key Concepts:</h3>
      <ul className="list-disc pl-6 text-white">
        <li>
          <strong>Cloud Storage Types:</strong> 
          Cloud storage services provide different types of storage: <em>object storage</em>, <em>block storage</em>, and <em>file storage</em>.
          Examples include AWS S3, Azure Blob Storage, and Google Cloud Storage.
        </li>
        <li>
          <strong>Data Encryption:</strong> 
          Encrypting data both <em>at rest</em> (stored data) and <em>in transit</em> (data in motion) ensures that unauthorized users cannot access sensitive information.
        </li>
        <li>
          <strong>Redundancy and Backup:</strong> 
          Implementing redundancy and using multiple storage locations help protect against data loss due to hardware failures, ensuring high availability and disaster recovery.
        </li>
        <li>
          <strong>Compliance with Legal Regulations:</strong> 
          Ensuring compliance with data privacy laws like <em>GDPR</em>, <em>HIPAA</em>, and <em>CCPA</em> by adhering to best practices for data protection in the cloud.
        </li>
      </ul>
    </section>
  );
};

export default Section3;

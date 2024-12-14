import Link from 'next/link';
import Layout from '../components/LayoutModule';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Layout>
        <section className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to CS411: Network and Cloud Security Portfolio
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            This portfolio contains the key concepts, topics, and subtopics covered in
            <strong> Module 12: System and Network Defense</strong> and
            <strong> Module 17: Cloud Security</strong>.
          </p>
          <div className="space-x-4">
            <Link
              href="/pages/module12"
              className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Explore Module 12: System and Network Defense
            </Link>
            <Link
              href="/pages/module17"
              className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition duration-200"
            >
              Explore Module 17: Cloud Security
            </Link>
          </div>
        </section>

        <section className="text-center bg-gray-50 py-8 mt-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            What You Will Learn
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            In this portfolio, you will explore foundational and advanced security concepts
            for both traditional and cloud networks. The course modules cover defense
            strategies, cloud architecture, encryption, threat mitigation, and more.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">System & Network Defense</h3>
              <p className="text-gray-600">
                Learn how to defend against cyberattacks, implement network defense strategies, 
                and secure system architectures using security protocols and tools.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Cloud Security</h3>
              <p className="text-gray-600">
                Understand cloud security models, encryption techniques, and the challenges 
                of protecting cloud environments from security threats and compliance risks.
              </p>
            </div>
          </div>
        </section>
      </Layout>

      {/* Sticky Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm">&copy; 2024, Paul Babayen-on. All rights reserved.</p>
          <div className="mt-4">
            <p className="text-xs">Contacts:</p>
            <div className="flex justify-center mt-2 space-x-4">
              <a href="https://www.facebook.com/TobiasFatee/" className="text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <a href="https://github.com/Thepaulbabayenon" className="text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

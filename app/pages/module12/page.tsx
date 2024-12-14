'use c'
import Layout from '../../../components/LayoutModule';
import { useState, useEffect } from 'react';
import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';
import Section4 from './section4';
import Section5 from './section5';

const Module12 = () => {
  const [activeSection, setActiveSection] = useState('section1');

  const handleScroll = () => {
    const sections = ['section1', 'section2', 'section3', 'section4', 'section5'];
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element && window.scrollY >= element.offsetTop - 100) {
        setActiveSection(section);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 py-8"> {/* Increased max-w-4xl to max-w-7xl */}
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Module 12: System and Network Defense
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8"> {/* Adjusted to a 4-column layout */}
          <div className="space-y-8 md:col-span-3"> {/* Main content takes up more space */}
            {/* Section 1 */}
            <Section1 />

            {/* Section 2 */}
            <Section2 />

            {/* Section 3 */}
            <Section3 />

            {/* Section 4 */}
            <Section4 />

            {/* Section 5 */}
            <Section5 />
          </div>

          {/* Sidebar Navigation */}
          <div className="md:col-span-1 bg-gray-50 p-6 rounded-lg shadow-lg sticky top-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#section1"
                  className={`text-blue-600 hover:text-blue-800 transition duration-300 ${activeSection === 'section1' ? 'font-bold' : ''}`}
                >
                  Section 1: Fundamentals
                </a>
              </li>
              <li>
                <a
                  href="#section2"
                  className={`text-blue-600 hover:text-blue-800 transition duration-300 ${activeSection === 'section2' ? 'font-bold' : ''}`}
                >
                  Section 2: Network Perimeter
                </a>
              </li>
              <li>
                <a
                  href="#section3"
                  className={`text-blue-600 hover:text-blue-800 transition duration-300 ${activeSection === 'section3' ? 'font-bold' : ''}`}
                >
                  Section 3: Security Protocols
                </a>
              </li>
              <li>
                <a
                  href="#section4"
                  className={`text-blue-600 hover:text-blue-800 transition duration-300 ${activeSection === 'section4' ? 'font-bold' : ''}`}
                >
                  Section 4: System Security
                </a>
              </li>
              <li>
                <a
                  href="#section5"
                  className={`text-blue-600 hover:text-blue-800 transition duration-300 ${activeSection === 'section5' ? 'font-bold' : ''}`}
                >
                  Section 5: Advanced Threats
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Module12;

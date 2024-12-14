'use client';
import Layout from '../../../components/LayoutModule';
import { useState, useEffect } from 'react';
import Section1 from './section1';  // Importing the Section 1 component
import Section2 from './section2';  // Importing the Section 2 component
import Section3 from './section3';  // Importing the Section 3 component
import Section4 from './section4';  // Importing the Section 4 component
import Section5 from './section5';  // Importing the Section 5 component

const Module17 = () => {
  const [activeSection, setActiveSection] = useState('section1');

  // This function checks the current visible section based on scroll position
  const handleScroll = () => {
    const sections = ['section1', 'section2', 'section3', 'section4', 'section5'];
    for (let section of sections) {
      const element = document.getElementById(section);
      if (element && window.scrollY >= element.offsetTop - 100) {
        setActiveSection(section);
      }
    }
  };

  // Detect scroll events and update active section
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle the navigation click to smoothly scroll and update the active section
  const handleNavigationClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Module 17: Cloud Security
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-8 md:col-span-3">
            {/* Sections */}
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
          </div>

          {/* Sidebar Navigation */}
          <div className="md:col-span-1 bg-gray-50 p-6 rounded-lg shadow-lg sticky top-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#section1"
                  onClick={() => handleNavigationClick('section1')}
                  className={`text-green-600 hover:text-green-800 transition duration-300 ${activeSection === 'section1' ? 'font-bold' : ''}`}
                >
                  Section 1: Introduction to Cloud
                </a>
              </li>
              <li>
                <a
                  href="#section2"
                  onClick={() => handleNavigationClick('section2')}
                  className={`text-green-600 hover:text-green-800 transition duration-300 ${activeSection === 'section2' ? 'font-bold' : ''}`}
                >
                  Section 2: Cloud Architecture
                </a>
              </li>
              <li>
                <a
                  href="#section3"
                  onClick={() => handleNavigationClick('section3')}
                  className={`text-green-600 hover:text-green-800 transition duration-300 ${activeSection === 'section3' ? 'font-bold' : ''}`}
                >
                  Section 3: Secure Cloud Storage
                </a>
              </li>
              <li>
                <a
                  href="#section4"
                  onClick={() => handleNavigationClick('section4')}
                  className={`text-green-600 hover:text-green-800 transition duration-300 ${activeSection === 'section4' ? 'font-bold' : ''}`}
                >
                  Section 4: Security Threats
                </a>
              </li>
              <li>
                <a
                  href="#section5"
                  onClick={() => handleNavigationClick('section5')}
                  className={`text-green-600 hover:text-green-800 transition duration-300 ${activeSection === 'section5' ? 'font-bold' : ''}`}
                >
                  Section 5: Compliance Issues
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Module17;

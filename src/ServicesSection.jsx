import React from 'react';
import { SiFigma, SiReact, SiFirebase } from 'react-icons/si';

const services = [
  {
    icon: <SiFigma className="text-blue-600 text-4xl mb-4" />,
    title: 'UI/UX Design',
    subtitle: 'Creating intuitive and engaging user experiences',
    points: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
  },
  {
    icon: <SiReact className="text-blue-600 text-4xl mb-4" />,
    title: 'React Native Development',
    subtitle: 'Building cross-platform mobile applications',
    points: [
      'Custom Components',
      'State Management',
      'API Integration',
      'Performance Optimization',
    ],
  },
  {
    icon: <SiFirebase className="text-blue-600 text-4xl mb-4" />,
    title: 'Backend Integration',
    subtitle: 'Robust and scalable server solutions',
    points: [
      'API Development',
      'Database Design',
      'Cloud Services',
      'Security Implementation',
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id='services' className="bg-white py-16 px-8">
      <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
      <div className="w-full mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            {service.icon}
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.subtitle}</p>
            <ul className="text-sm text-blue-600 list-disc list-inside space-y-1">
              {service.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

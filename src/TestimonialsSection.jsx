import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import sarahImg from './assets/sarah.png';
import michaelImg from './assets/michael.png';
import person3 from './assets/person3.jpg';
import person4 from './assets/person4.jpg';
import person5 from './assets/person5.jpg';

const testimonials = [
  {
    text: "Working with LetsDev was an exceptional experience...",
    name: "Sarah Johnson",
    title: "CEO, TechStart",
    image: sarahImg,
  },
  {
    text: "The technical expertise and problem-solving abilities...",
    name: "Michael Chen",
    title: "Product Manager, InnovateCo",
    image: michaelImg,
  },
  {
    text: "Great communication and delivery. Exceeded my expectations.",
    name: "Amanda Lee",
    title: "CTO, AppHive",
    image: person3,
  },
  {
    text: "Amazing design skills and development speed.",
    name: "James Park",
    title: "Founder, StartupX",
    image: person4,
  },
  {
    text: "LetsDev brought our idea to life with such clarity.",
    name: "Lina Gomez",
    title: "Operations Lead, Flowly",
    image: person5,
  },
];

const CustomArrow = ({ direction, onClick }) => {
  const isLeft = direction === 'left';
  const Icon = isLeft ? FaChevronLeft : FaChevronRight;

  return (
    <button
      onClick={onClick}
      className={`
        absolute top-1/2 transform -translate-y-1/2
        ${isLeft ? 'left-0' : 'right-0'}
        z-20 bg-pink-600 text-white
        w-9 h-9 md:w-10 md:h-10
        rounded-full flex items-center justify-center
        shadow-md hover:bg-pink-700 transition
      `}
      style={{ margin: '0 8px' }}
    >
      <Icon size={18} />
    </button>
  );
};


// Slider config
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <CustomArrow direction="right" />,
  prevArrow: <CustomArrow direction="left" />,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1 },
    },
  ],
};

const TestimonialsSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center relative">
        <h2 className="text-3xl font-bold mb-12">Client Testimonials</h2>
        <Slider {...sliderSettings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <div className="bg-gray-50 p-6 rounded-lg text-left shadow-sm h-full">
                <p className="italic text-gray-700 mb-4">{testimonial.text}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsSection;

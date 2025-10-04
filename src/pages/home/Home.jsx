import { Car, MoveRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import Carousel from '../../features/shared/carousel/Carousel';
import Service from '../service/Service';
const customItems = [
  {
    id: 1,
    image:
      'https://plus.unsplash.com/premium_photo-1682130157004-057c137d96d5?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Sports Car',
    description: 'Unleash the power within',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Electric Vehicle',
    description: 'Drive into the future',
  },
  {
    id: 3,
    image:
      'https://plus.unsplash.com/premium_photo-1664302419769-12d649150e11?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Family SUV',
    description: 'Comfort for the whole family',
  },
  {
    id: 4,
    image:
      'https://plus.unsplash.com/premium_photo-1664302336737-37fce6daca3c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Classic Beauty',
    description: 'Timeless elegance',
  },
];
const categories = [
  {
    code: 'GK',
    title: 'General Knowledge',
    question: '200',
    bgColor: 'rgb(219 39 119)',
  },
  {
    code: 'SK',
    title: 'Suraj Kushwaha',
    question: '350',
    bgColor: 'rgb(147 51 234)',
  },
  {
    code: 'CD',
    title: 'Component Design',
    question: '350',
    bgColor: 'rgb(234 179 8)',
  },
  {
    code: 'rc',
    title: 'React Components',
    question: '350',
    bgColor: 'rgb(34 197 94)',
  },
  {
    code: 'T',
    title: 'Templates',
    question: '350',
    bgColor: 'rgb(87 81 225)',
  },
  {
    code: 'AK',
    title: 'Anya Kushwaha',
    question: '350',
    bgColor: 'rgb(70 148 187)',
  },
  {
    code: 'SK',
    title: 'Suman Kushwaha',
    question: '350',
    bgColor: 'rgb(125 102 225)',
  },
  {
    code: 'AK',
    title: 'Ans Kushwaha',
    question: '350',
    bgColor: 'rgb(235 97 220)',
  },
];

const Home = () => {
  return (
    <>
      <Carousel
        items={customItems}
        autoPlay={true}
        interval={3000}
        showIndicators={false}
        showNavigation={true}
      />
      {/* Service Section */}
      <Service />
    </>
  );
};

export default Home;

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

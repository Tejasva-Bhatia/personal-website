import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1997-07-15T06:45:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 5,
    link:
      'https://www.google.com/maps/d/u/0/viewer?mid=1Ye2RwCuPAfQdugQGNwXuZI48JjpB51k&ll=20.5429490427026%2C166.30805450000003&z=3',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Winnipeg, MB ❄️',
  },
  {
    key: 'Favorite movie',
    label: 'Favorite movie',
    value: 'Interstellar 🎬',
  },
  {
    key: 'Favorite TV show',
    label: 'Favorite TV show',
    value: 'Breaking Bad 🧪',
  },
  {
    key: 'Favorite Author right now',
    label: 'Favorite Author right now',
    value: 'Robert Greene 📖',
  },
  {
    key: 'Go-to sport to play right now',
    label: 'Go-to sport to play right now',
    value: 'Badminton 🏸',
  },
  {
    key: 'Preferred coding language',
    label: 'Preferred coding language',
    value: 'C++ 💻',
  },
];

export default data;

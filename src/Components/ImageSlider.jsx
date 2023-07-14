import { useState, useEffect } from 'react';
import css from '../Styles/imageSlider.module.css';
import houses from '../Data/houseData';

const ImageSlider = ({ images, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeOption, setActiveOption] = useState('PG');
  const [filteredHouses, setFilteredHouses] = useState(houses);
  const [sortOption, setSortOption] = useState('PriceHighToLow'); // Default sorting set to 'Price (High to Low)'
  const [sortedHouses, setSortedHouses] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, images.length, interval]);

  useEffect(() => {
    filterHouses(activeOption);
  }, [activeOption]);

  useEffect(() => {
    sortHouses(sortOption);
  }, [sortOption]);

  const toggleActive = (option) => {
    setActiveOption(option);
    setSortOption('PriceHighToLow'); // Reset sort option to default when switching active options
    filterHouses(option);
  };

  const sortHouses = (option) => {
    let sorted = [...filteredHouses];

    if (option === 'PriceLowToHigh') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (option === 'PriceHighToLow') {
      sorted.sort((a, b) => b.price - a.price);
    } else if (option === 'SeaterLowToHigh') {
      sorted.sort((a, b) => a.seater - b.seater);
    } else if (option === 'SeaterHighToLow') {
      sorted.sort((a, b) => b.seater - a.seater);
    }

    setSortedHouses(sorted);
  };

  const filterHouses = (option) => {
    let filtered = [];

    if (option === 'PG') {
      filtered = houses.filter((house) => house.type === 'PG');
    } else if (option === 'Hotels') {
      filtered = houses.filter((house) => house.type === 'Hotels');
    } else {
      filtered = houses;
    }

    setFilteredHouses(filtered);
    sortHouses(sortOption);
  };

  return (
    <>
      <nav className={css.navBar}>
        <ul className={css.nav}>
          <li
            className={`${css.navItem} ${activeOption === 'PG' ? css.active : ''}`}
            onClick={() => toggleActive('PG')}
          >
            PG & Apartment
          </li>
          <li
            className={`${css.navItem} ${activeOption === 'Hotels' ? css.active : ''}`}
            onClick={() => toggleActive('Hotels')}
          >
            Hotels
          </li>
        </ul>
      </nav>
      <div className={css.slider}>
        <img className={css.slide} src={images[currentIndex]} alt="Slider" />
        <div className={css.overlay}></div>
      </div>
      <div className={css.sliderText}>
        <h1 className={css.sliderHeading}>{activeOption} & Apartment</h1>
        
        <div className={css.sortContainer}>
        <h3 className={css.sortOption}>
          Sort by:
          <select
            className={css.sortSelect}
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option  value="PriceLowToHigh">Price (Low to High)</option>
            <option  value="PriceHighToLow">Price (High to Low)</option>
            <option  value="SeaterLowToHigh">Seater (Low to High)</option>
            <option  value="SeaterHighToLow">Seater (High to Low)</option>
          </select>
        </h3>
        </div>
      </div>
      <div>
        {sortedHouses.map((house) => (
          <div className={css.houseContainerMain} key={house.id}>
            <div className={css.houseContainer}>
              <div className={css.houseImgContainer}>
                <img src={house.img} alt="house" className={css.houseImg} />
              </div>
              <div className={css.houseInfo}>
                <h2 className={css.houseName}>PG Name: {house.name}</h2>
                <h4 className={css.housePrice}>Price: {house.price}</h4>
                <h4 className={css.houseSeater}>Seater: {house.seater}</h4>
                <h4 className={css.houseLocation}>Location: {house.location}</h4>
                <h4 className={css.houseType}>Type: {house.type}</h4>
                <h4 className={css.houseDesc}>Facility: {house.description}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageSlider;

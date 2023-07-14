import css from '../Styles/housing.module.css';
import ImageSlider from './ImageSlider';

import img1 from '../assets/img-1.jpg';
import img2 from '../assets/img-2.jpg';
import img3 from '../assets/img-3.jpg';
import img4 from '../assets/img-4.jpg';
import img5 from '../assets/img-5.jpeg';

const Housing = () => {
  const images = [img1, img2, img3, img4, img5];
  const interval = 3000;

  return (
    <>
      <div className={css.mainContainer}>
        <div className={css.primary}>
        
          <div className={css.primaryContainer}>
            <ImageSlider images={images} interval={interval} />
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Housing;

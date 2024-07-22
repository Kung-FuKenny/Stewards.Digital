// src/Components/Doctors/Doctors.tsx
import { DoctorsData } from '@/Components/Shared/Consts';
import SectionWrapper from '../SectionWrapper';
import Partner from './Partner';
import Slider from 'react-slick';
import bannerAnimation from '@/assets/about.webm'; // Import your WebM animation file

const Doctors = () => {
  const settings = {
    infinite: true,
    speed: 1000, // Slower transition speed
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // Slower autoplay speed
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <SectionWrapper id="partners">
      <h3 className="text-4xl font-bold text-center mb-20">
        {DoctorsData.heading}
      </h3>
      <Slider {...settings} className="px-2 md:px-0">
        {DoctorsData.Doctors.map((doctor, index) => (
          <Partner key={index} doc={doctor} />
        ))}
      </Slider>
      <h4 className="text-3xl tracking-wider font-bold text-center my-10 md:mt-20">
        {DoctorsData.heading2}
      </h4>
      <div className="mb-5 m-auto text-center max-w-2xl text-xs sm:text-base md:text-lg">
        {DoctorsData.desc}
      </div>
      <div className="m-auto max-w-xl">
        <video
          src={bannerAnimation}
          width="600"
          height="600"
          autoPlay
          loop
          muted
          className="m-auto"
        />
      </div>
    </SectionWrapper>
  );
};

export default Doctors;

import Button from '@/Components/UI/Button';
import DescNums from './DescNums';
import SectionWrapper from '../SectionWrapper';
import animationVideo from '@/assets/hero.webm'; // Import your WebM animation file

const Home = () => {
  return (
    <SectionWrapper id="home">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 text-center md:text-left">
        <div className="tracking-wider md:tracking-normal max-w-xs lg:max-w-xl mx-auto md:mx-0">
          <h1 className="lg:text-7xl text-4xl font-bold">
            Digital Growth & Creative Solutions.
          </h1>
          <p className="text-lg md:text-base lg:text-xl my-10">
            We empower brands and provide businesses with tools & services to thrive online and offline.
          </p>
          <Button>Contact Now</Button>
        </div>
        <div className="max-w-xs md:max-w-md lg:max-w-2xl mx-auto video-container">
          <video
            src={animationVideo}
            className="w-full h-auto"
            autoPlay
            loop
            muted
          />
        </div>
      </div>
      <DescNums />
    </SectionWrapper>
  );
};

export default Home;

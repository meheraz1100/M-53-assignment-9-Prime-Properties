import Marquee from "react-fast-marquee";

const Banner = () => {
  return (
    <div>
      <h2 className="md:text-8xl text-4xl font-bold my-6">
        Find your next perfect place with ease...
      </h2>
      <h1 className="text-3xl">Featured in</h1>
      <Marquee className="text-3xl">
        <img src="https://www.react-fast-marquee.com/static/media/ibm.bcec6b9a.png" alt="" />
        <img className="mx-8" src="https://www.react-fast-marquee.com/static/media/princeton.5d0a5006.png" alt="" />
        <img src="https://www.react-fast-marquee.com/static/media/dell.09332c44.png" alt="" />
        <img src="https://www.react-fast-marquee.com/static/media/microsoft.4a9a93f0.png" alt="" />
      </Marquee>
      <p className="mb-5">
        <span className="font-bold text-xl">Prime Properties</span> will help you find your home fast, easy and comfortable. <br></br>
        Our expert support are always available.
      </p>
    </div>
  );
};

export default Banner;

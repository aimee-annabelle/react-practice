import Button from "./Button";

export default function HeroSection() {
  return (
    <div className="h-full w-full  bg-[url('https://react-landing-page-template-93ne.vercel.app/img/intro-bg.jpg')] bg-center bg-cover">
    <div className="flex flex-col text-white text-center items-center justify-center w-full h-full bg-black bg-opacity-20 bg-cover bg-center py-80">
      <div className="flex flex-col items-center gap-5 w-1/2">
        <h1 className=" font-Raleway font-bold text-7xl uppercase w-3/4">
          We are a Landing Page
        </h1>
        <p className="text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
          dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum.
        </p>
        <Button
          className="uppercase font-medium w-fit font-Raleway bg-gradient-to-r from-blue-500 to-indigo-600"
          text="learn more"
        />
      </div>
    </div>
    </div>
  );
}

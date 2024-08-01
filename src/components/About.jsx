export default function About() {
  return (
    <div className="px-60 py-20 gap-10 w-full flex justify-between">
      <div className="p-3 w-full">
        <img
          src="https://react-landing-page-template-93ne.vercel.app/img/about.jpg"
          alt="office"
          className="w-full h-full"
        />
      </div>
      <div className="flex w-full flex-col items-start justify-between p-3 font-Raleway">
        <h1 className="text-4xl font-extrabold uppercase">About us</h1>
        <p className="text-neutral-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
        <h3 className="capitalize font-semibold text-2xl">Why Choose Us?</h3>
        <ul className="grid grid-rows-4 grid-cols-2 gap-x-32 text-sm text-neutral-500">
          <li><i className="text-xs font-extrabold text-blue-500 fa-solid fa-check"></i>&ensp; Lorem ipsum dolor</li>
          <li><i className="text-xs font-extrabold text-blue-500 fa-solid fa-check"></i> &ensp;Tempor incididunt</li>
          <li><i className="text-xs font-extrabold text-blue-500 fa-solid fa-check"></i> &ensp;Lorem ipsum dolor</li>
          <li><i className="text-xs font-extrabold text-blue-500 fa-solid fa-check"></i>&ensp; Incididunt ut labore</li>
          <li><i className="text-xs font-extrabold text-blue-500 fa-solid fa-check"></i>&ensp; Aliquip ex ea commodo</li>
          <li><i className="text-xs font-extrabold text-blue-500 fa-solid fa-check"></i>&ensp; Lorem ipsum dolor</li>
          <li><i className="text-xs font-extrabold text-blue-500 fa-solid fa-check"></i>&ensp; Exercitation ullamco</li>
          <li><i className="text-xs font-extrabold text-blue-500 fa-solid fa-check"></i>&ensp; Lorem ipsum dolor</li>
        </ul>
      </div>
    </div>
  );
}

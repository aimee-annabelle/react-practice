import IconCard from "./IconCard";
export default function OurServices() {
  const cards = [
    {
      id: 1,
      title: "Lorem ipsum",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
      icon: <i className="fa-brands fa-wordpress"></i>,
    },
    {
      id: 2,
      title: "Consectetur adipiscing",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
      icon: <i className="fa-solid fa-cart-arrow-down"></i>,
    },
    {
      id: 3,
      title: "Lorem ipsum",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
      icon: <i className="fa-solid fa-cloud-arrow-down"></i>,
    },
    {
      id: 4,
      title: "Consectetur adipiscing",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
      icon: <i className="fa-solid fa-language"></i>,
    },
    {
      id: 5,
      title: "Lorem ipsum dolor",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
      icon: <i className="fa-solid fa-plane"></i>,
    },
    {
      id: 6,
      title: "Consectetur adipiscing",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
      icon: <i className="fa-solid fa-chart-pie"></i>,
    },
  ];
  return (
    <div className="flex flex-col items-center justify-between p-28 w-full gap-y-5 bg-[linear-gradient(to_right,rgb(99,114,255)_0%,rgb(92,169,251)_100%)] text-white text-center">
      <h1 className="uppercase font-Raleway text-3xl font-extrabold">
        Our Services
      </h1>
      <p className="text-lg mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus
        leonec.
      </p>
      <div className="grid grid-cols-3 grid-rows-2 justify-between gap-y-5 gap-x-20">
        {cards.map((card) => (
          <IconCard
            key={card.id}
            titleStyle="text-white"
            bodyStyle="text-white"
            icon={card.icon}
            title={card.title}
            body={card.body}
          />
        ))}
      </div>
    </div>
  );
}

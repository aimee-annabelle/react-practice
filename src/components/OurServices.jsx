import IconCard from "./IconCard";
export default function OurServices() {
  const cards = [
    {
      title: "Lorem ipsum",
      body: "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.",
      icon: <i className="fa-regular fa-comments"></i>,
    },
    {
      title: "Lorem ipsum",
      body: "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.",
      icon: <i className="fa-solid fa-bullhorn"></i>,
    },
    {
      title: "Lorem ipsum",
      body: "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.",
      icon: <i className="fa-solid fa-people-group"></i>,
    },
    {
      title: "Lorem ipsum",
      body: "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.",
      icon: <i className="fa-solid fa-wand-magic-sparkles"></i>,
    },
    {
      title: "Lorem ipsum",
      body: "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.",
      icon: <i className="fa-solid fa-people-group"></i>,
    },
    {
      title: "Lorem ipsum",
      body: "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.",
      icon: <i className="fa-solid fa-wand-magic-sparkles"></i>,
    },
  ];
  return (
    <div className="flex flex-col items-center justify-between p-28 h-screen w-full bg-[linear-gradient(to_right,rgb(99,114,255)_0%,rgb(92,169,251)_100%)] text-white text-center">
      <h1 className="uppercase font-Raleway text-3xl font-extrabold">
        Our Services
      </h1>
      <p className="text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus
        leonec.
      </p>
      <div className="grid grid-cols-3 grid-rows-2 justify-between gap-y-10 gap-x-20">
        {cards.map((card) => (
          <IconCard
            key=""
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

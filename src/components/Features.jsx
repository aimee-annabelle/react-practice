import IconCard from "./IconCard";

export default function Features() {
  const cards = [
    {
      id: 1,
      title: "Lorem ipsum",
      body: "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.",
      icon: <i className="fa-regular fa-comments"></i>,
    },
    {
      id: 2,
      title: "Lorem ipsum",
      body: "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.",
      icon: <i className="fa-solid fa-bullhorn"></i>,
    },
    {
      id: 3,
      title: "Lorem ipsum",
      body: "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.",
      icon: <i className="fa-solid fa-people-group"></i>,
    },
    {
      id: 4,
      title: "Lorem ipsum",
      body: "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.",
      icon: <i className="fa-solid fa-wand-magic-sparkles"></i>,
    },
  ];
  return (
    <div className="p-5 w-full bg-neutral-100">
      <h1 className="text-4xl font-extrabold font-Raleway text-center uppercase">
        Features
      </h1>
      <div className="flex gap-5 justify-between w-full px-40 mt-32">
        {cards.map((card) => (
          <IconCard
            key={card.id}
            icon={card.icon}
            title={card.title}
            body={card.body}
          />
        ))}
      </div>
    </div>
  );
}

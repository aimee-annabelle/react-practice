import Anchor from "./Anchor";
export default function Navbar() {
  const Links = [
    "Features",
    "About",
    "Services",
    "Gallery",
    "Testimonials",
    "Team",
    "Contact",
  ];
  return (
    <nav className="z-50 flex items-center justify-between bg-white shadow-[#00000026_0px_0px_10px_0px] text-neutral-500 sticky top-0 mt-0 mx-0 py-6 px-52">
      <div className="container mx-auto">
        <h1 className="uppercase font-bold text-2xl font-Raleway">
          React landing page
        </h1>
      </div>
      <div className="flex gap-20 justify-between w-full">
        {Links.map((link) => (
          <Anchor key={link} href={`#${link.toLowerCase().replace(/\s/g, "-")}`}>
            {link}
          </Anchor>
        ))}
      </div>
    </nav>
  );
}

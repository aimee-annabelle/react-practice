/* eslint-disable react/prop-types */
export default function IconCard(props) {
  return (
    <div className={`${props.className} w-72 flex flex-col justify-center items-center text-center gap-5`}>
      <div className="bg-[linear-gradient(to_right,rgb(99,114,255)_0%,rgb(92,169,251)_100%)] rounded-full w-28 h-28 flex items-center justify-center text-white text-center text-4xl">
        {props.icon}
      </div>
      <h3 className={`${props.titleStyle} text-zinc-800' font-semibold text-xl font-Raleway `}>
        {props.title}
      </h3>
      <p className={`${props.bodyStyle} text-base text-neutral-500`}>{props.body}</p>
    </div>
  );
}

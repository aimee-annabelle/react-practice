/* eslint-disable react/prop-types */
export default function Button(props) {

  return (
    <button
      className={`${props.className} text-white font-bold py-3 px-8 rounded-full`}
    >
      {props.text}
    </button>
  );
}

/* eslint-disable react/prop-types */
export default function Anchor(props) {
    return (
      <a
        href={props.href}
        className="text-neutral-500 uppercase hover:border-b-2"
      >
        {props.children}
      </a>
    );
  }
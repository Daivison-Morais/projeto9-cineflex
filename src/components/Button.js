export default function Button(props) {
  return (
    <>
      <button
        className="button"
        type={props.type}
        onKeyDown={props.onKeyDown}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </>
  );
}

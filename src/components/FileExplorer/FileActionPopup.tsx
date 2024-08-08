type Props = {
  fileName?: string;
  toggle: () => void;
};
const FileActionPopup = ({ fileName, toggle }: Props) => {
  const actions = ["Copy", "Delete", "Rename"];
  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>{fileName}</h2>
        <ul>
          {actions.map((action) => (
            <li onClick={() => console.log({ file: fileName, event: action })}>
              {action}
            </li>
          ))}
        </ul>

        <button onClick={toggle}>Close</button>
      </div>
    </div>
  );
};

export default FileActionPopup;

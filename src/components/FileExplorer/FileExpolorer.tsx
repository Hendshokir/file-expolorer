import { useState } from "react";
import File from "../../images/icons/File";
import Folder from "../../images/icons/Folder";
import "./FileExpolorer.scss";
type Props = {
  files: {
    type: string;
    name: string;
    data: any[];
  };
};

const FileExpolorer = ({ files }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (files.type === "file") {
    return (
      <div className="wrapper">
        <File />
        <h3 className="file-name">{files.name}</h3>
      </div>
    );
  }
  return (
    <div className="folder">
      <div
        className="folder-name-wrapper"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {" "}
        <Folder />
        <h2 className="folder-name">{files.name}</h2>
      </div>
      {isExpanded && files.data?.map((item) => <FileExpolorer files={item} />)}
    </div>
  );
};

export default FileExpolorer;

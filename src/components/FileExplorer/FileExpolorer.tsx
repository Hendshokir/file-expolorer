import { useState } from "react";
import File from "../../images/icons/File";
import Folder from "../../images/icons/Folder";
import FileActionPopup from "./FileActionPopup";
import "./FileExpolorer.scss";

type FileData = {
  type: string;
  meta: string;
  name: string;
};
type Props = {
  files: {
    type: string;
    name: string;
    data: FileData[];
  };
};

const FileExpolorer = ({ files }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isShowFileActionPopup, setIsShowFileActionPopup] = useState(false);
  const [activeFileName, setActiveFileName] = useState<string>("");
  const handleFile = (fileName: string) => {
    console.log(fileName);
    setActiveFileName(fileName);
    setIsShowFileActionPopup(true);
  };
  return (
    <>
      {files.type === "folder" ? (
        <>
          <div className="folder">
            <div
              className="folder-name-wrapper"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <Folder />
              <h2 className="folder-name">{files.name}</h2>
            </div>
            {isExpanded &&
              files.data?.map((item) => <FileExpolorer files={item} />)}
          </div>
        </>
      ) : (
        <div className="wrapper">
          <File />
          <h2
            onContextMenu={() => handleFile(files?.name)}
            className="file-name"
          >
            {" "}
            {files.name}
          </h2>

          {isShowFileActionPopup && (
            <>
              <FileActionPopup
                fileName={activeFileName}
                toggle={() => setIsShowFileActionPopup(!isShowFileActionPopup)}
              />
            </>
          )}
        </div>
      )}
    </>
  );
};

export default FileExpolorer;

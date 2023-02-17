import { useRef } from "react";

interface IFilePicker {
  fileCallback: any;
}

const FilePicker = ({ fileCallback }: IFilePicker): JSX.Element => {
  const myfileRef = useRef<HTMLInputElement>(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const mytarget: HTMLInputElement = e.target as HTMLInputElement;
    if (mytarget.files !== null) {
      fileCallback(mytarget.files[0]);
    }
  };
  return (
    <div className="mb-3">
      <label htmlFor="formFile" className="form-label">
        Default file input example
      </label>
      <input
        className="form-control"
        type="file"
        id="formFile"
        ref={myfileRef}
        onChange={handleFileChange}
      />
    </div>
  );
};
export { FilePicker };

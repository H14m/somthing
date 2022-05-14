import * as React from "react";
import { useState, useEffect } from "react";
import "../style/home.css"

export interface File {
  name: string;
  lastModified: number;
  size: number;
  type: string;
}

export interface UploadFileProps {
  onFilesSelected?: (files: File[]) => void;
}

export const UploadFile = (props: UploadFileProps) => {
  const [selectedFiles, setFiles] = useState<any | null>(null);

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    const files = (e.target as HTMLInputElement).files || [];
    setFiles(Array.from(files));

  };

  useEffect(() => {
    if (!props.onFilesSelected) return;
    props.onFilesSelected(selectedFiles);
  }, [selectedFiles, props]);

  return (
    <label className="file">
    <input type="file" id="file" aria-label="File browser example"    accept="image/*,.pdf,.doc,.docx,.txt"
      onChange={handleOnChange} />

  </label>

  );
};

class home extends React.Component {
    render() {
        return( 
<div className="model">
<form className='modal-content'>
<div className="container">           

 <UploadFile />
            <input type="submit" name="sub"/>
         </div>    </form></div>
            );
        };
      
       
}




export default home;

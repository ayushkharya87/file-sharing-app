import './App.css';
import { useRef, useState, useEffect } from 'react';
import { uploadFile } from './services/api';

function App() {

  const [file, setFile] = useState("");
  const [result, setResult] = useState('');

  const fileInput = useRef();

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await uploadFile(data);
        await uploadFile(data);
      }
    }
    getImage();
  }, [file])

  const onUpload = () => {
    fileInput.current.click();
  }
  
  return (
    <>
      <div className='container'>
        <h1>File Sharing</h1>
        <p><b>Upload & Share the download link</b></p>

        <button onClick={() => onUpload()}><i class="fa-solid fa-cloud-arrow-up"></i></button>
        <input type="file" ref={fileInput} style={{display: "none"}} 
        onChange={(e) => setFile(e.target.files[0])}/>
      </div>
    </>
  )
}

export default App

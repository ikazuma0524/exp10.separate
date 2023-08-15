import React, { useState } from 'react';
import axios from 'axios';

const UploadComponent = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [material, setMaterial] = useState(null);
  const [length, setLength] = useState(null);
  const [area, setArea] = useState(null);
  const [load0, setLoad0] = useState(null);
  const[distortion0, setDistortion0] = useState(null);
  const[distortion_gauge_collection, setDistortion_gauge_collection] = useState(null);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleMaterialChange = (e) => {
    setMaterial(e.target.value);
  };
  const handleLengthChange = (e) => {
    setLength(e.target.value);
  };
  const handleAreaChange = (e) => {
    setArea(e.target.value);
  };
  const handleLoad0Change = (e) => {
    setLoad0(e.target.value); 
  };
  const handleDistortion0Change = (e) => {
    setDistortion0(e.target.value);
  };

  const handleDistortion_gauge_collectionChange = (e) => {
    setDistortion_gauge_collection(e.target.value);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('material', material);
    formData.append('length', length);
    formData.append('area', area);
    formData.append('load0', load0);
    formData.append('distortion0', distortion0);
    formData.append('distortiongaugecollection', distortion_gauge_collection);
    
    
    try {
      const response = await axios.post('http://127.0.0.1:5000/upload', formData);
      setResult(response.data.result);
    } catch (error) {
      console.error('An error occurred while uploading the file:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleUpload}>
    

      <input type="file" onChange={handleFileChange} />
      <input type="text" onChange={handleMaterialChange} />
      <input type="text" onChange={handleLengthChange} />
      <input type="text" onChange={handleAreaChange} />
      <input type="text" onChange={handleLoad0Change} />
      <input type="text" onChange={handleDistortion0Change} />
      <input type="text" onChange={handleDistortion_gauge_collectionChange} />
    

      {/* <input type="submit" value="upload"></input> */}
      <button type="submit">Upload</button>

      result ? <div>Result: {result}</div>:<></>
    </form>
    </div>
  );
};
export default UploadComponent;

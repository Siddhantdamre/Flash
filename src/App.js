import React, { useState } from 'react';
import Header from './Header';
import MainSection from './MainSection';
import Section from './Section';

const App = () => {
  const [files, setFiles] = useState([]);

  const handleFileUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    setFiles(uploadedFiles);
  };

  const handleSignUp = () => {
    alert('Sign up functionality will be implemented here!');
  };

  return (
    <div>
      <Header />
      <MainSection onSignUp={handleSignUp} onFileUpload={handleFileUpload} />
      <Section files={files} />
    </div>
  );
};

export default App;
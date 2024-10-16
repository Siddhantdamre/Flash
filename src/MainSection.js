import * as pdfjsLib from 'pdfjs-dist';
import React, { useRef, useState } from 'react';
import './MainSection.css';
import { FaUpload } from 'react-icons/fa'; 
import Slider from 'react-slick';
const Flashcard = ({ question, answer }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="front">
        <p>{question}</p>
      </div>
      <div className="back">
        <p>{answer}</p>
      </div>
    </div>
  );
};
const FlashcardSlideshow = ({ flashcards }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {flashcards.map((flashcard) => (
        <div key={flashcard.id}>
          <Flashcard question={flashcard.question} answer={flashcard.answer} />
        </div>
      ))}
    </Slider>
  );
};
const MainSection = ({ onSignUp }) => {
  const fileInputRef = useRef(null);
  const [flashcards, setFlashcards] = useState([]);
  const handleButtonClick = () => {
    fileInputRef.current.click(); 
  };
  const generateFlashcards = (text) => {
    const sentences = text.split('.').filter(sentence => sentence.trim().length > 0);
    const flashcards = sentences.map((sentence, index) => ({
      id: index,
      question: sentence.trim(),
      answer: 'This is a generated answer.', 
    }));
    setFlashcards(flashcards);
  };
  const onFileUpload = async (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const file = files[0];
      const fileReader = new FileReader();

      fileReader.onload = async function (e) {
        const typedArray = new Uint8Array(e.target.result);
        const loadingTask = pdfjsLib.getDocument(typedArray);
        const pdf = await loadingTask.promise;
        let text = '';
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const content = await page.getTextContent(); 
          content.items.forEach((item) => {
            text += item.str + ' '; 
          });
        }
        generateFlashcards(text);
      };

      fileReader.readAsArrayBuffer(file);
    }
  };

  return (
    <main className="text-center py-20">
      <h1 className="text-6xl font-bold mb-4"> <br />  <br /> AI Flashcard Generator </h1>
      <p className="text-lg mb-8">
        Upload PDFs, presentations, notes, images, and more. <br />
        Limbiks generates a comprehensive deck of flashcards in <br />
        seconds. Master your flashcards with our powerful study <br />
        tools.
      </p>
      <div className="relative inline-block">
        <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-8"> Preview your generated flashcards </h2>
          <input 
            type="file" 
            multiple 
            onChange={onFileUpload} 
            ref={fileInputRef} 
            className="hidden" 
          />
          <button onClick={handleButtonClick} className="upload-button">
            <FaUpload className="mr-2" /> 
            Click here to upload a file
          </button>
        </div>
      </div>
      {flashcards.length > 0 && <FlashcardSlideshow flashcards={flashcards} />}
    </main>
  );
};

export default MainSection;
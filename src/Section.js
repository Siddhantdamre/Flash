import React from 'react';

const Section = ({ files }) => {
  return (
    <section className="bg-white text-gray-900 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8"> Stop wasting time making flashcards. </h2>
        <div className="flex justify-center items-center space-x-8">
          <div className="w-1/3">
            <h3 className="text-2xl font-bold mb-4"> Upload a wide variety of files </h3>
            <p className="text-lg"> Limbiks can quickly generate flashcards from PDFs, PowerPoint presentations, notes, images, and more. </p>
          </div>
          <img 
            alt="Illustration of file upload" 
            className="w-1/3" 
            height="200" 
            src="https://storage.googleapis.com/a1aa/image/UL6UoHiOCf0uSykk67e5mpeNjtChI60CHaLZiKaqjWKEgpOnA.jpg" 
            width="300"
          />
        </div>
      </div>
    </section>
  );
};

export default Section;
import React from 'react';

const Resume = () => {
  
  return (
    <div>
      <embed src={process.env.PUBLIC_URL + "/resume.pdf"} style={{position: "absolute", left: 0, top: 0, width: "100%", height:"100%"}} type="application/pdf" />
    </div>
  );
};

export default Resume;
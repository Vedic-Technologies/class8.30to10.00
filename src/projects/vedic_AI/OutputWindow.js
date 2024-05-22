import React from 'react';

const OutputWindow = ({answer}) => {
  const renderContent = (text) => {
    const lines = text.split('\n');
    return lines.map((line, index) => {
      if (line.startsWith('```')) {
        const code = ''
        return (
          <div key={index} className="bg-red-300 ">
           {code} 
          </div>
        );
      } else if (line.startsWith('*') && !line.startsWith('**')) {
        const line1 = line.replace(/\*/g, '');
        return (
          <div key={index} className="shadow-md p-2 my-2 bg-green-100 rounded-lg">
            {line1}
          </div>
        );
      } else if (line.startsWith('**' || '***') && line.endsWith('**' ||'***')) {
        const boldText = line.replace(/\*\*/g, '');
        return (
          <div key={index} className="font-bold bg-blue-200 text-black rounded-xl p-2 my-5 w-fit min-w-60">
            {boldText}
          </div>
        );
      } else {
        return <div key={index} className='text-lg text-left font-semibold '>{line}</div>;
      }
    });
  };

  return (
    <div className="p-20 ">
      {renderContent(answer)}
    </div>
  );
};

export default OutputWindow;
 
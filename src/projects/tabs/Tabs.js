import React, { useState } from 'react';

const Tabs = () => {
const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: 'Tab 1',
      content: 'This is the content for Tab 1',
    },
    {
      title: 'Tab 2',
      content: 'This is the content for Tab 2',
    },
    {
      title: 'Tab 3',
      content: 'This is the content for Tab 3',
    },
  ];
 const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className='h-screen  center'>
         <div className="flex flex-col">
              <div className="flex border-b border-gray-200">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => handleTabClick(index)}
                    className={`px-4 py-2 font-semibold text-gray-600 ${
                      activeTab === index
                        ? 'border-b-2 border-blue-500 text-blue-500'
                        : ''
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
              <div className="p-4">{tabs[activeTab].content}</div>
            </div>
 </div>
  )
}

export default Tabs
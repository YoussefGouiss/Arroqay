import React, { useState } from 'react';

const Test = () => {
  const [isMenuVisible, setMenuVisible] = useState(true);

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  return (
    <div className="p-4">
      <button
        onClick={toggleMenu}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {isMenuVisible ? 'Hide Menu' : 'Show Menu'}
      </button>

      {isMenuVisible && (
        <div className="mt-4 p-4 bg-gray-100 border rounded">
          <ul>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Test;

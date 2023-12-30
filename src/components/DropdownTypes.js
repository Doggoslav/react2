import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import "./DropdownTypes.css";

const IconWithName = ({ name }) => (
  <div className="category-container">
    <img src={`/icons/${name.toLowerCase()}.png`} alt="Icon" className="category-icon" />
    {name}
  </div>
);

const DropdownTypes = ({ title, subcategories, color }) => {
  const handleItemClick = (subcategory) => {
    const categoryUrl = `/${title.toLowerCase()}/${subcategory.toLowerCase()}`;
    window.location.href = categoryUrl;
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id={`dropdown-${title.toLowerCase()}`} style={{ backgroundColor: color }}>
        {title}
      </Dropdown.Toggle>

      <Dropdown.Menu className="custom-dropdown">
        {subcategories.map((subcategory, index) => (
          <Dropdown.Item key={index} onClick={() => handleItemClick(subcategory)}>
            <IconWithName name={subcategory} />
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownTypes;
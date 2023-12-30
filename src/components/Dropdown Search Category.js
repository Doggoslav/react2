import React from 'react';
import { Dropdown } from 'react-bootstrap';
import "./Dropdown Search Category.css";

const DropdownSearchCategory = () => {
  const handleItemClick = (action) => {

    window.location.href = `#/searchaction-${action}`;
  };

  return (
    <Dropdown>
      <Dropdown.Toggle className="custom-dropdown-toggle" id="dropdown-basic">
        Search by type
      </Dropdown.Toggle>

      <Dropdown.Menu className="custom-dropdown-menu">
        <Dropdown.Item onClick={() => handleItemClick(1)}>Newest</Dropdown.Item>
        <Dropdown.Item onClick={() => handleItemClick(2)}>Oldest</Dropdown.Item>
        <Dropdown.Item onClick={() => handleItemClick(3)}>Most viewed</Dropdown.Item>
        <Dropdown.Item onClick={() => handleItemClick(4)}>Best</Dropdown.Item>
        <Dropdown.Item onClick={() => handleItemClick(5)}>Random</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownSearchCategory;
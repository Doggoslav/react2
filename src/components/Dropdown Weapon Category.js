import React from 'react';
import { Dropdown } from 'react-bootstrap';
import "./Dropdown Weapon Category.css"

const DropdownWeaponCategory = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle className="custom-dropdown-toggle" id="dropdown-basic">
        Weapon types
      </Dropdown.Toggle>

      <Dropdown.Menu className="custom-dropdown-menu">
        <Dropdown.Item href="#/weaponaction-1">Pistols</Dropdown.Item>
        <Dropdown.Item href="#/weaponaction-2">Submachine guns</Dropdown.Item>
        <Dropdown.Item href="#/weaponaction-3">Assault Rifles</Dropdown.Item>
        <Dropdown.Item href="#/weaponaction-4">Shotguns</Dropdown.Item>
        <Dropdown.Item href="#/weaponaction-5">LMGs</Dropdown.Item>
        <Dropdown.Item href="#/weaponaction-6">Knives</Dropdown.Item>
        <Dropdown.Item href="#/weaponaction-7">Gloves</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownWeaponCategory;
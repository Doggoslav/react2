import React from 'react';
import DropdownTypes from './DropdownTypes';
import "./HeaderMenu.css"

const HeaderMenu = () => {
  const categories = [
    { title: 'Pistols', subcategories: ['USP-S', 'Glock-18', 'P2000', 'P250', 'Dual Berettas', 'Five-SeveN', 'CZ-75-Auto', 'Tec-9', 'Revolver R8', 'Desert Eagle'] },
    { title: 'Rifles', subcategories: ['AK-47', 'M4A4', 'M4A1-S', 'AWP', 'FAMAS', 'Galil AR', "AUG", 'SG 553', 'SSG 08', 'SCAR-20', 'G3SG1' ] },
    { title: 'Heavy', subcategories: ['Nova', 'XM1014', 'Sawed Off', 'MAG-7', 'Negev', 'M249'] },
    { title: 'SMGs', subcategories: ['MAC-10', 'MP5-SD', 'MP7', 'MP9', 'UMP-45', 'P90', 'PP-Bizon'] },
    { title: 'Knives', subcategories: ['Bayonet', 'Bowie', 'Butterfly', 'Classic', 'Falchion', 'Flip', 'Gut', 'Huntsman', 'Karambit', 'M9 Bayonet', 'Navaja', 'Nomad', 'Paracord', 'Shadow Daggers', 'Skeleton',  'Stiletto', 'Survival', 'Talon', 'Ursus'] },
    { title: 'Gloves', subcategories: ['Sport Gloves', 'Broken Fang Gloves', 'Specialist Gloves', 'Driver Gloves', 'Moto Gloves', 'Hand Wraps',  'Bloodhound Gloves', 'Hydra Gloves'] },
  ];

  return (
    <div className="header-menu">
      {categories.map((category, index) => (
        <DropdownTypes key={index} title={category.title} subcategories={category.subcategories} color="#07058b" />
      ))}
    </div>
  );
};

export default HeaderMenu;
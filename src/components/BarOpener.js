import React, { useState } from 'react';
import './BarOpener.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const BarOpener = () => {
  const [isBarOpen, setBarOpen] = useState(false);

  const toggleBar = () => {
    setBarOpen(!isBarOpen);
  };

  return (
    <div className={`bar-opener ${isBarOpen ? 'open' : ''}`}>
      <div className="bar-icon" onClick={toggleBar}>
        <h2>Welcome to CS2Pattern.com !</h2>
        <ExpandMoreIcon className="expand-icon" />
      </div>
      {isBarOpen && (
        <div className="bar-content">
          <p>CS2Pattern is a page that deals with CS2 skins that have special <br/> patterns that are somehow significantly different from <br/> others and because of this  they usually look better and sometimes <br/> they are even several times more expensive.</p>
        </div>
      )}
    </div>
  );
};

export default BarOpener;

import React, { useState } from 'react';
import './_Sidebar.styles.scss'

const Sidebar = () => {

  const [isExpanded, setIsExpanded] = useState ( false )

  const ToggleNavBar = () => {
    isExpanded ? ShrinkNavBar () : ExpandNavBar ()
  }

  const ExpandNavBar = () => {
    document.getElementById("mySidenav").style.width = "135px";
    setIsExpanded (true)
  };

  const ShrinkNavBar = () => {
    document.getElementById("mySidenav").style.width = "0";
    setIsExpanded (false)
  };

  return (
    <div>
      <div id="mySidenav" className="sidenav">
        {/* <a href="javascript:void(0)" className="Shrink-btn" onClick={ShrinkNavBar}>&times;</a> */}
        <a href="#">About</a>
      </div>
      {/* 
      <span style={{ fontSize: '30px', cursor: 'pointer' }} onClick={ExpandNavBar}> &#9776; </span> 
      */}
      <span style={{ fontSize: '30px', cursor: 'pointer' }} onClick={ToggleNavBar}> &#9776; </span>
    </div>
  );
};

export default Sidebar;
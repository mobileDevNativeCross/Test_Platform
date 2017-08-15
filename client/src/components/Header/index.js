import React from 'react';

import Link from '../Link';

function Header() {
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">Test</Link>
      </div>
    </nav>
  );
}

export default Header;

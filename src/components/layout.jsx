import { useState } from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    /* Add 'layout-wrapper' here */
    <div className={`layout-wrapper ${menuOpen ? "menu-open" : ""}`}>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {/* Add 'main-content' class here */}
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout
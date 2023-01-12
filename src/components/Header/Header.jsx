import "./Header.css";
import { useLocation } from 'react-router-dom';

const Header = () => {
  const {pathname} = useLocation();

  return (
    <div className="header-container text-center fw-bold bg-primary-subtle d-flex align-items-center justify-content-center">
      {pathname === '/' && <h2>Welcome! Please fill our form to continue the process.</h2>}
      {pathname === '/users' && <h2>These are the users who already registered!</h2>}
    </div>
  );
};

export default Header;

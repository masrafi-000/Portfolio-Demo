import { useState } from "react";
import logo from "../assets/logo.svg";
import { FaBarsStaggered } from "react-icons/fa6";

const menuItems = ["Home", "Pages", "Services", "Blog", "Contact"];

const Navbar = () => {
  const [activeItem, setAvtiveItem] = useState(0);

  const handleActive = (index) => {
    setAvtiveItem(index);
  };

  const MenuItem = ({ menu, index }) => {
    return (
      <li>
        <a
          onClick={() => handleActive(index)}
          className={`leading-[26px] ${
            index === activeItem ? "text-secondary" : "text-primary_text"
          }`}
          href="javascript:void(0)"
        >
          {menu}
        </a>
      </li>
    );
  };
  return (
    <nav className="py-[18px] bg-slate-300">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <img src={logo} alt="Logo" />
          </div>
          <div>
            <ul className="flex items-center gap-6 text-base uppercase ">
              {menuItems.map((item, index) => {
                return <MenuItem menu={item} key={index} index={index} />;
              })}
            </ul>
          </div>
          <div>
            <button className="btn hidden md:flex">Download CV</button>
            <button className="md:hidden">
              <FaBarsStaggered />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

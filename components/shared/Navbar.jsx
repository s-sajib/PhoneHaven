import Image from "next/image";
import logo from "../../assets/images/logo_dark.svg"
const Navbar = () => {
  return <nav className="mx-32 my-8">
  <div className="flex justify-between align-middle">
    <Image src={logo} alt="logo" width={150} height={93} />
  <ul className="flex justify-evenly space-x-24">
    <li>
      Home
    </li>
    <li>
      About
    </li>
    <li>
      Account
    </li>
  </ul>
  </div>
  </nav>;
};

export default Navbar;

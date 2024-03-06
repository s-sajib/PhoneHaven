import Image from "next/image";
import logo from "../../assets/images/logo_dark.svg"
import Link from "next/link";
const Navbar = () => {
  const navbarItems = [
    {
    label: "Home",
    link:"/"
  },
    {
    label: "About",
    link:"/about"
  },
    {
    label: "Account",
    link:"/account"
  },
]
  return <nav className="mx-32 my-8">
  <div className="flex justify-between align-middle">
    <Link href="/"><Image src={logo} alt="logo" width={200} height={150} /></Link>
  <ul className="flex justify-evenly space-x-12 text-[#25C7FA]">
    {navbarItems?.map(menuItem => <li key={menuItem.link}><Link href={menuItem.link}>{menuItem.label}</Link></li>)}
  </ul>
  </div>
  </nav>;
};

export default Navbar;


const Footer = () => {
  const year = new Date().getFullYear();
  return <footer className="border-t-2  border-t-[#09BEF6] bg-[#1F2A37]">
  <div className="mx-32 my-2 flex justify-between align-middle">
    <div>
      ©{year} PhoneHaven | All rights Reserved
    </div>
  <ul className="flex justify-evenly space-x-8">
    <li>
      Privacy Policy
    </li>
    <li>
      Who we are
    </li>
    <li>
      Github
    </li>
    <li>
      Contact Us
    </li>
  </ul>
  </div>
  </footer>;
};

export default Footer;

import NavLinks from './NavLinks';

const Sidebar = () => {
  return (
    <nav className="hidden lg:flex w-20 border-r border-gray-200 py-10 px-4">
      <NavLinks />
    </nav>
  );
};

export default Sidebar;

const Header = ({ title, subtitle }) => (
  <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 px-6">
    <div className="w-full mx-auto">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      {subtitle && <p className="text-blue-100 text-lg">{subtitle}</p>}
    </div>
  </header>
);
export default Header;

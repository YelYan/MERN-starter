import { Navbar } from "@/components/ui/navbar";

const Header = () => {
  return (
    <header className="sticky top-0 shadow-xs w-full bg-white dark:bg-card">
      <div className="container">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;

import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import NavLinks from '../NavLinks/NavLinks';
import './Sidebar.css';

export default function Sidebar({ active }) {
  return (
    <aside className="sidebar">
      <div>
        <LanguageSwitcher />
        <DarkModeToggle />
        <NavLinks active={active} />
      </div>
    </aside>
  );
}

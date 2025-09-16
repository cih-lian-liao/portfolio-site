import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import NavLinks from '../NavLinks/NavLinks';
import './Sidebar.css';

export default function Sidebar({ active }) {
  return (
    <aside className="sidebar">
      <NavLinks active={active} />
      <div className="sidebar-controls">
        <LanguageSwitcher />
        <DarkModeToggle />
      </div>
    </aside>
  );
}

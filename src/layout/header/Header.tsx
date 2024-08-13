import React from 'react';
import logo from '../../assets/logo/madjs.png';
import { useTheme } from '../../hook/theme';
import LanguageDropdown from '../../components/lenguageDropdown/LenguageDropdown';
import ThemeController from '../../components/themeController/ThemeController';
import NavigationMenu from '../../components/navigation/navigationMenu/NavigationMenu';

const Header: React.FC = () => {
  const { isDarkTheme } = useTheme();

  return (
    <header className={`flex items-center justify-between px-8 h-16 w-full ${isDarkTheme ? 'bg-dark' : 'bg-light'}`}>
      <div className="flex items-center gap-4">
        <img src={logo} alt="logo" className="h-14" />
        <h1 className={`${isDarkTheme ? 'text-white' : 'text-black'}`}>Mad JS</h1>
      </div>
      <div className="flex items-center gap-4">
        <NavigationMenu />
        <LanguageDropdown />
        <ThemeController />
      </div>
    </header>
  );
};

export default Header;

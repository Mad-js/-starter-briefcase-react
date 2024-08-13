import React from 'react';
import NavItem from '../navItem/NavItem';
import { useTheme } from '../../../hook/theme';
import { useLanguage } from '../../../hook/lenguage';


const NavigationMenu: React.FC = () => {
    const { isDarkTheme } = useTheme();
    const { translations } = useLanguage();
    
    return (
      <nav className={`flex items-center gap-4 ${isDarkTheme ? 'text-white' : 'text-black'} uppercase`}>
        <NavItem label={translations['header.Start']} />
        <NavItem label={translations['header.Who_are_we']} />
        <NavItem label={translations['header.Services']} />
        <NavItem label={translations['header.Products']} />
        <NavItem label={translations['header.Contact_us']} />
      </nav>
    );
  };

  export default NavigationMenu;
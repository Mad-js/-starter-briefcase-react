import React from 'react';

const NavItem: React.FC<{ label: string }> = ({ label }) => {
    return (
      <h1 className="cursor-pointer hover:text-primary transition-colors">{label}</h1>
    );
  };

  export default NavItem;
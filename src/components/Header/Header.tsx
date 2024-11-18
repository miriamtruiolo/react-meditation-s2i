import React from 'react';

interface HeaderProps {
  header?: 'defaultHeader' | 'timerHeader'; // Tipo del prop `header`
  children?: React.ReactNode; // Per eventuali contenuti figli
}

const Header: React.FC<HeaderProps> = ({ header = 'defaultHeader', children }) => {
  // Stili dinamici per i due header
  const styles: { [key in 'defaultHeader' | 'timerHeader']: string } = {
    defaultHeader: 'min-h-[calc(90vh-66px)] bg-primary bg-cover bg-center flex items-center justify-center pt-12',
    timerHeader: 'min-h-[45vh] bg-primary text-white flex items-center justify-center',
  };

  return (
    <header className={styles[header]}>
      {children}
    </header>
  );
};

export default Header;

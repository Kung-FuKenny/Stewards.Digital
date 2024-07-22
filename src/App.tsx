// src/App.tsx
import React from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import FloatingAnimation from './Components/Header/FloatingAnimation';

const App: React.FC = () => {
  return (
    <div className="relative text-[#061B46] app min-w-[280px] min-h-screen bg-background overflow-hidden">
      <Header />
      <Main />
      <Footer />
      <FloatingAnimation /> {/* Use the new component here */}
    </div>
  );
};

export default App;

import React, { useEffect, useState } from 'react';
import HeaderDetailScrolled from '../../components/UI/organisms/organisms-header/HeaderDetailScrolled';

const HeaderDetailScrolledContainer = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToHandler = (Ycoord) => {
    window.scrollTo({ top: Ycoord, behavior: 'smooth' }); // 전달받은 y 좌표로 스크롤 이동
  };

  useEffect(() => {
    const showButtonHandler = () => {
      if (window.scrollY >= 1127) {
        setShowButton(true);
        return;
      }
      setShowButton(false);
    };
    window.addEventListener('scroll', showButtonHandler);

    return () => {
      window.removeEventListener('scroll', showButtonHandler);
    };
  }, []);

  return (
    <HeaderDetailScrolled
      showButton={showButton}
      scrollToHandler={scrollToHandler}
    />
  );
};

export default HeaderDetailScrolledContainer;

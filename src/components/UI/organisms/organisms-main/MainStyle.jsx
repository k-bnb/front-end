import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import RoomsLink from '../../molecules/molecules-main/RoomsLink';

const MainComponentPc = styled.main`
  /* width: 100%; */

  padding: 266px 80px 80px;

  background-image: url(./imgs/bg.jpg);
  background-size: cover;
  background-position: bottom 0% right 100%;
  background-repeat: no-repeat;
  .RoomLink {
    display: flex;
    flex-direction: column;

    button {
      span {
        font-size: 1.3rem;
        line-height: 3.4rem;
        letter-spacing: 1.6px;
        font-weight: 800;
      }
      width: 15rem;
      border-radius: 10px;
      /* width: 100px; */
      padding: 5px 0px;
      margin-top: 20px;
    }
    margin-bottom: 7%;
  }
`;

const MainComponentTablet = styled.main`
  /* width: 100%; */

  padding: 200px 20px 80px;

  background-image: url(./imgs/bg.jpg);
  background-size: cover;
  background-position: bottom 15% left 100%;
  background-repeat: no-repeat;
  .RoomLink {
    /* width: 400px; */
    display: flex;
    flex-direction: column;

    span {
      /* font-size: 3rem; */
    }

    button {
      span {
        font-size: 1.1rem;
        line-height: 3.4rem;
        letter-spacing: 1.6px;
        font-weight: 800;
      }
      width: 15rem;
      border-radius: 5px;
      /* width: 100px; */
      padding: 5px 0px;
      margin-top: 20px;
    }
    margin-bottom: 7%;
  }
`;

const MainComponentMobile = styled.main`
  /* width: 100%; */

  padding: 180px 20px 200px 30px;

  background-image: url(./imgs/bg.jpg);
  background-size: cover;
  background-position: bottom 15% left 100%;
  background-repeat: no-repeat;
  min-height: 600px;
  .RoomLink {
    display: flex;
    flex-direction: row;
    flex-flow: wrap;

    display: flex;
    flex-direction: column;
    span {
      font-size: 3rem;
      line-height: 3.4rem;
      letter-spacing: 1.6px;
      font-weight: 800;
    }

    button {
      width: 15rem;
      span {
        font-size: 1.3rem;
        line-height: 2;
        font-weight: 700;
      }
      border-radius: 5px;
      /* width: 100px; */
      padding: 5px 0px;
      margin-top: 20px;
    }
  }
`;

const MainStyle = () => {
  const isPc = useMediaQuery({
    query: '(min-width: 900px)',
  });
  const isTablet = useMediaQuery({
    query: `(min-width: 800px)and (max-width: 900px)`,
  });
  const isMobile = useMediaQuery({
    query: `(max-width: 800px)`,
  });

  return (
    <>
      {isPc && (
        <MainComponentPc className="main">
          <RoomsLink />
        </MainComponentPc>
      )}
      {isTablet && (
        <MainComponentTablet className="main">
          <RoomsLink />
        </MainComponentTablet>
      )}
      {isMobile && (
        <MainComponentMobile className="main">
          <RoomsLink />
        </MainComponentMobile>
      )}
    </>
  );
};

export default MainStyle;

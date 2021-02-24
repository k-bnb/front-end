import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import PageLoading from '../../UI/molecules/molecules-personalInfo/PageLoading';
import PersonalInfoArticle from '../../UI/organisms/organisms-personal/PersonalInfoArticle';
import PersonalInfoHead from '../../UI/organisms/organisms-personal/PersonalInfoHead';
import PersonalInfoUl from '../../UI/organisms/organisms-personal/PersonalInfoUl';
import ReserveConfirmheader from '../../UI/organisms/organisms-reserveconfirm/ReserveConfirmheader';

const PersonalTemplateStyle = styled.div`
  /* width: 70vw; */
  max-width: 1000px;
  margin: 50px auto;
  padding-top: 80px;
  div {
  }
  .main-group {
    display: flex;
    margin-top: 30px;
    flex-wrap: wrap;
  }
`;

const PcDiv = styled.div`
  height: 100%;
  div {
    max-width: 300px;
  }
`;
const TabletDiv = styled.div`
  div {
  }
`;
const PersonalTemplate = ({
  fix,
  fixInfoBtn,
  cancelclick,
  personInfoChange,
  name,
  email,
  birth,
  imageUrl,
  inputFocus,
  ChangeInputBtn,
  userInfo,
  setFix,
  loading,
  pageloading,
  emailCheck,
  personInfoEmailSubmit,
  emailOk,
  personInfoEmailSubmitKeypress,
  cancelModalEmail,
  KeyDown,
  imageImg,
}) => {
  const isPc = useMediaQuery({
    query: '(min-width: 900px)',
  });
  const isTablet = useMediaQuery({
    query: `(max-width: 900px)`,
  });

  return (
    <PersonalTemplateStyle>
      <ReserveConfirmheader />
      {!pageloading ? (
        <>
          <PersonalInfoHead />
          <main className="main-group">
            <PersonalInfoUl
              fix={fix}
              cancelclick={cancelclick}
              fixInfoBtn={fixInfoBtn}
              personInfoChange={personInfoChange}
              name={name}
              email={email}
              birth={birth}
              imageUrl={imageUrl}
              inputFocus={inputFocus}
              ChangeInputBtn={ChangeInputBtn}
              userInfo={userInfo}
              setFix={setFix}
              loading={loading}
              emailCheck={emailCheck}
              personInfoEmailSubmit={personInfoEmailSubmit}
              emailOk={emailOk}
              personInfoEmailSubmitKeypress={personInfoEmailSubmitKeypress}
              cancelModalEmail={cancelModalEmail}
              KeyDown={KeyDown}
              imageImg={imageImg}
            />
            {isPc && (
              <PcDiv>
                <PersonalInfoArticle />
              </PcDiv>
            )}

            {isTablet && (
              <TabletDiv>
                <PersonalInfoArticle />
              </TabletDiv>
            )}
          </main>
        </>
      ) : (
        <PageLoading />
      )}
    </PersonalTemplateStyle>
  );
};

export default PersonalTemplate;

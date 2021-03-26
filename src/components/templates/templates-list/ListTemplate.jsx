import ListStyle from '../../UI/organisms/organisms-list/ListsSt';
import GoogleMapContainer from '../../../containers/google-map-container/GoogleMapContainer';
import Footer from '../../UI/organisms/organisms-list/FooteStr';
import HeadStyle from '../../UI/organisms/organisms-list/HeadStyle';
import LoadingModal from '../LoadingModal';
import React from 'react';
import Modal from '../../../portal/Modal';
import AuthModalContainer from '../../../containers/AuthModalContainer';
import { useSelector } from 'react-redux';

const ListTemplate = ({
  searchModalState,
  setSearchModalState,
  RoomSearchClick,
  cashSearchClick,
  bedroomSearchClick,
  roomTypes,
  cost,
  minusBtn,
  plusBtn,
  searchBtn,
  costState,
  room,
  totalPage,
  pageNationClick,
  roomMap,
  locationSearch,
  checkDateSearch,
  guestSearch,
  costSearch,
  roomType,
  bedNum,
  bedRoomNum,
  bathRoomNum,
  currentButton,
  setCurrentButton,
  arrOfcurrButtons,
  setArrOfCurrButtons,
  numberOfPages,
  isLoading,
  changeCurrentPage,
  pageNationState,
  search,
  localMinCost,
  setLocalMinCost,
  localMaxCost,
  setLocalMaxCost,
  keyup,
  formState,
  setFormState,
  modal,
  setModal,
  isRoomCheckModalOpen,
  setIsRoomCheckModalOpen,
}) => {
  const { isCheck } = useSelector(({ search }) => search.searchRes);
  return (
    <>
      <div>
        <HeadStyle
          searchModalState={searchModalState}
          setSearchModalState={setSearchModalState}
          RoomSearchClick={RoomSearchClick}
          cashSearchClick={cashSearchClick}
          bedroomSearchClick={bedroomSearchClick}
          roomTypes={roomTypes}
          cost={cost}
          costSearch={costSearch}
          roomType={roomType}
          bedNum={bedNum}
          bedRoomNum={bedRoomNum}
          bathRoomNum={bathRoomNum}
          minusBtn={minusBtn}
          plusBtn={plusBtn}
          searchBtn={searchBtn}
          search={search}
          localMinCost={localMinCost}
          setLocalMinCost={setLocalMinCost}
          localMaxCost={localMaxCost}
          setLocalMaxCost={setLocalMaxCost}
          keyup={keyup}
        />
        <div className="list-map" style={{ display: 'flex' }}>
          <div className="list" style={{ display: 'block', width: '60%' }}>
            <ListStyle
              room={room}
              totalPage={totalPage}
              pageNationClick={pageNationClick}
              currentButton={currentButton}
              setCurrentButton={setCurrentButton}
              arrOfcurrButtons={arrOfcurrButtons}
              setArrOfCurrButtons={setArrOfCurrButtons}
              numberOfPages={numberOfPages}
              changeCurrentPage={changeCurrentPage}
              pageNationState={pageNationState}
              checkDateSearch={checkDateSearch}
              guestSearch={guestSearch}
              isLoading={isLoading}
              formState={formState}
              setFormState={setFormState}
              modal={modal}
              setModal={setModal}
              isRoomCheckModalOpen={isRoomCheckModalOpen}
              setIsRoomCheckModalOpen={setIsRoomCheckModalOpen}
              isCheck={isCheck}
            />
            {modal && (
              <Modal>
                <AuthModalContainer
                  modal={modal}
                  setModal={setModal}
                  formState={formState}
                  setFormState={setFormState}
                />
              </Modal>
            )}
          </div>
          <div className="map" style={{ display: 'block', width: '50%' }}>
            <GoogleMapContainer />
          </div>
        </div>
        <Footer />
      </div>
      {isLoading && <LoadingModal />}
    </>
  );
};

export default ListTemplate;

import React from 'react';
import ReCheckBedCount from '../../organisms/organisms-list/ReCheckBedCount';
import ReCheckCash from '../../organisms/organisms-list/ReCheckCash';
import ReCheckRoomType from '../../organisms/organisms-list/ReCheckRoomType';

const RoomReSearch = React.memo(
  ({
    searchModalState,
    roomTypes,
    cost,
    costSearch,
    roomType,
    bedNum,
    bedRoomNum,
    bathRoomNum,
    minusBtn,
    plusBtn,
    localMinCost,
    setLocalMinCost,
    localMaxCost,
    setLocalMaxCost,
  }) => {
    return (
      <>
        {searchModalState === 'room' && (
          <div>
            <ReCheckRoomType roomTypes={roomTypes} roomType={roomType} />
          </div>
        )}
        {searchModalState === 'cash' && (
          <div>
            <ReCheckCash
              cost={cost}
              costSearch={costSearch}
              localMinCost={localMinCost}
              setLocalMinCost={setLocalMinCost}
              localMaxCost={localMaxCost}
              setLocalMaxCost={setLocalMaxCost}
            />
          </div>
        )}
        {searchModalState === 'bedroom' && (
          <div>
            <ReCheckBedCount
              bedNum={bedNum}
              bedRoomNum={bedRoomNum}
              bathRoomNum={bathRoomNum}
              minusBtn={minusBtn}
              plusBtn={plusBtn}
            />
          </div>
        )}
      </>
    );
  },
);

export default RoomReSearch;

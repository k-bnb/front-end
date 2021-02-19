import React, { useEffect, useRef, useState, useCallback } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { GrFormClose } from 'react-icons/gr';
import Grade from '../../UI/atoms/atoms-detail/Grade';
import PointItemBox from '../../UI/molecules/molecules-detail/PointItemBox';
import ReviewItem from '../../UI/molecules/molecules-detail/ReviewItem';
import { requestComments } from '../../../lib/api/detail';
import LoaderIcon from 'react-loader-icon';

const slideUp = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0%);
  }
`;

const slideDown = keyframes`
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(100%);
  }
`;

const fadeIn = keyframes`
 0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }`;
const fadeOut = keyframes`
 0% {
  opacity: 1;
  }
  100% {
    opacity: 0;
  }`;

const ReviewModalBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: ${fadeIn} 0.4s ease;

  ${(props) =>
    props.disappear &&
    css`
      z-index: 9999;
      animation: ${fadeOut} 0.4s ease-out forwards;
    `}

  .review-modal-form {
    width: 95%;
    max-width: 1000px;
    height: 92vh;
    border-radius: 15px;
    padding: 0 20px 20px 20px;
    background-color: white;
    margin: 0 auto;
    position: relative;
    overflow-y: auto;
    animation: ${slideUp} 0.4s ease;

    ${(props) =>
      props.disappear &&
      css`
        z-index: 9999;
        animation: ${slideDown} 0.4s ease-out forwards;
      `}

    .close-icon {
      position: relative;
      top: 20px;
      font-size: 25px;
      transition-duration: 0.3s;
      transition-property: scale;
      cursor: pointer;
      &:active {
        transform: scale(0.93);
      }
      &:hover {
        border-radius: 50%;
        background-color: #e0dada;
      }
    }
  }
  .review-modal-top {
    background-color: white;

    width: 100%;
    max-width: 960px;
    position: fixed;
    z-index: 1;
    height: 120px;
  }
  .review-modal-bottom {
    overflow-y: scroll !important;
    margin-top: 100px;
    height: fit-content;
    display: flex;
    justify-content: space-between;
  }
  .review-itemBox-container {
    margin-top: 40px;
    width: 37%;
  }
  .review-modal-list {
    width: 63%;
    margin-top: 40px;
    list-style: none;
    /* background-color: yellowgreen; */
  }
  .last-li {
    height: 10px;
    width: 100%;
    background-color: green;
  }
`;

const ReviewModal = ({
  showReviewModal,
  setShowReviewModal,
  infoRes,
  roomId,
}) => {
  const [loading, setLoading] = useState(false);
  const [localShowReviewModal, setLocalShowReviewModal] = useState(
    showReviewModal,
  );
  const [showAnimation, setShowAnimation] = useState(false);

  const [pageNum, setPageNum] = useState(0);
  const totalPage = useRef(null); // 전체 페이지 2
  const [reviewsArr, setReviewsArr] = useState([]); // 리뷰 리스트

  const getComments = async (pageNum) => {
    if (totalPage.current === pageNum) return;

    setLoading(true);
    const response = await requestComments(roomId, pageNum); // 데이터 요청.
    if (response.data.allComments._embedded) {
      const newComments = await response.data.allComments._embedded
        .commentDtoList;
      totalPage.current = await response.data.allComments.page.totalPages; // 전체 페이지 수 저장하기
      await delay(500);
      setPageNum((pageNum) => pageNum + 1);
      setReviewsArr([...reviewsArr, ...newComments]);
    }

    setLoading(false);
  };

  // 모달창이 열리면 초기 댓글을 받아오고 전체 페이지 수를 가져온다.
  useEffect(() => {
    getComments(0);
  }, []);

  const observer = useRef();
  const lastCommentElementRef = useCallback(
    (node) => {
      if (loading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) getComments(pageNum);
      });

      if (node) observer.current.observe(node);
    },
    [loading],
  );

  useEffect(() => {
    if (localShowReviewModal && !showReviewModal) {
      setShowAnimation(true);
      setTimeout(() => {
        setShowAnimation(false);
      }, 400);
    }
    setLocalShowReviewModal(showReviewModal);
  }, [localShowReviewModal, showReviewModal]);

  if (!localShowReviewModal && !showAnimation) return null;
  return (
    <ReviewModalBlock
      disappear={!showReviewModal}
      className="outside-block"
      onClick={(e) => {
        if (e.target.classList.contains('outside-block'))
          setShowReviewModal(false);
      }}
    >
      <div className="review-modal-form" disappear={!showReviewModal}>
        <div className="review-modal-top">
          <GrFormClose
            className="close-icon"
            onClick={() => {
              setShowReviewModal(false);
            }}
          />
          <Grade reviewModal={true} grade="4.96점" />
        </div>
        <div className="review-modal-bottom">
          <div className="review-itemBox-container">
            <PointItemBox textItem="의사소통" point="5.0" reviewModal={true} />
            <PointItemBox textItem="위치" point="4.8" reviewModal={true} />
            <PointItemBox textItem="체크인" point="4.9" reviewModal={true} />
            <PointItemBox
              textItem="가격 대비 만족도"
              point="4.8"
              reviewModal={true}
            />
          </div>
          <ul className="review-modal-list">
            {reviewsArr.map((review, index) => {
              if (reviewsArr.length === index + 1) {
                return (
                  <li className="review-item" ref={lastCommentElementRef}>
                    <ReviewItem
                      name={review.userName}
                      date={review.creatingDate}
                      content={review.description}
                      userImgUrl={review.userImgUrl}
                    />
                  </li>
                );
              } else {
                return (
                  <li className="review-item">
                    <ReviewItem
                      name={review.userName}
                      date={review.creatingDate}
                      content={review.description}
                      userImgUrl={review.userImgUrl}
                    />
                  </li>
                );
              }
            })}
            {loading && (
              <li>
                <LoaderIcon type={'bubbles'} size={30} />
              </li>
            )}
          </ul>
        </div>
      </div>
    </ReviewModalBlock>
  );
};

export default ReviewModal;

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

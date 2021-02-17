import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { GrFormClose } from 'react-icons/gr';
//import ScoreAverage from '../../UI/molecules/molecules-detail/ScoreAverage';
import Grade from '../../UI/atoms/atoms-detail/Grade';
import PointItemBox from '../../UI/molecules/molecules-detail/PointItemBox';
import ReviewItem from '../../UI/molecules/molecules-detail/ReviewItem';
//import { useClickOutside } from '../../../lib/useClickOutside';
import useInfiniteScroll from '../../../lib/useInfiniteScroll';

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

const reviews = [
  { name: '이름1', date: '2020년 1월', content: '깨끗하고 좋아요' },
  { name: '이름2', date: '2020년 2월', content: '깨끗하고 좋아요2' },
  { name: '이름3', date: '2020년 3월', content: '깨끗하고 좋아요3' },
  { name: '이름4', date: '2020년 4월', content: '깨끗하고 좋아요4' },
  { name: '이름5', date: '2020년 5월', content: '깨끗하고 좋아요5' },
  { name: '이름6', date: '2020년 6월', content: '깨끗하고 좋아요6' },
  { name: '이름7', date: '2020년 7월', content: '깨끗하고 좋아요7' },
  { name: '이름8', date: '2020년 8월', content: '깨끗하고 좋아요8' },
  { name: '이름9', date: '2020년 9월', content: '깨끗하고 좋아요9' },
  { name: '이름10', date: '2020년 10월', content: '깨끗하고 좋아요10' },
];

const reviews2 = [
  { name: '이름11', date: '2021년 1월', content: '깨끗하고 좋아요11' },
  { name: '이름12', date: '2021년 2월', content: '깨끗하고 좋아요12' },
  { name: '이름13', date: '2021년 3월', content: '깨끗하고 좋아요13' },
  { name: '이름14', date: '2021년 4월', content: '깨끗하고 좋아요14' },
  { name: '이름15', date: '2021년 5월', content: '깨끗하고 좋아요15' },
  { name: '이름16', date: '2021년 6월', content: '깨끗하고 좋아요16' },
  { name: '이름17', date: '2021년 7월', content: '깨끗하고 좋아요17' },
  { name: '이름18', date: '2021년 8월', content: '깨끗하고 좋아요18' },
  { name: '이름19', date: '2021년 9월', content: '깨끗하고 좋아요19' },
  { name: '이름20', date: '2021년 10월', content: '깨끗하고 좋아요20' },
];

const ReviewModal = ({ showReviewModal, setShowReviewModal, infoRes }) => {
  const [localShowReviewModal, setLocalShowReviewModal] = useState(
    showReviewModal,
  );
  const [showAnimation, setShowAnimation] = useState(false);

  const currentPage = useRef(1); // 현재 페이지 1
  const totalPage = useRef(2); // 전체 페이지 2
  const [reviewsArr, setReviewsArr] = useState([...reviews]); // 리뷰 리스트
  const rootRef = useRef(null);
  const targetRef = useRef(null); // 마지막 DOM 노드

  const fakeFetch = (query, page) => {
    if (currentPage.current < totalPage.current) {
      setReviewsArr([...reviewsArr, ...reviews2]);
      currentPage.current++;
    }
  };

  useInfiniteScroll({
    root: rootRef.current,
    target: targetRef.current,
    onIntersect: ([{ isIntersecting }]) => {
      console.log('hey');
      if (isIntersecting) fakeFetch();
    },
  });

  useEffect(() => {
    document.body.style.overflowY = 'hidden';

    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, []);

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
          <ul className="review-modal-list" ref={rootRef}>
            {reviewsArr.map((review) => (
              <li className="review-item">
                <ReviewItem
                  name={review.name}
                  date={review.date}
                  content={review.content}
                />
              </li>
            ))}
            {/* 브라우저가 이 li를 감지하면 마지막 페이지 라는 것. */}
            <li ref={targetRef} className="last-li"></li>
          </ul>
        </div>
      </div>
    </ReviewModalBlock>
  );
};

export default ReviewModal;

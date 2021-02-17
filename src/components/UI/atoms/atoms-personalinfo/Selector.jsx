import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineCheck } from 'react-icons/ai';
import { RiArrowDownSLine } from 'react-icons/ri';

const SelectStyle = styled.div`
  padding: 0;
  list-style: none;
  /* border: 1px solid; */
  position: relative;
  label {
    display: flex;
    height: 45px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    align-items: center;
    font-size: 1.5rem;
    color: rgba(0, 0, 0, 0.7);
    padding-left: 10px;
    position: relative;
    svg {
      position: absolute;
      right: 10px;
      font-size: 3rem;
    }
  }
  input:checked + label {
    border: 2px solid #065063;
    svg {
      display: none;
    }
  }
  input {
    visibility: hidden;
    &:checked + label + div {
      display: block;
    }
  }
  .select-option {
    /* border: 1px solid; */
    position: absolute;
    top: 0px;
    left: 0;
    right: 0;
    /* height: 0; */

    width: 98%;
    display: none;
    /* border: 1px solid; */
    z-index: 1;
    border-radius: 10px;
    div {
      margin: 0;
      border-radius: 10px;
      height: 20px;
      transition: 1s;
      /* border: 1px solid; */
      &:first-child {
        button {
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }
      }
      &:last-child {
        button {
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
        }
      }
      button {
        background-color: rgba(48, 44, 44, 0.8);
        backdrop-filter: blur(9px);
        text-align: left;
        color: #eee;
        font-weight: 800;
        font-size: 1.2rem;
        width: 100%;
        position: relative;
        cursor: pointer;
        outline: none;
        height: 100%;
        padding: 0 30px;

        svg {
          left: 10px;
          bottom: 50%;
          transform: translateY(50%);
          visibility: hidden;
          position: absolute;
        }
        &:hover {
          background-color: #4f45da;
          /* svg {
            visibility: visible;
          } */
        }

        &:focus {
          svg {
            visibility: visible;
          }
        }
      }
      button.disabled {
        cursor: default;
        color: #928888;
        &:hover {
          background-color: rgba(48, 44, 44, 0.8);
          backdrop-filter: blur(9px);
        }
      }
    }
  }
`;
const Selector = ({ options, defultValue, name, personInfoChange }) => {
  const [defaultvalues, setdefaultvalues] = useState('');

  const labelRef = useRef();
  const divRef = useRef();
  useEffect(() => {
    setdefaultvalues(defultValue[0].value);
  }, [defultValue]);

  const click = (e) => {
    if (!e.target.matches('.select-option')) {
      setdefaultvalues(e.target.value);
      labelRef.current.checked = false;
    }
  };

  return (
    <SelectStyle>
      <input
        ref={labelRef}
        name={name}
        type="checkbox"
        id="selectBtn"
        className="box"
      />
      <label htmlFor="selectBtn">
        {defaultvalues}
        <RiArrowDownSLine />
      </label>
      <div onClick={click} ref={divRef} className="select-option">
        {options.map((item, i) => (
          <div key={i}>
            <button
              onClick={personInfoChange}
              name={'gender'}
              value={item.value}
              className={item.isDisabled ? 'disabled' : ''}
            >
              <AiOutlineCheck />
              {item.value}
            </button>
          </div>
        ))}
      </div>
    </SelectStyle>
  );
};

export default Selector;

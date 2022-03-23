import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  // return (
  //   <Wrapper>
  //     {
  //       <select value={value} onChange={onChange}>
  //         {children}
  //       </select>
  //     }

  //     {displayedValue}
  //     <VerticalIcon id="chevron-down" size="14" strokeWidth="3" />
  //   </Wrapper>
  // );

  return (
    <Wrapper>
      <InnerSelect value={value} onChange={onChange}>
        {children}
      </InnerSelect>
      <VerticalIcon id="chevron-down" size="14" strokeWidth="3" />
    </Wrapper>
  );
};

const VerticalIcon = styled(Icon)`
  margin-top: auto;
  margin-bottom: auto;
  top: 0;
  bottom: 0;
  right: 16px;
  position: absolute;
`;

// const Wrapper = styled.button`
//   border: none;
//   font-size: ${16 / 16}rem;
//   color: ${COLORS.gray700};
//   line-height: ${19 / 16}rem;
//   width: fit-content;
//   position: relative;

//   & select {
//     position: absolute;
//     inset: 0 0 0 0;
//     opacity: 0;
//   }

//   &:hover {
//     color: ${COLORS.black};
//   }

//   background-color: ${COLORS.transparentGray15};
//   padding: 12px 52px 12px 16px;
//   border-radius: 8px;
// `;

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const InnerSelect = styled.select`
  appearance: none;
  border: none;
  font-size: ${16 / 16}rem;
  color: ${COLORS.gray700};
  line-height: ${19 / 16}rem;
  width: fit-content;
  position: relative;

  & select {
    position: absolute;
    inset: 0 0 0 0;
    opacity: 0;
  }

  &:hover {
    color: ${COLORS.black};
  }

  background-color: ${COLORS.transparentGray15};
  padding: 12px 52px 12px 16px;
  border-radius: 8px;
`;

export default Select;

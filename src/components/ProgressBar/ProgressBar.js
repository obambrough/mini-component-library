/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": 8 + 'px',
    "--borderRadius": 4 + 'px'
  },
  medium: {
    "--height": 12 + 'px',
    "--borderRadius": 4 + 'px'
  },
  large: {
    "--height": 16 + 'px',
    "--borderRadius": 8 + 'px',
    "--padding": 4 + 'px'
  }
}

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  value = Math.max(0, value);
  value = Math.min(100, value);
  return (
    <Wrapper style={styles}>
      <Bar percentage={value} style={styles}></Bar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 370px;
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--borderRadius);
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
  padding: var(--padding);
`;

const Bar = styled.div`
  width: ${(props) => `${props.percentage}%`};
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px
    ${(props) => {
      const radius = Math.max(0, 1 - (100 - props.percentage)) * 4;
      return `${radius}px ${radius}px`;
    }}
    4px;
`;

export default ProgressBar;

import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';

import styled from 'styled-components';

const getStyledDropdown = (Component: Select | CreatableSelect) => styled(
  Component
)`
  &.error {
    .Select__control {
      border-color: ${(props) => props.theme.colors.redSecondary};
      background-color: ${(props) => props.theme.colors.redHover};
      border-bottom: 1px solid ${(props) => props.theme.colors.redPrimary};
      svg {
        color: ${(props) => props.theme.colors.redSecondary};
      }
    }
    .Select__placeholder {
      color: ${(props) => props.theme.colors.redPrimary};
    }
  }
  .Select__control {
    background-color: ${(props) => props.theme.colors.bgPrimary};
    border-style: none;
    border-bottom: 1px solid ${(props) => props.theme.colors.bgSecondary};
    border-radius: 0;
    color: ${(props) => props.theme.colors.bgTertiary};
    font-family: ${(props) => props.theme.font};
    font-size: ${(props) => props.theme.fontSizes.sm};
    font-weight: ${(props) => props.theme.fontWeights.normal};
    height: 42px;
  }
  .Select__control--is-focused {
    box-shadow: none;
    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.colors.bgSecondary};
    }
  }
  .Select__menu {
    box-shadow: none;
  }
  .Select__option {
    &:hover {
      background-color: ${(props) => props.theme.colors.bgSecondary};
    }
  }
  .Select__option--is-focused {
    background-color: ${(props) => props.theme.colors.bgSecondary};
  }
  .Select__option--is-selected {
    color: ${(props) => props.theme.colors.black};
    background-color: ${(props) => props.theme.colors.white};
  }
  .Select__select__menu-list {
    background-color: ${(props) => props.theme.colors.bgPrimary};
    .Select__indicator {
      svg {
        color: ${(props) => props.theme.colors.bgSecondary};
      }
    }
  }
  .Select__indicator-separator {
    display: none;
  }
  .Select__dropdown-indicator {
    svg {
      color: black;
      transition: 0.2s;
    }
  }
  .Select__control--menu-is-open {
    border-style: none;
    .Select__indicator {
      svg {
        transform: rotate(180deg);
        transition: 0.2s;
      }
    }
  }
  .Select__multi-value {
    border-radius: 3px;
    .Select__multi-value__remove {
      &:hover {
        background-color: transparent;
        color: ${(props) => props.theme.colors.grayOpacity};
      }
    }
  }
  .Select__multi-value__label {
    font-size: 14px;
  }
  .Select__clear-indicator {
    display: none;
  }
`;

export const StyledDropdown = getStyledDropdown(Select);
export const CreatableStyledDropdown = getStyledDropdown(CreatableSelect);

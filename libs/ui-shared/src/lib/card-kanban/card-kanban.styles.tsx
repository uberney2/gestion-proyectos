import styled from 'styled-components';
import { StyledStatusLabel } from '../status-label/status-label.styles';

export const StyledCardKanban = styled.div`
  font-family: ${(props) => props.theme.font};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
  border-radius: 4px;

  ${StyledStatusLabel} {
    flex: 1 1 72px;
  }

  p {
    margin: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 190px;
  }
`;

export const StyledContentCard = styled.div`
  font-size: ${(props) => props.theme.fontSizes.xs};
  padding: 10px 16px 16px;
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

export const StyledIcon = styled.div`
  display: flex;
  justify-content: end;
  padding: 6px;
`;

export const StyledPursuitName = styled.p`
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const StyledAccountName = styled.p`
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.grayPrimary};
`;

export const StyledPortfolioName = styled.p`
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const StyledUsaPointOfContact = styled.div`
  color: ${(props) => props.theme.colors.grayOpacity};
`;

export const StyledContact = styled.p`
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const StyledLastModified = styled.p`
  color: ${(props) => props.theme.colors.grayOpacity};
  font-size: 10px;
`;

export const StyledLabelGroup = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const StyledGroupName = styled.div`
  font-size: 13px;
  margin-top: -20px;
`;

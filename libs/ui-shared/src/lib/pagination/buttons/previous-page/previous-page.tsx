import { ChevronLeftIcon } from '../../../icon-svg';
import { StyledPreviousPage } from './previous-page.styles';

export interface PreviousPageProps {
  currentValue: number;
  onClick(page: number): void;
}

export const PreviousPage = ({ currentValue, onClick }: PreviousPageProps) => {
  const clickHandler = () => {
    onClick(currentValue - 1);
  };
  return (
    <StyledPreviousPage
      onClick={clickHandler}
      className={currentValue === 1 ? 'hidden' : ''}
    >
      <ChevronLeftIcon />
    </StyledPreviousPage>
  );
};
export default PreviousPage;

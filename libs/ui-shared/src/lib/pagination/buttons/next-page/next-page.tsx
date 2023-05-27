import { ChevronRightIcon } from '../../../icon-svg';
import { StyledNextPage } from './next-page.styles';

export interface NextPageProps {
  currentValue: number;
  onClick(page: number): void;
  valueLimit: number;
}

export const NextPage = ({
  currentValue,
  onClick,
  valueLimit,
}: NextPageProps) => {
  const clickHandler = () => {
    onClick(currentValue + 1);
  };

  return (
    <StyledNextPage
      onClick={clickHandler}
      className={currentValue === valueLimit ? 'hidden' : ''}
    >
      <ChevronRightIcon />
    </StyledNextPage>
  );
};
export default NextPage;

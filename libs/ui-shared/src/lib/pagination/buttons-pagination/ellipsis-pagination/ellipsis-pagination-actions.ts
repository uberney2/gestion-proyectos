import { getSidePaginationNumbers } from '../../utils';

const calculateEllipsisLimitsLeft = (
  currentPage: number,
  ellipsisRange: number
): { ellipsisLowerLimit: number; ellipsisUpperLimit: number } => {
  const ellipsisRangeHalf = ellipsisRange / 2;
  const ellipsisLowerLimit =
    currentPage - ellipsisRangeHalf + (ellipsisRangeHalf === 1 ? 0 : 1);
  const ellipsisUpperLimit =
    currentPage + ellipsisRangeHalf - (ellipsisRangeHalf === 1 ? 1 : 0);
  return { ellipsisLowerLimit, ellipsisUpperLimit };
};

const calculateEllipsisLimitsRight = (
  currentPage: number,
  ellipsisRange: number
): { ellipsisLowerLimit: number; ellipsisUpperLimit: number } => {
  const ellipsisLowerLimit = currentPage - ellipsisRange / 2;
  const ellipsisUpperLimit = currentPage + ellipsisRange / 2 - 1;
  return { ellipsisLowerLimit, ellipsisUpperLimit };
};

const calculateEllipsisRangeLowerLimit = (
  currentPage: number,
  ellipsisRange: number
): number => {
  return currentPage - ellipsisRange / 2 - 1;
};

const calculateEllipsisRangeUpperLimit = (
  currentPage: number,
  ellipsisRange: number
): number => {
  return currentPage + ellipsisRange / 2;
};

export const ellipsisLeftNumbers = (
  currentPage: number,
  ellipsisRange: number,
  showSelectedOnLeftUntil: number,
  pageNumbers: number[]
): number[] => {
  const { ellipsisLowerLimit, ellipsisUpperLimit } =
    calculateEllipsisLimitsLeft(currentPage, ellipsisRange);

  const ellipsisRangeLowerLimit = calculateEllipsisRangeLowerLimit(
    currentPage,
    ellipsisRange
  );

  if (currentPage > showSelectedOnLeftUntil)
    return getSidePaginationNumbers(pageNumbers, 0, ellipsisRange);

  if (ellipsisRangeLowerLimit < 0)
    return getSidePaginationNumbers(pageNumbers, 1, ellipsisRange, 1);

  return getSidePaginationNumbers(
    pageNumbers,
    ellipsisLowerLimit,
    ellipsisUpperLimit,
    1
  );
};

export const ellipsisRightNumbers = (
  currentPage: number,
  ellipsisRange: number,
  showSelectedOnLeftUntil: number,
  pageNumbers: number[],
  amountOfPages: number
): number[] => {
  const { ellipsisLowerLimit, ellipsisUpperLimit } =
    calculateEllipsisLimitsRight(currentPage, ellipsisRange);
  const ellipsisRangeUpperLimit = calculateEllipsisRangeUpperLimit(
    currentPage,
    ellipsisRange
  );

  if (currentPage <= showSelectedOnLeftUntil)
    return getSidePaginationNumbers(
      pageNumbers,
      amountOfPages - ellipsisRange,
      amountOfPages
    );

  if (ellipsisRangeUpperLimit <= amountOfPages)
    return getSidePaginationNumbers(
      pageNumbers,
      ellipsisLowerLimit,
      ellipsisUpperLimit,
      amountOfPages
    );

  return getSidePaginationNumbers(
    pageNumbers,
    amountOfPages - ellipsisRange,
    amountOfPages
  );
};

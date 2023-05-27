const sortNumbersAscending = (numbers: number[]) => {
  return [...numbers].sort(function greaterNumber(a, b) {
    return a - b;
  });
};

const getNumbersBetweenRange = (
  numbers: number[],
  lowerLimit: number,
  upperLimit: number
): number[] => {
  return numbers.slice(lowerLimit, upperLimit);
};

export const getSidePaginationNumbers = (
  pageNumbers: number[],
  ellipsisLowerLimit: number,
  ellipsisUpperLimit: number,
  concatNumber?: number
) => {
  let numbers = getNumbersBetweenRange(
    pageNumbers,
    ellipsisLowerLimit,
    ellipsisUpperLimit
  );
  if (concatNumber) numbers = numbers.concat([concatNumber]);
  return sortNumbersAscending(numbers);
};

export const getPagesNumbersArray = (pagesAmout: number) => {
  return Array.from({ length: pagesAmout }, (_, i) => i + 1);
};

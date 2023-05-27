export const getOnlyNumeric = (value: string): number | string => {
  return parseInt(value.replace(/\D/g, '')) || '';
};

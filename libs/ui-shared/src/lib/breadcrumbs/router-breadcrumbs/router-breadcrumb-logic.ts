export const getCapitalizedString = (crumb: string): string => {
  return `${crumb[0].toUpperCase()}${crumb.slice(1, crumb.length)}`;
};

export const getVisibleCrumbsStrings = (
  crumbsStrings: string[],
  index: number
): [string[], string[]] => {
  const notVisibleCrumbs = [...crumbsStrings].splice(0, index);
  if (index > 0) {
    const visibleCrumbs = [...crumbsStrings].splice(
      index,
      crumbsStrings.length - 1
    );
    return [visibleCrumbs, notVisibleCrumbs];
  }
  return [crumbsStrings, notVisibleCrumbs];
};

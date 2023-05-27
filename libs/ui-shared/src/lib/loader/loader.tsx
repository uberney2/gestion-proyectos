import { StyledLoader, StyledLoaderContainer } from './loader.styles';

export const Loader = () => {
  return (
    <StyledLoaderContainer>
      <StyledLoader></StyledLoader>
      <p>Loading...</p>
    </StyledLoaderContainer>
  );
};

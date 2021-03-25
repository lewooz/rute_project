const customMediaQuery = (maxWidth: number, isMaxWidth = true) =>
  `@media only screen and (${isMaxWidth ? "max-width" : "min-width"}: ${maxWidth}px)`;
const media = {
  custom: customMediaQuery,
  tooLargeScreen: customMediaQuery(2559),
  largeScreen: customMediaQuery(1200),
  desktop: customMediaQuery(992),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(576),
};

export default media
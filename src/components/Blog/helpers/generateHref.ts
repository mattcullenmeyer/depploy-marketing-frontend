export const generateHref = (heading: string) => {
  const headingArray = heading.split(' ');
  const lowerCaseHeadingArray = headingArray.map((text) => text.toLowerCase());
  const result = lowerCaseHeadingArray.join('-');
  return result;
};

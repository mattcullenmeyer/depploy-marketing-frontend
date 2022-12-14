export const formatDate = (date: string) => {
  const datetime = new Date(date);
  const formattedDate = datetime.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  return formattedDate;
};

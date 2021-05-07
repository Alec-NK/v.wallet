const formatDate = (date: string): string => {
  const dateSplit = date.split('-');
  const day = dateSplit[2];
  const month = dateSplit[1];
  const year = dateSplit[0];

  return `${day}/${month}/${year}`;
}

export default formatDate;

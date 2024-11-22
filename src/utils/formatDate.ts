export const convertTimestampToDate = (dateStr: any) => {
  const d = new Date(dateStr);
  return d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
};

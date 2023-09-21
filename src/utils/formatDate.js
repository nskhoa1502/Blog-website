// 2023-09-21T03:11:39.689Z
export const formatDate = (dateString) => {
  const inputDate = new Date(dateString); // Parse the input string into a Date object
  const day = String(inputDate.getDate()).padStart(2, "0");
  const month = String(inputDate.getMonth() + 1).padStart(2, "0");
  const year = inputDate.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;
  return formattedDate;
};

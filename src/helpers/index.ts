import moment from "moment";

export const formatNumber = (number: number) => {
  return new Intl.NumberFormat().format(number);
};

export const formatAddress = (address: string) => {
  return address ? `${address?.slice(0, 6)}...${address?.slice(-4)}` : "";
};

export const formatDate = (date: string) => {
  return moment(date).format("Do MMMM YYYY h:mm:ss a");
};

export const formatTimeAgo = (date: string) => {
  return moment(date).fromNow();
};

export const formatNumberNotation = (number: number) => {
  const formatter = Intl.NumberFormat("en", { notation: "compact" });
  return formatter.format(number);
};
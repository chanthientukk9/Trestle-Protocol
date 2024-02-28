export function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const formatTimeToLongStr = (time: number) => {
  const days = Math.floor(time / 86400);
  const hours = Math.floor((time % 86400) / 3600) % 3600;
  const minutes = Math.floor(time / 60) % 60;
  const seconds = Number.parseInt(`${time % 60}`);

  return `${days ? days + `${days > 1 ? " days" : " day"}` : ""} ${
    hours ? hours + `${hours > 1 ? " hours" : " hour"}` : ""
  } ${minutes ? minutes + `${minutes > 1 ? " minutes" : " minute"}` : ""} ${
    seconds ? seconds + " seconds " : ""
  }`;
};

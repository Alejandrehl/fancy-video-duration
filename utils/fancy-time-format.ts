export const fancyTimeFormat = (duration: number): string => {
  const hours = ~~(duration / 3600);
  const minutes = ~~((duration % 3600) / 60);
  const seconds = ~~Math.ceil(duration) % 60;

  let result = "";

  if (hours > 0) {
    result += "" + hours + ":" + (minutes < 10 ? "0" : "");
  }

  result += "" + minutes + ":" + (seconds < 10 ? "0" : "");
  result += "" + seconds;

  return result;
};

const getDurationFromBuffer = (buffer: Buffer): number => {
  const header = Buffer.from("mvhd");
  const start = buffer.indexOf(header) + 17;
  const timeScale = buffer.readUInt32BE(start);
  const duration = buffer.readUInt32BE(start + 4);
  const audioLength = Math.floor((duration / timeScale) * 1000) / 1000;

  return audioLength;
};

const fancyTimeFormat = (duration: number): string => {
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

const getVideoDuration = (buffer: Buffer) => {
  const durationLength = getDurationFromBuffer(buffer);
  const fancyTimeFormatDuration = fancyTimeFormat(durationLength);

  return fancyTimeFormatDuration;
};

export { getDurationFromBuffer, fancyTimeFormat, getVideoDuration };

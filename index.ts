import { getDurationFromBuffer } from "./utils/get-duration-from-buffer";
import { fancyTimeFormat } from "./utils/fancy-time-format";

const getVideoDuration = (buffer: Buffer) => {
  const durationLength = getDurationFromBuffer(buffer);
  const fancyTimeFormatDuration = fancyTimeFormat(durationLength);

  return fancyTimeFormatDuration;
};

export { getDurationFromBuffer, fancyTimeFormat, getVideoDuration };

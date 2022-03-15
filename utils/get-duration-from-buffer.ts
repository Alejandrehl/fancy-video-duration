export const getDurationFromBuffer = (buffer: Buffer): number => {
  const header = Buffer.from("mvhd");
  const start = buffer.indexOf(header) + 17;
  const timeScale = buffer.readUInt32BE(start);
  const duration = buffer.readUInt32BE(start + 4);
  const audioLength = Math.floor((duration / timeScale) * 1000) / 1000;

  return audioLength;
};

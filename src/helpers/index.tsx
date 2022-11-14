export const getFormattedTemperature = (data: number | null) => {
  if (data) {
    return Math.trunc(data);
  }
};

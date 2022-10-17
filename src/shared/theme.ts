export const fretWidths = ['1.9', '1.8', '1.7', '1.6', '1.5', '1.43', '1.34', '1.27', '1.2'];

export const getFretWidths = (frets: number) => {
  const widths = fretWidths.slice(0, frets);
  const remainingFrets = frets - widths.length;
  for (let i = 0; i < remainingFrets; i++) {
    widths.push('1.2');
  }
  return widths.join('fr ') + 'fr';
};

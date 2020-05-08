export const isSorted = arr => arr.join('') === [...arr].sort((a, b) => a - b).join('');

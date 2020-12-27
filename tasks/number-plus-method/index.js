export const extendNumberPrototype = () => {
  Number.prototype.plus = function(num = 1) { return this + (typeof num === 'number' ? num : Number(num)) };
};

export const extendNumberPrototype = () => {
  Number.prototype.plus = function (num = 1) {
    const correctNum = typeof num === 'number' ? num : Number(num);

    return this + correctNum;
  };
};

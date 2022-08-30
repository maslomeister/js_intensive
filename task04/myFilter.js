Array.prototype.myFilter = function (predicate, arr = null) {
  const filtered = [];
  for (let i = 0; i < this.length; i++) {
    if (predicate.call(arr, this[i], i, this)) {
      filtered.push(this[i]);
    }
  }
  return filtered;
};

function makeObjectDeepCopy(object) {
  const objClone = {};

  for (let key in object) {
    const value = object[key];

    objClone[key] =
      typeof value === "object" ? makeObjectDeepCopy(value) : value;
  }

  return objClone;
}

function cloneFunction(fn) {
  let fnStr = fn.toString();
  let fnClone = new Function("return " + fnStr);
  return fnClone();
}

function checkObject(obj) {
  if (obj !== null) {
    if (typeof obj === "object") {
      if (Array.isArray(obj)) return "array";
      if (obj instanceof Map) return "map";
      if (obj instanceof Set) return "set";
      if (obj instanceof Date) return "date";
      return "object";
    }

    if (typeof obj === "function") return "function";
  }

  return "primitive";
}

const copyArray = (arr) =>
  arr.map((item) => {
    if (Array.isArray(item)) {
      return copyArray(item);
    }
    if (checkObject(item) !== "primitive") {
      return makeObjectDeepCopy(item);
    }
    return item;
  });

function makeObjectDeepCopy(object) {
  const objClone = {};

  Object.keys(object).forEach((key) => {
    const value = object[key];

    switch (checkObject(value)) {
      case "object":
        objClone[key] = makeObjectDeepCopy(value);
        break;
      case "array":
        objClone[key] = copyArray(value);
        break;
      case "function":
        objClone[key] = cloneFunction(value);
        break;
      case "map":
        objClone[key] = new Map(copyArray(Array.from(value)));
        break;
      case "set":
        objClone[key] = new Set(copyArray(Array.from(value)));
        break;
      case "date":
        objClone[key] = new Date(value);
        break;
      case "primitive":
        objClone[key] = value;
        break;
    }
  });

  return objClone;
}

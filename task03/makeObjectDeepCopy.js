function cloneFunction(fn) {
  const fnClone = new Function("return " + fn.toString());
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

function copyArray(arr) {
  return arr.map((item) => {
    if (Array.isArray(item)) {
      return copyArray(item);
    }
    if (checkObject(item) !== "primitive") {
      return copyObject(item);
    }
    return item;
  });
}

function copyObject(object) {
  const objClone = {};

  Object.keys(object).forEach((key) => {
    const value = object[key];

    switch (checkObject(value)) {
      case "object":
        objClone[key] = copyObject(value);
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

/**
 * Returns deep copy of an object, works with any object
 * @param object An object
 */
function makeObjectDeepCopy(object) {
  switch (checkObject(object)) {
    case "object":
      return copyObject(object);
    case "array":
      return copyArray(object);
    case "function":
      return cloneFunction(object);
    case "map":
      return new Map(copyArray(Array.from(object)));
    case "set":
      return new Set(copyArray(Array.from(object)));
    case "date":
      return new Date(object);
      break;
  }
}

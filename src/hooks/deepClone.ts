
export function deepClone(obj: object, map: WeakMap<any,any> = new WeakMap()) {
  if (typeof obj !== "object") {
    return obj;    
  }
  if (map.get(obj)) {
    return map.get(obj);
  }

  let result = {}
  if (obj instanceof Array || Object.prototype.toString(obj) === "[object Array]") {
    result = []
  }

  map.set(obj, result)
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key]= deepClone(obj[key],map)
    }
  }
  return result
}
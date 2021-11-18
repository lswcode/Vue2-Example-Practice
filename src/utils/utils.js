export function isEqual(obj1, obj2) {
  //不是对象,直接返回比较结果
  if (typeof obj1 !== "object" || typeof obj2 !== "object") {
    return obj1 === obj2;
  }
  //都是对象,且地址相同,返回true
  if (obj2 === obj1) return true;
  //是对象或数组
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  //比较keys的个数,若不同,肯定不相等
  if (keys1.length !== keys2.length) return false;
  for (let k of keys1) {
    //递归比较键值对
    let res = isEqual(obj1[k], obj2[k]);
    if (!res) return false;
  }
  return true;
}

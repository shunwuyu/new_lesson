export function objectEqual(origin, target) {
  for (let prop in origin) {
      if (!Object.is(origin[prop], target[prop])) {
        return false;
      }
  }
  return true
}

function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false;
  }
  const north = walk.filter((direction) => direction === "n").length;
  const south = walk.filter((direction) => direction === "s").length;
  const east = walk.filter((direction) => direction === "e").length;
  const west = walk.filter((direction) => direction === "w").length;
  return north === south && east === west;
}
const walk = ("n", "s", "s", "s", "e", "n", "n", "n", "w");
console.log(isValidWalk(walk));

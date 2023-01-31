export function formatCount(count) {
  if (typeof count != 'number' || count < 10000) {
    return count;
  }
  return (count / 10000).toFixed(0) + "万";
}
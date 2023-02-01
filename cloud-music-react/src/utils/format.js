export function formatCount(count) {
  if (typeof count != 'number' || count < 10000) {
    return count;
  }
  if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 10000) + "万";
  }
  return Math.floor(count / 10000) + "亿";
}

export function formatImageUrlSize(imageUrl, size) {
  return `${imageUrl}?param=${size}x${size}`;
}
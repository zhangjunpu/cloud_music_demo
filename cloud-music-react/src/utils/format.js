export const formatCount = (count) => {
  if (typeof count != "number" || count < 10000) {
    return count;
  }
  if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 10000) + "万";
  }
  return Math.floor(count / 10000) + "亿";
};

export const formatImageUrlSize = (imageUrl, size) => {
  return `${imageUrl}?param=${size}x${size}`;
};

export const formatPlayUrl = (id) => {
  if (!id) {
    return id;
  }
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
};

const lyricPattern = /\[(\d{2}):(\d{2}).(\d{2,3})\]/;

/**
 * 歌词解析
 */
export const parseLyric = (lyric) => {
  const arr = lyric.split("\n");
  const lyrics = [];
  for (let line of arr) {
    if (!line) continue;

    const res = line.match(lyricPattern);
    if (!res) continue;

    const str = res[0];
    const minute = res[1] * 60 * 1000;
    const second = res[2] * 1000;
    const millis = res[3].length === 2 ? res[3] * 10 : res[3] * 1;
    const time = minute + second + millis;
    const content = line.replace(str, "").trim();

    lyrics.push({ time, content });
  }
  return lyrics;
};

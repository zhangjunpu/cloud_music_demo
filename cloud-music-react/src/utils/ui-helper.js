export const scrollTo = (element, to, duration) => {
  element.scrollTop = to;

  // const currentTop = element.scrollTop;
  // const diff = to - currentTop;
  // const offset = (diff / duration) * 10;

  // setTimeout(() => {
  //   element.scrollTop = currentTop + offset;
  //   if (element.scrollTop === to) return;
  //   scrollTo(element, to, duration - 10);
  // }, 10);
};

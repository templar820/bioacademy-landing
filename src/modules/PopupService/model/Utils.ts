export const lockScrollbar = () => {
  const scrollBarWidth = window.innerWidth - document.body.offsetWidth;

  Object.assign(document.body.style, {
    overflowY: 'hidden',
    paddingRight: scrollBarWidth + 'px',
  });
};

export const unlockScrollbar = () => {
  Object.assign(document.body.style, {
    overflowY: '',
    paddingRight: '',
  });
};

export const debounce = (cb: () => unknown, time: number) => {
  let timeout!: NodeJS.Timeout;

  return () => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(cb, time);
  };
};

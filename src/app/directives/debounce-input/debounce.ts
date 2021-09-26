export const debounce = () => {
  let timeout!: ReturnType<typeof setTimeout>;

  return (cb: () => unknown, time: number) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(cb, time);
  };
};

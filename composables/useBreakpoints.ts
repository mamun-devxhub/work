export const useBreakpoints = () => {
  const deviceWidth = ref(0);

  const updateWidth = () => {
    deviceWidth.value = window.innerWidth;
  };

  const isSmaller = (breakpoint: number) => {
    return deviceWidth.value < breakpoint;
  };
  const isSmallerOrEqual = (breakpoint: number) => {
    return deviceWidth.value <= breakpoint;
  };
  const isLarger = (breakpoint: number) => {
    return deviceWidth.value > breakpoint;
  };
  const isLargerOrEqual = (breakpoint: number) => {
    return deviceWidth.value >= breakpoint;
  };
  const isBetween = (lowerBreakpoint: number, upperBreakpoint: number) => {
    return isLargerOrEqual(lowerBreakpoint) && isSmaller(upperBreakpoint);
  };

  onMounted(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", updateWidth);
  });

  return {
    deviceWidth,
    isSmaller,
    isSmallerOrEqual,
    isLarger,
    isLargerOrEqual,
    isBetween,
  };
};

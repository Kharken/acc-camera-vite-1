

export const scrollToAnchor = (refElement: React.MutableRefObject<HTMLAnchorElement | null>) => {
  if (refElement.current) {
    refElement.current.scrollIntoView({behavior: 'smooth'});
  }
};

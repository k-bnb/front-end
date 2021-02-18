import { useEffect } from 'react';

const useInfiniteScroll = ({
  root,
  target,
  onIntersect,
  threshold = 0.5,
  rootMargin = '0px',
}) => {
  useEffect(() => {
    if (!root) return;

    const observer = new IntersectionObserver(onIntersect, {
      root,
      rootMargin,
      threshold,
    });

    if (!target) return;

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [target, root, rootMargin, onIntersect, threshold]);
};

export default useInfiniteScroll;

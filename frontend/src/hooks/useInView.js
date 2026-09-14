import { useEffect, useRef, useState } from "react";

/**
 * Fires once when the element enters the viewport. Used for marketing-page
 * scroll reveals — never on functional UI a user visits daily.
 */
export function useInView(options = { once: true, margin: "-80px" }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (options.once) observer.disconnect();
        } else if (!options.once) {
          setInView(false);
        }
      },
      { rootMargin: options.margin ?? "0px", threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options.once, options.margin]);

  return [ref, inView];
}

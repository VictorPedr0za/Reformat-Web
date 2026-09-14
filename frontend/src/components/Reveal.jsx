import { useInView } from "../hooks/useInView.js";

export default function Reveal({ as: Tag = "div", className = "", delay = 0, children }) {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      data-visible={inView}
      className={`reveal ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}

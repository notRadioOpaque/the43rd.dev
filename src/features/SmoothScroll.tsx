import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScroll({ children }: { children: unknown }) {
  return <ReactLenis root>{children}</ReactLenis>;
}

export default SmoothScroll;

import { cn } from "@/lib/utils";

interface RetroGridProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Additional CSS classes to apply to the grid container
   */
  className?: string;
  /**
   * Rotation angle of the grid in degrees
   * @default 65
   */
  angle?: number;
  /**
   * Grid cell size in pixels
   * @default 60
   */
  cellSize?: number;
  /**
   * Grid opacity value between 0 and 1
   * @default 0.5
   */
  opacity?: number;
  /**
   * Grid line color in light mode
   * @default "gray"
   */
  lightLineColor?: string;
  /**
   * Grid line color in dark mode
   * @default "gray"
   */
  darkLineColor?: string;
}

export function RetroGrid({
  className,
  angle = 65,
  cellSize = 60,
  opacity = 0.5,
  lightLineColor = "gray",
  darkLineColor = "gray",
  ...props
}: RetroGridProps) {
  const gridStyles = {
    "--grid-angle": `${angle}deg`,
    "--cell-size": `${cellSize}px`,
    "--opacity": opacity,
    "--light-line": lightLineColor,
    "--dark-line": darkLineColor,
  } as React.CSSProperties;

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 overflow-hidden [perspective:200px]",
        `opacity-[var(--opacity)]`,
        "[&_+_*]:relative [&_+_*]:z-10", // Add z-index to elements after RetroGrid
        className,
      )}
      style={{
        ...gridStyles,
        opacity: `calc(var(--opacity) * 0.5)`, // Reduce opacity by 50%
      }}
      {...props}
    >
      <div className="absolute left-1/2 top-1/2 h-[200vmax] w-[200vmax] -translate-x-1/2 -translate-y-1/2 [transform:rotateX(var(--grid-angle))]">
        <div className="animate-grid [background-image:linear-gradient(to_right,var(--light-line)_1px,transparent_0),linear-gradient(to_bottom,var(--light-line)_1px,transparent_0)] [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:100%] [width:100%] dark:[background-image:linear-gradient(to_right,var(--dark-line)_1px,transparent_0),linear-gradient(to_bottom,var(--dark-line)_1px,transparent_0)]" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent to-90% dark:from-black/80" />
      <div className="absolute inset-0 bg-background/30 dark:bg-background/50" />
    </div>
  );
}

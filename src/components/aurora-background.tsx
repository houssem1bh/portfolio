export function AuroraBackground({
  variant = "page",
  position = "absolute",
}: {
  variant?: "page" | "hero";
  position?: "fixed" | "absolute";
}) {
  const strength = variant === "hero" ? "opacity-40" : "opacity-15";

  return (
    <div
      aria-hidden
      className={`pointer-events-none inset-0 -z-10 overflow-hidden ${position}`}
    >
      {position === "fixed" && (
        <div className="absolute inset-0 bg-background" />
      )}
      <div
        className={`animate-aurora-1 absolute top-[-10%] left-[-10%] size-[42rem] rounded-full bg-[color:var(--glow-1)] blur-[110px] ${strength}`}
      />
      <div
        className={`animate-aurora-2 absolute top-[5%] right-[-15%] size-[38rem] rounded-full bg-[color:var(--glow-2)] blur-[110px] ${strength}`}
      />
      <div
        className={`animate-aurora-3 absolute bottom-[-20%] left-[20%] size-[36rem] rounded-full bg-[color:var(--glow-3)] blur-[120px] ${strength}`}
      />
    </div>
  );
}

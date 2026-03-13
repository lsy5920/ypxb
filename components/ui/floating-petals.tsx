const petals = [
  { left: "6%", size: "12px", delay: "0s", duration: "18s" },
  { left: "16%", size: "10px", delay: "3s", duration: "20s" },
  { left: "28%", size: "14px", delay: "7s", duration: "22s" },
  { left: "44%", size: "10px", delay: "1s", duration: "17s" },
  { left: "57%", size: "13px", delay: "5s", duration: "24s" },
  { left: "69%", size: "9px", delay: "2s", duration: "19s" },
  { left: "82%", size: "15px", delay: "8s", duration: "23s" },
  { left: "92%", size: "11px", delay: "4s", duration: "21s" },
];

export function FloatingPetals() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {petals.map((petal) => (
        <span
          key={`${petal.left}-${petal.delay}`}
          className="petal-drift absolute top-[-10%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.9),rgba(236,187,202,0.55)_52%,rgba(231,180,191,0.18))] blur-[1px]"
          style={{
            left: petal.left,
            width: petal.size,
            height: `calc(${petal.size} * 1.5)`,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
          }}
        />
      ))}
    </div>
  );
}

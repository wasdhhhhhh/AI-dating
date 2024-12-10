interface ProgressProps {
  current: number;
  total: number;
  phase: {
    name: string;
    color: string;
  };
}

export default function Progress({ current, total, phase }: ProgressProps) {
  const progress = (current / total) * 100;
  
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="h-1 bg-foreground/10">
        <div
          className="h-full transition-all duration-300 ease-in-out"
          style={{
            width: `${progress}%`,
            backgroundColor: phase.color,
          }}
        />
      </div>
      <div className="px-4 py-2 text-sm text-foreground/60">
        {phase.name} - {current}/{total}
      </div>
    </div>
  );
} 
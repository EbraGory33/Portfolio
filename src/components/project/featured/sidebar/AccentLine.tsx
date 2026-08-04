interface AccentLineProps {
  accent: string;
}

export function AccentLine({ accent }: AccentLineProps) {
  return (
    <div
      aria-hidden="true"
      className={`${accent} my-4 me-4 h-0.5 min-w-6 transition-all duration-300`}
    ></div>
  );
}

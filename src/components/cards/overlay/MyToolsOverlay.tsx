import { Icon } from "@iconify/react";
export function MyToolsOverlay() {
  const tools = [
    {
      name: "VS Code",
      icon: "logos:visual-studio-code",
      size: "size-24",
      iconSize: "size-12",
      delay: "delay-200",
    },
    {
      name: "OpenAI Codex",
      icon: "devicon:codex",
      size: "size-24",
      iconSize: "size-12",
      delay: "delay-100",
    },
    {
      name: "macOS Terminal",
      icon: "logos:terminal",
      size: "size-28",
      iconSize: "size-14",
      delay: "delay-0",
    },
    {
      name: "Chrome",
      icon: "logos:chrome",
      size: "size-24",
      iconSize: "size-12",
      delay: "delay-100",
    },
    {
      name: "GitHub Issues",
      icon: "skill-icons:github-dark",
      size: "size-24",
      iconSize: "size-12",
      delay: "delay-200",
    },
  ];

  return (
    <div className="size-full">
      <div className="mt-20 flex items-center justify-center gap-3 md:mt-24">
        {tools.map((tool) => (
          <div key={tool.name} className="inline-block text-center">
            <div
              className={`rounded-[20px] border-2 p-2 transition-all duration-500 group-hover:-translate-y-3 group-hover:border-indigo-400/60 ${tool.size} ${tool.delay} `}
            >
              <div className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0] shadow-inner transition-colors duration-500 group-hover:bg-indigo-50 dark:border-white/6 dark:bg-white/4 dark:group-hover:bg-indigo-500/10">
                <Icon icon={tool.icon} className="size-10" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

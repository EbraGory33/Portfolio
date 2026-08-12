import { getContributionColor } from "@/lib/github";
import { GithubWeek } from "@/lib/types";

type GithubContributionCalendarProps = {
  calendar: GithubWeek[];
};
export function GithubContributionCalendar({
  calendar,
}: GithubContributionCalendarProps) {
  const CELL = 12;
  const GAP = 4;

  const weekWidth = CELL + GAP;
  const height = 130;
  const width = calendar.length * weekWidth;

  const firstSunday = new Date(calendar[0].contributionDays[0].date);
  const months: {
    index: number;
    label: string;
  }[] = [];

  let previousMonth = -1;

  for (let weekIndex = 0; weekIndex < calendar.length; weekIndex++) {
    const sunday = new Date(firstSunday);
    sunday.setDate(firstSunday.getDate() + weekIndex * 7);

    if (sunday.getMonth() !== previousMonth) {
      previousMonth = sunday.getMonth();

      months.push({
        index: weekIndex,
        label: sunday.toLocaleString("default", {
          month: "short",
        }),
      });
    }
  }

  const last = months.at(-1);

  if (last && months.length > 1 && months[0].label === last.label) {
    if (calendar.length - (last.index + 1) >= 1) {
      months.shift();
    } else {
      months.pop();
    }
  }

  // console.log("months :", months);
  return (
    <div
      className="react-activity-calendar__scroll-container 2xl:flex 2xl:w-full 2xl:justify-center"
      style={{
        maxWidth: "100%",
        overflow: "auto hidden",
        paddingTop: "2px",
      }}
    >
      <svg
        className="react-activity-calendar__calendar"
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
      >
        <g className="react-activity-calendar__legend-month">
          {months.map(({ index, label }) => (
            <text
              key={index}
              x={index * weekWidth}
              y={0}
              dominantBaseline="hanging"
              fill="currentColor"
              className="text-base"
            >
              {label}
            </text>
          ))}
        </g>

        {calendar.map((week, weekIndex) => (
          <g
            key={weekIndex}
            transform={`translate(${weekIndex * weekWidth},0)`}
          >
            {week.contributionDays.map((day, dayIndex) => {
              const level = day.contributionCount;

              return (
                <rect
                  key={day.date}
                  x={0}
                  y={22 + dayIndex * 16}
                  width={CELL}
                  height={CELL}
                  rx={2}
                  fill={getContributionColor(level)}
                  data-date={day.date}
                  data-level={level}
                  style={{
                    stroke: "var(--github-contribution-stroke)",
                  }}
                />
              );
            })}
          </g>
        ))}
      </svg>
    </div>
  );
}

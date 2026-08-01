import { GithubWeek } from "@/lib/types";
import { getContributionColor } from "@/lib/github";

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

  let months = calendar
    .map((week, index) => {
      const date = new Date(
        week.contributionDays[week.contributionDays.length - 1].date,
      );

      return {
        index,
        label: date.toLocaleString("default", { month: "short" }),
        key: `${date.getFullYear()}-${date.getMonth()}`,
      };
    })
    .filter((month, i, arr) => i === 0 || month.key !== arr[i - 1].key);

  if (
    months.length > 1 &&
    months[0].label === months[months.length - 1].label
  ) {
    months = months.slice(1);
  }
  // console.log(months);
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
                    stroke: "rgba(255,255,255,.04)",
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

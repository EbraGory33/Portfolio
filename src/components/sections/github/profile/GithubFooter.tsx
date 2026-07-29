type GithubFooterProps = {
  total: number;
};
export function GithubFooter({ total }: GithubFooterProps) {
  return (
    <footer
      className="react-activity-calendar__footer"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "4px 16px",
        whiteSpace: "nowrap;",
      }}
    >
      <div className="react-activity-calendar__count">
        {total} contributions in the last year
      </div>
      <div
        className="react-activity-calendar__legend-colors"
        style={{
          marginLeft: "auto",
          display: "flex",
          alignItems: "center",
          gap: "3px",
        }}
      >
        <span style={{ marginRight: "0.4em" }}>Less</span>
        <svg width="12" height="12">
          <rect
            width="12"
            height="12"
            fill="#1B1C22"
            rx="2"
            ry="2"
            style={{ stroke: "rgba(255, 255, 255, 0.04)" }}
          ></rect>
        </svg>
        <svg width="12" height="12">
          <rect
            width="12"
            height="12"
            fill="#4F46E5"
            rx="2"
            ry="2"
            style={{ stroke: "rgba(255, 255, 255, 0.04)" }}
          ></rect>
        </svg>
        <svg width="12" height="12">
          <rect
            width="12"
            height="12"
            fill="#6366F1"
            rx="2"
            ry="2"
            style={{ stroke: "rgba(255, 255, 255, 0.04)" }}
          ></rect>
        </svg>
        <svg width="12" height="12">
          <rect
            width="12"
            height="12"
            fill="#818CF8"
            rx="2"
            ry="2"
            style={{ stroke: "rgba(255, 255, 255, 0.04)" }}
          ></rect>
        </svg>
        <svg width="12" height="12">
          <rect
            width="12"
            height="12"
            fill="#A5B4FC"
            rx="2"
            ry="2"
            style={{ stroke: "rgba(255, 255, 255, 0.04)" }}
          ></rect>
        </svg>
        <span style={{ marginLeft: "0.4em" }}>More</span>
      </div>
    </footer>
  );
}

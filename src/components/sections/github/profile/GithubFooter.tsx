export function GithubFooter() {
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
        1787 contributions in the last year
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
            fill="#27272a"
            rx="2"
            ry="2"
            style={{ stroke: "rgba(255, 255, 255, 0.04)" }}
          ></rect>
        </svg>
        <svg width="12" height="12">
          <rect
            width="12"
            height="12"
            fill="#312e81"
            rx="2"
            ry="2"
            style={{ stroke: "rgba(255, 255, 255, 0.04)" }}
          ></rect>
        </svg>
        <svg width="12" height="12">
          <rect
            width="12"
            height="12"
            fill="#4f46e5"
            rx="2"
            ry="2"
            style={{ stroke: "rgba(255, 255, 255, 0.04)" }}
          ></rect>
        </svg>
        <svg width="12" height="12">
          <rect
            width="12"
            height="12"
            fill="#818cf8"
            rx="2"
            ry="2"
            style={{ stroke: "rgba(255, 255, 255, 0.04)" }}
          ></rect>
        </svg>
        <svg width="12" height="12">
          <rect
            width="12"
            height="12"
            fill="#c7d2fe"
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

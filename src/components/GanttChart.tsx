const tasks = [
  { id: "FO-001", label: "Chicago → Denver", start: 0, width: 35, color: "bg-primary" },
  { id: "FO-002", label: "Denver → Phoenix", start: 30, width: 25, color: "bg-info" },
  { id: "FO-003", label: "Phoenix → LA", start: 55, width: 20, color: "bg-success" },
  { id: "FO-004", label: "LA → Portland", start: 70, width: 30, color: "bg-warning" },
];

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const GanttChart = () => {
  return (
    <div className="bg-card rounded-xl border border-border p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-foreground">Gantt Chart</h3>
        <div className="flex gap-1">
          {["Week", "Month"].map((t) => (
            <button
              key={t}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                t === "Week" ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:bg-muted"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline header */}
      <div className="flex mb-2 pl-28">
        {days.map((d) => (
          <div key={d} className="flex-1 text-[10px] text-muted-foreground text-center">{d}</div>
        ))}
      </div>

      {/* Bars */}
      <div className="space-y-2">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center gap-3">
            <div className="w-24 text-xs text-muted-foreground truncate">{task.label}</div>
            <div className="flex-1 h-7 bg-secondary rounded-md relative">
              <div
                className={`absolute top-0.5 bottom-0.5 rounded-md ${task.color} flex items-center px-2`}
                style={{ left: `${task.start}%`, width: `${task.width}%` }}
              >
                <span className="text-[9px] font-semibold text-primary-foreground truncate">{task.id}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GanttChart;

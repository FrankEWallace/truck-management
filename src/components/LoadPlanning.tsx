const loadItems = [
  { id: "FO-001", weight: "1,200kg", fill: 35, color: "bg-primary" },
  { id: "FO-002", weight: "890kg", fill: 25, color: "bg-info" },
  { id: "FO-003", weight: "650kg", fill: 18, color: "bg-success" },
  { id: "FO-004", weight: "430kg", fill: 12, color: "bg-warning" },
];

const LoadPlanning = () => {
  return (
    <div className="bg-card rounded-xl border border-border p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-foreground">Load Planning</h3>
        <span className="text-xs text-muted-foreground">Capacity: 90%</span>
      </div>

      {/* Visual load bar */}
      <div className="h-8 rounded-lg bg-secondary flex overflow-hidden mb-4">
        {loadItems.map((item) => (
          <div
            key={item.id}
            className={`${item.color} h-full flex items-center justify-center text-[10px] font-semibold text-primary-foreground`}
            style={{ width: `${item.fill}%` }}
          >
            {item.id}
          </div>
        ))}
        <div className="flex-1" />
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 gap-2">
        {loadItems.map((item) => (
          <div key={item.id} className="flex items-center gap-2 text-xs">
            <span className={`w-2.5 h-2.5 rounded-sm ${item.color}`} />
            <span className="text-foreground font-medium">{item.id}</span>
            <span className="text-muted-foreground">{item.weight}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadPlanning;

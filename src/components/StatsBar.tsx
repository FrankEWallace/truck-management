import { TrendingUp, TrendingDown } from "lucide-react";

const stats = [
  { label: "Revenue", value: "$63,200.00", trend: "+12.5%", up: true },
  { label: "Expenses", value: "$28,340.00", trend: "-3.2%", up: false },
  { label: "Net Profit", value: "$34,860.00", trend: "+18.1%", up: true },
  { label: "Active Orders", value: "47", trend: "+5", up: true },
];

const StatsBar = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {stats.map((s) => (
        <div key={s.label} className="bg-card rounded-xl border border-border p-4">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.label}</p>
          <div className="flex items-end justify-between mt-2">
            <p className="text-lg font-bold text-foreground">{s.value}</p>
            <span className={`flex items-center gap-0.5 text-[11px] font-semibold ${s.up ? "text-success" : "text-destructive"}`}>
              {s.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
              {s.trend}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsBar;

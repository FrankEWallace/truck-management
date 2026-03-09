import { Package } from "lucide-react";

const units = [
  { id: "ATT77920", type: "Container", size: "40ft", status: "Loaded" },
  { id: "ATT77921", type: "Flatbed", size: "48ft", status: "Empty" },
  { id: "ATT77922", type: "Reefer", size: "53ft", status: "Loaded" },
];

const FreightUnits = () => {
  return (
    <div className="glass rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-foreground">Freight Units</h3>
        <button className="text-xs text-primary font-medium hover:underline">Manage</button>
      </div>

      <div className="space-y-2.5">
        {units.map((u) => (
          <div key={u.id} className="flex items-center gap-3 p-2.5 rounded-lg bg-secondary/60 hover:bg-secondary transition-colors">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Package className="w-4 h-4 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-foreground">{u.id}</p>
              <p className="text-[10px] text-muted-foreground">{u.type} · {u.size}</p>
            </div>
            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
              u.status === "Loaded" ? "bg-success/15 text-success" : "bg-muted text-muted-foreground"
            }`}>
              {u.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreightUnits;

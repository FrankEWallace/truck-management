import { MapPin, Fuel, Calendar } from "lucide-react";
import truckImg from "@/assets/truck.png";

const stats = [
  { label: "Weight", value: "7,340", unit: "kg", icon: "⚖️" },
  { label: "Dimensions", value: "120", unit: "ft", icon: "📏" },
  { label: "Orders", value: "62", unit: "", icon: "📦" },
];

const TruckDetails = () => {
  return (
    <div className="bg-card rounded-xl border border-border p-5">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-lg font-bold text-foreground">Trucks Management</h2>
          <p className="text-xs text-muted-foreground mt-0.5">This page is about truck dispatcher activity</p>
        </div>
        <div className="flex gap-2">
          <button className="h-8 px-3 rounded-lg bg-secondary text-xs font-medium text-foreground hover:bg-muted transition-colors">
            Edit
          </button>
          <button className="h-8 px-3 rounded-lg bg-primary text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity">
            + Add Truck
          </button>
        </div>
      </div>

      {/* Truck card */}
      <div className="flex gap-5">
        <div className="relative w-[280px] h-[140px] bg-secondary rounded-xl overflow-hidden flex items-center justify-center">
          <img src={truckImg} alt="Truck" className="w-[90%] h-auto object-contain" />
          <div className="absolute top-2 left-2 flex items-center gap-1 bg-success/20 text-success rounded-full px-2 py-0.5 text-[10px] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-success" />
            Active
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-between">
          <div className="flex items-center gap-4">
            {stats.map((s) => (
              <div key={s.label} className="flex-1 bg-secondary rounded-xl p-3 text-center">
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{s.label}</p>
                <p className="text-xl font-bold text-foreground mt-1">
                  {s.value}
                  {s.unit && <span className="text-xs text-muted-foreground font-normal ml-0.5">{s.unit}</span>}
                </p>
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Chicago, IL</span>
            <span className="flex items-center gap-1"><Fuel className="w-3 h-3" /> 78% fuel</span>
            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Last service: Feb 12</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TruckDetails;

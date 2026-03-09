import { useState } from "react";
import { MapPin, Truck, Clock, Navigation, Phone, Radio, Fuel, Thermometer } from "lucide-react";

const vehicles = [
  { id: "T-1042", driver: "Mike R.", status: "Moving", speed: "62 mph", location: "I-10 W, near Tucson, AZ", fuel: 72, temp: "38°F", lat: 32.2, lng: -110.9, destination: "Phoenix, AZ", eta: "2h 15m" },
  { id: "T-1025", driver: "James L.", status: "Moving", speed: "58 mph", location: "I-5 S, near Salem, OR", fuel: 34, temp: "N/A", lat: 44.9, lng: -123.0, destination: "Portland, OR", eta: "45m" },
  { id: "T-1038", driver: "Dave W.", status: "Moving", speed: "55 mph", location: "I-40 E, near Nashville, TN", fuel: 58, temp: "N/A", lat: 36.1, lng: -86.7, destination: "Memphis, TN", eta: "3h 20m" },
  { id: "T-1015", driver: "Sarah K.", status: "Stopped", speed: "0 mph", location: "Loading Dock, Dallas, TX", fuel: 89, temp: "35°F", lat: 32.7, lng: -96.7, destination: "Houston, TX", eta: "4h 30m" },
  { id: "T-1033", driver: "Amy P.", status: "Stopped", speed: "0 mph", location: "Loading Dock, Boston, MA", fuel: 91, temp: "33°F", lat: 42.3, lng: -71.0, destination: "New York, NY", eta: "3h 45m" },
];

const events = [
  { time: "14:32", event: "T-1042 passed checkpoint AZ-042", type: "info" },
  { time: "14:18", event: "T-1025 fuel level warning (34%)", type: "warning" },
  { time: "14:05", event: "T-1038 entered Tennessee", type: "info" },
  { time: "13:52", event: "T-1015 started loading at Dallas dock", type: "success" },
  { time: "13:40", event: "T-1033 arrived at Boston loading dock", type: "success" },
  { time: "13:15", event: "T-1042 speed alert: exceeded 65mph limit", type: "warning" },
  { time: "12:58", event: "T-1025 completed rest stop", type: "info" },
];

const Tracking = () => {
  const [selected, setSelected] = useState(vehicles[0]);

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-lg sm:text-xl font-bold text-foreground">Live Tracking</h1>
        <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">Real-time GPS tracking for all fleet vehicles</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5 xl:h-[calc(100vh-200px)]">
        {/* Vehicle List */}
        <div className="glass rounded-xl overflow-hidden flex flex-col max-h-[300px] md:max-h-none">
          <div className="p-3 border-b border-border">
            <input className="w-full px-3 py-1.5 text-xs bg-muted/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground" placeholder="Search vehicles..." />
          </div>
          <div className="flex-1 overflow-y-auto">
            {vehicles.map((v) => (
              <button
                key={v.id}
                onClick={() => setSelected(v)}
                className={`w-full text-left px-4 py-3 border-b border-border transition-colors ${
                  selected.id === v.id ? "bg-primary/10" : "hover:bg-muted/30"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-foreground">{v.id}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${
                    v.status === "Moving" ? "bg-emerald-500/15 text-emerald-400" : "bg-amber-500/15 text-amber-400"
                  }`}>{v.status}</span>
                </div>
                <p className="text-[11px] text-muted-foreground">{v.driver}</p>
                <p className="text-[11px] text-muted-foreground truncate mt-0.5">{v.location}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Map Area */}
        <div className="md:col-span-1 xl:col-span-2 bg-card border border-border rounded-xl overflow-hidden relative min-h-[300px]">
          <div className="absolute inset-0 bg-[#1a1a2e]">
            <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid meet">
              {Array.from({ length: 20 }).map((_, i) => (
                <line key={`h${i}`} x1="0" y1={i * 30} x2="800" y2={i * 30} stroke="hsl(var(--border))" strokeWidth="0.5" opacity="0.3" />
              ))}
              {Array.from({ length: 27 }).map((_, i) => (
                <line key={`v${i}`} x1={i * 30} y1="0" x2={i * 30} y2="600" stroke="hsl(var(--border))" strokeWidth="0.5" opacity="0.3" />
              ))}
              <path d="M 150 280 Q 300 200 450 320 T 650 250" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" strokeDasharray="8 4" opacity="0.6" />
              <path d="M 200 150 Q 350 100 500 180" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" strokeDasharray="8 4" opacity="0.4" />
              <path d="M 500 350 Q 600 400 700 350" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" strokeDasharray="8 4" opacity="0.4" />
              {vehicles.map((v, i) => {
                const positions = [
                  { x: 350, y: 280 }, { x: 200, y: 150 }, { x: 520, y: 300 },
                  { x: 400, y: 380 }, { x: 620, y: 180 },
                ];
                const pos = positions[i];
                const isSelected = selected.id === v.id;
                return (
                  <g key={v.id} onClick={() => setSelected(v)} className="cursor-pointer">
                    {isSelected && <circle cx={pos.x} cy={pos.y} r="18" fill="hsl(var(--primary))" opacity="0.2">
                      <animate attributeName="r" values="18;24;18" dur="2s" repeatCount="indefinite" />
                    </circle>}
                    <circle cx={pos.x} cy={pos.y} r="8" fill={isSelected ? "hsl(var(--primary))" : v.status === "Moving" ? "#22c55e" : "#f59e0b"} stroke="white" strokeWidth="2" />
                    <text x={pos.x} y={pos.y - 14} textAnchor="middle" fill="white" fontSize="10" fontWeight="600">{v.id}</text>
                  </g>
                );
              })}
            </svg>
          </div>
          <div className="absolute top-3 left-3 bg-card/90 backdrop-blur border border-border rounded-lg px-3 py-2">
            <p className="text-[11px] text-muted-foreground">Live Vehicles</p>
            <p className="text-sm font-bold text-foreground">{vehicles.length} tracked</p>
          </div>
        </div>

        {/* Details Panel */}
        <div className="bg-card border border-border rounded-xl overflow-hidden flex flex-col">
          <div className="p-4 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
                <Truck className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground">{selected.id}</h3>
                <p className="text-[11px] text-muted-foreground">{selected.driver}</p>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <div className="space-y-3">
              {[
                { icon: MapPin, label: "Location", value: selected.location },
                { icon: Navigation, label: "Destination", value: selected.destination },
                { icon: Clock, label: "ETA", value: selected.eta },
                { icon: Radio, label: "Speed", value: selected.speed },
                { icon: Fuel, label: "Fuel Level", value: `${selected.fuel}%` },
                { icon: Thermometer, label: "Cargo Temp", value: selected.temp },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon className="w-3.5 h-3.5 text-muted-foreground" />
                    <span className="text-[11px] text-muted-foreground">{label}</span>
                  </div>
                  <span className="text-xs font-medium text-foreground">{value}</span>
                </div>
              ))}
            </div>

            <div>
              <div className="flex justify-between text-[11px] mb-1">
                <span className="text-muted-foreground">Fuel</span>
                <span className={`font-medium ${selected.fuel < 40 ? "text-amber-400" : "text-foreground"}`}>{selected.fuel}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className={`h-full rounded-full transition-all ${selected.fuel < 40 ? "bg-amber-500" : "bg-emerald-500"}`} style={{ width: `${selected.fuel}%` }} />
              </div>
            </div>

            <button className="w-full flex items-center justify-center gap-2 bg-primary/10 text-primary py-2 rounded-lg text-xs font-medium hover:bg-primary/20 transition-colors">
              <Phone className="w-3.5 h-3.5" /> Contact Driver
            </button>

            <div>
              <h4 className="text-xs font-semibold text-foreground mb-3">Event Log</h4>
              <div className="space-y-2.5">
                {events.filter(e => e.event.includes(selected.id)).length > 0
                  ? events.filter(e => e.event.includes(selected.id)).map((e, i) => (
                    <div key={i} className="flex gap-2">
                      <span className="text-[10px] text-muted-foreground w-10 shrink-0">{e.time}</span>
                      <div className={`w-1.5 h-1.5 rounded-full mt-1 shrink-0 ${
                        e.type === "warning" ? "bg-amber-500" : e.type === "success" ? "bg-emerald-500" : "bg-primary"
                      }`} />
                      <p className="text-[11px] text-muted-foreground">{e.event}</p>
                    </div>
                  ))
                  : <p className="text-[11px] text-muted-foreground">No recent events for this vehicle</p>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracking;

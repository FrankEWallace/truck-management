import { useState } from "react";
import { Bell, AlertTriangle, Info, CheckCircle, XCircle, Filter, Check, X, Clock } from "lucide-react";

const alerts = [
  { id: 1, title: "Engine temperature critical - Truck T-1018", message: "Engine temperature has exceeded 230°F. Immediate inspection required.", severity: "critical", time: "5 min ago", read: false, category: "Maintenance" },
  { id: 2, title: "Fuel level low - Truck T-1025", message: "Fuel level at 34%. Nearest fuel station: 12 miles ahead on I-5.", severity: "warning", time: "18 min ago", read: false, category: "Fuel" },
  { id: 3, title: "Delivery completed - Order FO-2845", message: "Truck T-1042 successfully delivered to Chicago distribution center.", severity: "success", time: "45 min ago", read: false, category: "Delivery" },
  { id: 4, title: "Speed limit exceeded - Truck T-1042", message: "Vehicle exceeded 65mph speed limit on I-10 for 8 minutes.", severity: "warning", time: "1 hr ago", read: true, category: "Safety" },
  { id: 5, title: "Scheduled maintenance due - Truck T-1033", message: "Oil change and brake inspection due in 500 miles.", severity: "info", time: "2 hr ago", read: true, category: "Maintenance" },
  { id: 6, title: "Route deviation detected - Truck T-1038", message: "Vehicle deviated from planned route by 15 miles near Nashville.", severity: "warning", time: "3 hr ago", read: true, category: "Route" },
  { id: 7, title: "New driver certification expired - Chris M.", message: "CDL-A certification expires in 14 days. Renewal required.", severity: "warning", time: "4 hr ago", read: true, category: "Compliance" },
  { id: 8, title: "Loading complete - Truck T-1015", message: "Loading completed at Dallas dock. Ready for departure.", severity: "success", time: "5 hr ago", read: true, category: "Delivery" },
  { id: 9, title: "Tire pressure warning - Truck T-1019", message: "Right rear tire pressure at 85 PSI (recommended: 100 PSI).", severity: "critical", time: "6 hr ago", read: true, category: "Maintenance" },
  { id: 10, title: "Weather advisory - Route I-40 East", message: "Heavy rain expected between Nashville and Memphis. Reduce speed.", severity: "info", time: "7 hr ago", read: true, category: "Weather" },
];

const severityConfig: Record<string, { icon: typeof AlertTriangle; color: string; bg: string }> = {
  critical: { icon: XCircle, color: "text-red-400", bg: "bg-red-500/15" },
  warning: { icon: AlertTriangle, color: "text-amber-400", bg: "bg-amber-500/15" },
  success: { icon: CheckCircle, color: "text-emerald-400", bg: "bg-emerald-500/15" },
  info: { icon: Info, color: "text-blue-400", bg: "bg-blue-500/15" },
};

const Alerts = () => {
  const [filter, setFilter] = useState("All");
  const [alertState, setAlertState] = useState(alerts);
  const filters = ["All", "Critical", "Warning", "Info", "Success"];
  const filtered = filter === "All" ? alertState : alertState.filter(a => a.severity.toLowerCase() === filter.toLowerCase());

  const markAsRead = (id: number) => {
    setAlertState(prev => prev.map(a => a.id === id ? { ...a, read: true } : a));
  };

  const dismissAlert = (id: number) => {
    setAlertState(prev => prev.filter(a => a.id !== id));
  };

  const markAllRead = () => {
    setAlertState(prev => prev.map(a => ({ ...a, read: true })));
  };

  const unreadCount = alertState.filter(a => !a.read).length;

  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-lg sm:text-xl font-bold text-foreground">Alerts</h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">{unreadCount} unread notifications</p>
        </div>
        <button onClick={markAllRead} className="flex items-center gap-2 glass text-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors self-start sm:self-auto">
          <Check className="w-4 h-4" /> Mark All Read
        </button>
      </div>

      {/* Severity Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: "Critical", count: alertState.filter(a => a.severity === "critical").length, ...severityConfig.critical },
          { label: "Warning", count: alertState.filter(a => a.severity === "warning").length, ...severityConfig.warning },
          { label: "Info", count: alertState.filter(a => a.severity === "info").length, ...severityConfig.info },
          { label: "Success", count: alertState.filter(a => a.severity === "success").length, ...severityConfig.success },
        ].map(s => (
          <div key={s.label} className="glass rounded-xl p-3 sm:p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className={`w-7 h-7 rounded-lg ${s.bg} flex items-center justify-center`}>
                <s.icon className={`w-3.5 h-3.5 ${s.color}`} />
              </div>
            </div>
            <p className="text-base sm:text-lg font-bold text-foreground">{s.count}</p>
            <p className="text-[11px] text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex gap-1.5 flex-wrap">
        {filters.map(f => (
           <button key={f} onClick={() => setFilter(f)}
             className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
               filter === f ? "glass" : "bg-muted border border-muted text-muted-foreground hover:text-foreground"
             }`}
           >{f}</button>
        ))}
      </div>

      {/* Alert List */}
      <div className="space-y-2">
        {filtered.map((alert) => {
          const config = severityConfig[alert.severity];
          const Icon = config.icon;
          return (
            <div key={alert.id} className={`bg-card border rounded-xl p-3 sm:p-4 transition-colors ${!alert.read ? "border-primary/30 bg-primary/[0.02]" : "border-border"}`}>
              <div className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-lg ${config.bg} flex items-center justify-center shrink-0 mt-0.5`}>
                  <Icon className={`w-4 h-4 ${config.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 sm:gap-4">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="text-xs sm:text-sm font-semibold text-foreground">{alert.title}</h4>
                        {!alert.read && <div className="w-2 h-2 rounded-full bg-primary shrink-0" />}
                      </div>
                      <p className="text-[11px] sm:text-xs text-muted-foreground mt-1">{alert.message}</p>
                      <div className="flex items-center gap-3 mt-2 flex-wrap">
                        <span className="text-[11px] text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" />{alert.time}</span>
                        <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${config.bg} ${config.color}`}>{alert.category}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      {!alert.read && (
                        <button onClick={() => markAsRead(alert.id)} className="p-1.5 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground" title="Mark as read">
                          <Check className="w-3.5 h-3.5" />
                        </button>
                      )}
                      <button onClick={() => dismissAlert(alert.id)} className="p-1.5 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground" title="Dismiss">
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {filtered.length === 0 && (
          <div className="glass rounded-xl p-8 text-center">
            <Bell className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">No alerts in this category</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Alerts;

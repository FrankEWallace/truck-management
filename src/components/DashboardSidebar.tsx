import { 
  LayoutDashboard, Truck, Package, MapPin, BarChart3, 
  Settings, Users, FileText, Bell, ChevronDown, LogOut
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: false },
  { icon: Truck, label: "Trucks", active: true },
  { icon: Package, label: "Freight", active: false },
  { icon: MapPin, label: "Tracking", active: false },
  { icon: Users, label: "Drivers", active: false },
  { icon: BarChart3, label: "Analytics", active: false },
  { icon: FileText, label: "Reports", active: false },
  { icon: Bell, label: "Alerts", active: false },
];

const DashboardSidebar = () => {
  return (
    <aside className="w-[220px] min-h-screen bg-sidebar flex flex-col">
      {/* Logo */}
      <div className="px-5 py-5 flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-lg bg-sidebar-primary flex items-center justify-center">
          <Truck className="w-4 h-4 text-sidebar-primary-foreground" />
        </div>
        <span className="text-sidebar-accent-foreground font-bold text-base tracking-tight">
          Truck&Co
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 mt-2 space-y-0.5">
        {navItems.map(({ icon: Icon, label, active }) => (
          <button
            key={label}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              active
                ? "bg-sidebar-primary text-sidebar-primary-foreground"
                : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            }`}
          >
            <Icon className="w-[18px] h-[18px]" />
            {label}
          </button>
        ))}
      </nav>

      {/* Bottom */}
      <div className="px-3 pb-4 space-y-1">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors">
          <Settings className="w-[18px] h-[18px]" />
          Settings
        </button>
        <div className="border-t border-sidebar-border my-2" />
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-8 h-8 rounded-full bg-sidebar-accent flex items-center justify-center text-xs font-semibold text-sidebar-accent-foreground">
            JD
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-sidebar-accent-foreground truncate">John Doe</p>
            <p className="text-[11px] text-sidebar-muted truncate">Dispatcher</p>
          </div>
          <ChevronDown className="w-3.5 h-3.5 text-sidebar-muted" />
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;

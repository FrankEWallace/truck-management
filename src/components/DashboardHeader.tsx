import { Search, Bell, ChevronRight } from "lucide-react";

const DashboardHeader = () => {
  return (
    <header className="h-14 bg-card border-b border-border flex items-center justify-between px-6">
      <div className="flex items-center gap-2 text-sm">
        <span className="text-muted-foreground">Trucks</span>
        <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
        <span className="text-foreground font-medium">Trucks Management</span>
      </div>

      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            className="h-9 w-52 rounded-lg bg-secondary pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground border-none outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
        
        {/* Dispatcher info */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary text-sm">
          <span className="text-muted-foreground">Dispatcher activity</span>
          <span className="font-semibold text-foreground">Joh. Smith</span>
        </div>

        {/* Notifications */}
        <button className="relative w-9 h-9 rounded-lg bg-secondary flex items-center justify-center hover:bg-muted transition-colors">
          <Bell className="w-4 h-4 text-muted-foreground" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary" />
        </button>

        {/* Report button */}
        <button className="h-9 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
          Report
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;

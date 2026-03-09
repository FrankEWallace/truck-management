import { Search, Bell, ChevronRight, Menu } from "lucide-react";

interface DashboardHeaderProps {
  onMenuToggle?: () => void;
}

const DashboardHeader = ({ onMenuToggle }: DashboardHeaderProps) => {
  return (
    <header className="h-14 bg-card border-b border-border flex items-center justify-between px-3 sm:px-6">
      <div className="flex items-center gap-2 text-sm">
        <button onClick={onMenuToggle} className="lg:hidden p-1.5 rounded-lg hover:bg-secondary text-muted-foreground mr-1">
          <Menu className="w-5 h-5" />
        </button>
        <span className="text-muted-foreground hidden sm:inline">Trucks</span>
        <ChevronRight className="w-3.5 h-3.5 text-muted-foreground hidden sm:block" />
        <span className="text-foreground font-medium text-xs sm:text-sm">Trucks Management</span>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        {/* Search - hidden on mobile */}
        <div className="relative hidden md:block">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            className="h-9 w-40 lg:w-52 rounded-lg bg-secondary pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground border-none outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
        
        {/* Dispatcher info - hidden on small */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary text-sm">
          <span className="text-muted-foreground">Dispatcher activity</span>
          <span className="font-semibold text-foreground">Joh. Smith</span>
        </div>

        {/* Notifications */}
        <button className="relative w-9 h-9 rounded-lg bg-secondary flex items-center justify-center hover:bg-muted transition-colors">
          <Bell className="w-4 h-4 text-muted-foreground" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary" />
        </button>

        {/* Report button */}
        <button className="h-9 px-3 sm:px-4 rounded-lg bg-primary text-primary-foreground text-xs sm:text-sm font-medium hover:opacity-90 transition-opacity">
          Report
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;

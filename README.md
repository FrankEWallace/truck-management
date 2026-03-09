# Truck Management System

A comprehensive fleet management dashboard for tracking trucks, freight orders, drivers, and real-time logistics operations.

## Overview

This application provides a complete solution for managing trucking operations, including real-time vehicle tracking, freight order management, driver coordination, and performance analytics. Built with modern web technologies, it offers an intuitive interface for fleet managers and dispatchers to monitor and optimize their logistics operations.

## Features

### Dashboard & Analytics
- Real-time KPI monitoring including revenue, active trucks, deliveries, and delivery times
- Revenue vs expenses tracking with interactive charts
- Fleet status visualization with pie charts and statistics
- Weekly delivery performance tracking
- Route-based revenue analysis
- Fuel consumption monitoring
- Fleet utilization and on-time delivery metrics

### Freight Management
- Comprehensive freight order tracking
- Route visualization with origin and destination mapping
- Order status monitoring (In Transit, Loading, Delivered, Pending)
- Weight and cargo type management
- Delivery progress tracking
- Driver assignment system
- ETA monitoring

### Live Tracking
- Real-time GPS tracking for all fleet vehicles
- Interactive map visualization
- Vehicle status monitoring (Moving, Stopped)
- Speed and location tracking
- Fuel level monitoring
- Temperature monitoring for refrigerated units
- Event timeline tracking
- Checkpoint notifications

### Driver Management
- Comprehensive driver profiles
- Driver status tracking (On Route, Loading, Off Duty)
- Performance ratings and trip history
- Contact information management
- License and experience tracking
- Vehicle assignment
- Grid and list view options

### Load Planning
- Gantt chart visualization for route planning
- Timeline management across multiple days
- Task scheduling and optimization
- Visual route progression

### Reports & Alerts
- Performance reporting
- Alert notifications for critical events
- Maintenance alerts
- Fuel level warnings
- Speed violation tracking

## Technology Stack

### Core Framework
- **React 18.3.1** - Modern UI library with hooks
- **TypeScript 5.8.3** - Type-safe development
- **Vite 5.4.19** - Fast build tool and dev server
- **React Router DOM 6.30.1** - Client-side routing

### UI Components
- **shadcn/ui** - High-quality, accessible component library
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide React** - Beautiful icon library
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **tailwindcss-animate** - Animation utilities

### Data Visualization
- **Recharts 2.15.4** - Composable charting library
- Charts: Bar charts, Pie charts, Area charts, Line charts

### State Management & Forms
- **TanStack Query 5.83.0** - Powerful data synchronization
- **React Hook Form 7.61.1** - Performant form management
- **Zod 3.25.76** - TypeScript-first schema validation

### UI Enhancement
- **Sonner** - Beautiful toast notifications
- **date-fns** - Modern date utility library
- **React Day Picker** - Flexible date picker
- **Embla Carousel** - Lightweight carousel library
- **Vaul** - Drawer component for mobile
- **next-themes** - Theme management

### Development Tools
- **ESLint** - Code linting
- **Vitest** - Unit testing framework
- **Testing Library** - Testing utilities
- **Bun** - Fast JavaScript runtime (lockfile present)

## Project Structure

```
src/
├── pages/              # Route pages
│   ├── Dashboard.tsx   # Main dashboard with KPIs and charts
│   ├── Freight.tsx     # Freight order management
│   ├── Tracking.tsx    # Live GPS tracking
│   ├── Drivers.tsx     # Driver management
│   ├── Analytics.tsx   # Performance analytics
│   ├── Reports.tsx     # Reporting interface
│   ├── Alerts.tsx      # Alert notifications
│   └── Index.tsx       # Landing/home page
├── components/         # Reusable components
│   ├── ui/            # shadcn/ui components
│   ├── DashboardHeader.tsx
│   ├── DashboardSidebar.tsx
│   ├── FreightOrders.tsx
│   ├── FreightUnits.tsx
│   ├── GanttChart.tsx
│   ├── LoadPlanning.tsx
│   ├── StatsBar.tsx
│   └── TruckDetails.tsx
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
└── assets/            # Images and static files
```

## Installation

### Prerequisites
- Node.js 16+ or Bun runtime
- npm, yarn, or bun package manager

### Setup Steps

1. Clone the repository:
```bash
git clone <repository-url>
cd truck-management
```

2. Install dependencies:
```bash
# Using npm
npm install

# Using bun
bun install
```

3. Start the development server:
```bash
# Using npm
npm run dev

# Using bun
bun run dev
```

4. Open your browser and navigate to:
```
```

## Available Scripts

- **`npm run dev`** - Start development server on port 8080
- **`npm run build`** - Build production bundle
- **`npm run build:dev`** - Build with development mode
- **`npm run preview`** - Preview production build
- **`npm run lint`** - Run ESLint code linting
- **`npm run test`** - Run tests once
- **`npm run test:watch`** - Run tests in watch mode

## Configuration

### Vite Configuration
The project uses Vite with the following setup:
- Port: 8080
- Host: IPv6 enabled
- HMR overlay: Disabled
- React SWC plugin for faster compilation
- Path alias: `@` maps to `./src`

### TypeScript
Multiple TypeScript configurations for different parts of the application:
- `tsconfig.json` - Base configuration
- `tsconfig.app.json` - Application code
- `tsconfig.node.json` - Node/build scripts

## Key Features Implementation

### Real-time Data
The application simulates real-time data for demonstration purposes. In production, this would connect to:
- GPS tracking APIs
- Fleet management databases
- IoT sensors for fuel and temperature monitoring

### Responsive Design
- Mobile-first approach
- Responsive grid layouts
- Collapsible sidebar for mobile devices
- Touch-friendly interface elements

### Accessibility
- Built on Radix UI primitives for accessibility
- Keyboard navigation support
- ARIA labels and semantic HTML
- High contrast theme support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Considerations

### Performance
- Code splitting with React Router
- Lazy loading for route components
- Optimized re-renders with React Query
- SWC for faster compilation

### Type Safety
- Full TypeScript coverage
- Zod schemas for runtime validation
- Type-safe routing with React Router
- Component prop validation

## Future Enhancements

Potential areas for expansion:
- Backend API integration
- Real-time WebSocket connections
- Mobile application (React Native)
- Advanced route optimization algorithms
- Integration with third-party logistics APIs
- Historical data analysis and reporting
- Multi-tenant support
- Role-based access control

## License

This project is private and proprietary.

## Support

For issues and questions, please contact the development team.

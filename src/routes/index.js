import async from "../components/Async";

import {
  Box as Boxicon,
  Bell as Bellicon,
  Compass as Compassicon,
  BookOpen as BookOpenIcon,
  Calendar as CalendarIcon,
  CheckSquare as CheckSquareIcon,
  Grid as GridIcon,
  Heart as HeartIcon,
  Layout as LayoutIcon,
  List as ListIcon,
  MapPin as MapPinIcon,
  Monitor as MonitorIcon,
  PieChart as PieChartIcon,
  Sliders as SlidersIcon,
  Users as UsersIcon
} from "react-feather";

// import { 
//   faLayerGroup as LayerIcon 
// } from "@fortawesome/react-fontawesome";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import {
//   faLayerGroup as LayerIcon
// } from "@fortawesome/free-solid-svg-icons";

// Landing
import Landing from "../pages/landing/Landing";

// Auth
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import ResetPassword from "../pages/auth/ResetPassword";
import Page404 from "../pages/auth/Page404";
import Page500 from "../pages/auth/Page500";

// Layouts
import Boxed from "../pages/layouts/Boxed";
import SidebarCollapsed from "../pages/layouts/SidebarCollapsed";
import SidebarSticky from "../pages/layouts/SidebarSticky";
import ThemeClassic from "../pages/layouts/ThemeClassic";
import ThemeCorporate from "../pages/layouts/ThemeCorporate";
import ThemeModern from "../pages/layouts/ThemeModern";

// Misc
import Blank from "../pages/misc/Blank";

// UI Elements
import Alerts from "../pages/ui-elements/Alerts";
import Buttons from "../pages/ui-elements/Buttons";
import Cards from "../pages/ui-elements/Cards";
import Carousel from "../pages/ui-elements/Carousel";
import EmbedVideo from "../pages/ui-elements/EmbedVideo";
import General from "../pages/ui-elements/General";
import Grid from "../pages/ui-elements/Grid";
import Modals from "../pages/ui-elements/Modals";
import Tabs from "../pages/ui-elements/Tabs";
import Typography from "../pages/ui-elements/Typography";

// Notifications
import Notifications from "../pages/notifications/Notifications";

// Pages
import Profile from "../pages/pages/Profile";
import Settings from "../pages/pages/Settings";
import Clients from "../pages/pages/Clients";
import Projects from "../pages/pages/Projects";
import Invoice from "../pages/pages/Invoice";
import Pricing from "../pages/pages/Pricing";
import Tasks from "../pages/pages/Tasks";
import Chat from "../pages/pages/Chat";

// Documentation
import Introduction from "../pages/docs/Introduction";
import GettingStarted from "../pages/docs/GettingStarted";
import EnvironmentVariables from "../pages/docs/EnvironmentVariables";
import Deployment from "../pages/docs/Deployment";
import StateManagement from "../pages/docs/StateManagement";
import Plugins from "../pages/docs/Plugins";
import Changelog from "../pages/docs/Changelog";

const Funding = async(() => import("../pages/dashboards/Funding"));

// Dashboards
const Default = async(() => import("../pages/dashboards/Default"));
const Analytics = async(() => import("../pages/dashboards/Analytics"));
const Ecommerce = async(() => import("../pages/dashboards/Ecommerce"));
const Crypto = async(() => import("../pages/dashboards/Crypto"));
const Social = async(() => import("../pages/dashboards/Social"));

// Forms
const Layouts = async(() => import("../pages/forms/Layouts"));
const BasicInputs = async(() => import("../pages/forms/BasicInputs"));
const AdvancedInputs = async(() => import("../pages/forms/AdvancedInputs"));
const InputGroups = async(() => import("../pages/forms/InputGroups"));
const Editors = async(() => import("../pages/forms/Editors"));
const Validation = async(() => import("../pages/forms/Validation"));
const Wizard = async(() => import("../pages/forms/Wizard"));

// Tables
const BootstrapTables = async(() => import("../pages/tables/Bootstrap"));
const PaginationTables = async(() => import("../pages/tables/Pagination"));
const RowSelectionTables = async(() => import("../pages/tables/RowSelection"));
const ExportCsvTables = async(() => import("../pages/tables/ExportCsv"));
const ExpandableRowsTables = async(() =>
  import("../pages/tables/ExpandableRows")
);

// Charts
const Chartjs = async(() => import("../pages/charts/Chartjs"));
const ApexCharts = async(() => import("../pages/charts/ApexCharts"));

// Icons
const FontAwesome = async(() => import("../pages/icons/FontAwesome"));
const Feather = async(() => import("../pages/icons/Feather"));

// Calendar
const Calendar = async(() => import("../pages/calendar/Calendar"));

// Maps
const VectorMaps = async(() => import("../pages/maps/VectorMaps"));
const GoogleMaps = async(() => import("../pages/maps/GoogleMaps"));

// Routes
const landingRoutes = {
  path: "/",
  name: "Landing Page",
  component: Landing,
  children: null
};

const dashboardRoutes = {
  path: "/dashboard",
  name: "Dashboards",
  header: "Pages",
  badgeColor: "primary",
  badgeText: "5",
  icon: SlidersIcon,
  containsHome: true,
  children: [
    {
      path: "/dashboard/default",
      name: "Default",
      component: Default
    },
    {
      path: "/dashboard/analytics",
      name: "Analytics",
      component: Analytics
    },    
    {
      path: "/dashboard/crypto",
      name: "Crypto",
      component: Crypto,
      badgeColor: "primary",
      badgeText: "New"
    }
  ]
};

const pageRoutes = {
  path: "/pages",
  name: "Pages",
  icon: LayoutIcon,
  children: [
    {
      path: "/pages/profile",
      name: "Profile",
      component: Profile
    },
    {
      path: "/pages/settings",
      name: "Settings",
      component: Settings
    },
    {
      path: "/pages/clients",
      name: "Clients",
      component: Clients
    },
    {
      path: "/pages/projects",
      name: "Projects",
      component: Projects
    },
    {
      path: "/pages/invoice",
      name: "Invoice",
      component: Invoice
    },
    {
      path: "/pages/pricing",
      name: "Pricing",
      component: Pricing
    },
    {
      path: "/pages/tasks",
      name: "Tasks",
      component: Tasks
    },
    {
      path: "/pages/chat",
      name: "Chat",
      component: Chat,
      badgeColor: "primary",
      badgeText: "New"
    },
    {
      path: "/pages/blank",
      name: "Blank Page",
      component: Blank
    }
  ]
};

const authRoutes = {
  path: "/auth",
  name: "Auth",
  icon: UsersIcon,
  badgeColor: "secondary",
  badgeText: "Special",
  children: [
    {
      path: "/auth/sign-in",
      name: "Sign In",
      component: SignIn
    },
    {
      path: "/auth/sign-up",
      name: "Sign Up",
      component: SignUp
    },
    {
      path: "/auth/reset-password",
      name: "Reset Password",
      component: ResetPassword
    },
    {
      path: "/auth/404",
      name: "404 Page",
      component: Page404
    },
    {
      path: "/auth/500",
      name: "500 Page",
      component: Page500
    }
  ]
};

const layoutRoutes = {
  path: "/layouts",
  name: "Layouts",
  icon: MonitorIcon,
  children: [
    {
      path: "/layouts/sidebar-sticky",
      name: "Sticky Sidebar",
      component: SidebarSticky
    },
    {
      path: "/layouts/sidebar-collapsed",
      name: "Sidebar Collapsed",
      component: SidebarCollapsed
    },
    {
      path: "/layouts/boxed",
      name: "Boxed Layout",
      component: Boxed
    },
    {
      path: "/layouts/theme-classic",
      name: "Classic Theme",
      component: ThemeClassic
    },
    {
      path: "/layouts/theme-corporate",
      name: "Corporate Theme",
      component: ThemeCorporate,
      badgeColor: "primary",
      badgeText: "New"
    },
    {
      path: "/layouts/theme-modern",
      name: "Modern Theme",
      component: ThemeModern,
      badgeColor: "primary",
      badgeText: "New"
    }
  ]
};

const documentationRoutes = {
  path: "/docs",
  name: "Documentation",
  icon: BookOpenIcon,
  children: [
    {
      path: "/docs/introduction",
      name: "Introduction",
      component: Introduction
    },
    {
      path: "/docs/getting-started",
      name: "Getting Started",
      component: GettingStarted
    },
    {
      path: "/docs/environment-variables",
      name: "Environment Variables",
      component: EnvironmentVariables
    },
    {
      path: "/docs/deployment",
      name: "Deployment",
      component: Deployment
    },
    {
      path: "/docs/state-management",
      name: "State Management",
      component: StateManagement
    },
    {
      path: "/docs/plugins",
      name: "Plugins",
      component: Plugins
    },
    {
      path: "/docs/changelog",
      name: "Changelog",
      component: Changelog
    }
  ]
};

const uiRoutes = {
  path: "/ui",
  name: "UI Elements",
  header: "Tools & Components",
  icon: GridIcon,
  children: [
    {
      path: "/ui/alerts",
      name: "Alerts",
      component: Alerts
    },
    {
      path: "/ui/buttons",
      name: "Buttons",
      component: Buttons
    },
    {
      path: "/ui/cards",
      name: "Cards",
      component: Cards
    },
    {
      path: "/ui/carousel",
      name: "Carousel",
      component: Carousel
    },
    {
      path: "/ui/embed-video",
      name: "Embed Video",
      component: EmbedVideo
    },
    {
      path: "/ui/general",
      name: "General",
      component: General,
      badgeColor: "info",
      badgeText: "10+"
    },
    {
      path: "/ui/grid",
      name: "Grid",
      component: Grid
    },
    {
      path: "/ui/modals",
      name: "Modals",
      component: Modals
    },
    {
      path: "/ui/tabs",
      name: "Tabs",
      component: Tabs
    },
    {
      path: "/ui/typography",
      name: "Typography",
      component: Typography
    }
  ]
};

const iconRoutes = {
  path: "/icons",
  name: "Icons",
  icon: HeartIcon,
  badgeColor: "info",
  badgeText: "1500+",
  children: [
    {
      path: "/icons/feather",
      name: "Feather",
      component: Feather
    },
    {
      path: "/icons/font-awesome",
      name: "Font Awesome",
      component: FontAwesome
    }
  ]
};

const formRoutes = {
  path: "/forms",
  name: "Forms",
  icon: CheckSquareIcon,
  children: [
    {
      path: "/forms/layouts",
      name: "Layouts",
      component: Layouts
    },
    {
      path: "/forms/basic-inputs",
      name: "Basic Inputs",
      component: BasicInputs
    },
    {
      path: "/forms/input-groups",
      name: "Input Groups",
      component: InputGroups
    }
  ]
};

const tableRoutes = {
  path: "/tables",
  name: "Tables",
  icon: ListIcon,
  component: BootstrapTables,
  children: null
};

const formPluginsRoutes = {
  path: "/form-plugins",
  name: "Form Plugins",
  icon: CheckSquareIcon,
  header: "Plugin & Addons",
  children: [
    {
      path: "/form-plugins/advanced-inputs",
      name: "Advanced Inputs",
      component: AdvancedInputs
    },
    {
      path: "/form-plugins/editors",
      name: "Editors",
      component: Editors
    },
    {
      path: "/form-plugins/validation",
      name: "Validation",
      component: Validation
    },
    {
      path: "/form-plugins/wizard",
      name: "Wizard",
      component: Wizard
    }
  ]
};

const advancedTablesRoutes = {
  path: "/advanced-tables",
  name: "Advanced Tables",
  icon: ListIcon,
  children: [
    {
      path: "/advanced-tables/pagination",
      name: "Pagination",
      component: PaginationTables
    },
    {
      path: "/advanced-tables/row-selection",
      name: "Row Selection",
      component: RowSelectionTables
    },
    {
      path: "/advanced-tables/expandable-rows",
      name: "Expandable Rows",
      component: ExpandableRowsTables
    },
    {
      path: "/advanced-tables/export-csv",
      name: "Export CSV",
      component: ExportCsvTables
    }
  ]
};

const chartRoutes = {
  path: "/charts",
  name: "Charts",
  icon: PieChartIcon,
  badgeColor: "primary",
  badgeText: "New",
  children: [
    {
      path: "/charts/chartjs",
      name: "Chart.js",
      component: Chartjs
    },
    {
      path: "/charts/apexcharts",
      name: "ApexCharts",
      component: ApexCharts,
      badgeColor: "primary",
      badgeText: "New"
    }
  ]
};


// This route is not visisble in the sidebar
const privateRoutes = {
  path: "/private",
  name: "Private",
  children: [
    {
      path: "/private/blank",
      name: "Blank Page",
      component: Blank
    }
  ]
};

// Dashboard specific routes
export const dashboard = [
  dashboardRoutes,
  pageRoutes,
  layoutRoutes,
  documentationRoutes,
  uiRoutes,
  iconRoutes,
  formRoutes,
  tableRoutes,
  formPluginsRoutes,
  advancedTablesRoutes,
  chartRoutes,  
  privateRoutes
];

// Landing specific routes
export const landing = [landingRoutes];

// Auth specific routes
export const page = [authRoutes];


const fundingRoute = {
  path: "/dashboard/analytics",
  name: "Funding",
  icon: Boxicon,
  component: Funding,
  children: null
};

const monitorRoute = {
  path: "/advanced-tables/pagination",
  name: "Monitor",
  icon: Compassicon,
  component: PaginationTables,
  children: null
  // path: "/dashboard/analytics",
  //     name: "Analytics",
  //     component: Analytics
};


//Compass

// All routes
export default [
  fundingRoute,
  monitorRoute,
  dashboardRoutes,
  pageRoutes,
  authRoutes,
  layoutRoutes,
  documentationRoutes,
  uiRoutes,
  iconRoutes,
  formRoutes,
  tableRoutes,
  formPluginsRoutes,
  advancedTablesRoutes,
  chartRoutes,
  // mapRoutes,
  // calendarRoutes
];

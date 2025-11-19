import { IconHome } from "@tabler/icons-react";

/**
 * `navbarRoutes` defines the routes for the application's navigation bar.
 *
 * Note: The `label` values are keys used for looking up translated strings in
 * the app's localization files.
 */
const navbarRoutes = [
  {
    icon: <IconHome />,
    label: "routes.home",
    route: "/",
  },
];

export default navbarRoutes;

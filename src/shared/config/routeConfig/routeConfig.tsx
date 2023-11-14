import { HomePage } from 'pages/Homepage';
import { Onboarding } from 'pages/Onboarding';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  ONBOARDING = 'onboarding',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ONBOARDING]: '/onboarding',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <HomePage />,
  },
  [AppRoutes.ONBOARDING]: {
    path: RoutePath.onboarding,
    element: <Onboarding />,
  },
};

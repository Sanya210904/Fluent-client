import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

function AppRouter() {
  return (
    <Routes>
      {Object.entries(routeConfig).map(([route, { element, path }]) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
}

export default AppRouter;

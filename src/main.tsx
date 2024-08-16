import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject
} from "react-router-dom";
import './assets/css/style.css';
import Root from './routes/root';
import Index from './routes';
import Question from './routes/question';
import Menu from './routes/menu';
import Serie from './routes/serie';
import Serie80 from './routes/serie80';
import Serie90 from './routes/serie90';
import ErrorPage from './error-page';

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "menu",
            element: <Menu />,
          },
          {
            path: "question",
            element: <Question />,
          },
          {
            path: "serie",
            element: <Serie />,
          },
          {
            path: "serie90",
            element: <Serie90 />,
          },
          {
            path: "serie80",
            element: <Serie80 />,
          },
        ]
      }
    ]
  },
];

const router = createBrowserRouter(routes);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

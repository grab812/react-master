import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./screens/Home";
import About from "./screens/About";
import NotFound from "./screens/NotFound";
import User from "./screens/users/User";
import Coins from "./screens/coins/Coins";
import CoinDetail from "./screens/coins/CoinDetail";
import Followers from "./screens/users/Followers";
import Movies from "./screens/Movies";
import Price from "./screens/coins/Price";
import Chart from "./screens/coins/Chart";
import Trello from "./screens/trello/Trello";
import Contact from "./screens/Contact";
import Header from "./components/Header";
import ToDoList from "./screens/trello/ToDoList";
const router = createBrowserRouter([
  {
    path: `${process.env.PUBLIC_URL}`,
    element: <Header />,
    errorElement: <NotFound />,
  },

  {
    path: `${process.env.PUBLIC_URL}/about`,
    element: <About />,
  },
  {
    path: `${process.env.PUBLIC_URL}/coins`,
    element: <Coins />,
  },
  {
    path: `${process.env.PUBLIC_URL}/coins/:coinId/*`,
    element: <CoinDetail />,
    children: [
      {
        path: `price`,
        element: <Price />,
      },
      {
        path: `chart`,
        element: <Chart />,
      },
    ],
  },
  {
    path: `${process.env.PUBLIC_URL}/movies`,
    element: <Movies />,
  },
  {
    path: `${process.env.PUBLIC_URL}/trello`,
    element: <ToDoList />,
  },
  {
    path: `${process.env.PUBLIC_URL}/contact`,
    element: <Contact />,
  },
  {
    path: `${process.env.PUBLIC_URL}/home`,
    element: <Home />,
  },
  {
    path: `${process.env.PUBLIC_URL}/users/:userId`,
    element: <User />,
    children: [
      {
        path: `followers`,
        element: <Followers />,
      },
    ],
  },
]);
// const router = createBrowserRouter([
//     {
//       path: `${process.env.PUBLIC_URL}`,
//       element: <Root />,
//       errorElement: <NotFound />,
//     },
//     {
//       path: `${process.env.PUBLIC_URL}/about`,
//       element: <About />,
//     },
//     {
//       path: `${process.env.PUBLIC_URL}/movies`,
//       element: <Movies />,
//     },
//     {
//       path: `${process.env.PUBLIC_URL}/coins`,
//       element: <Coins />,
//     },
//     {
//       path: `${process.env.PUBLIC_URL}/coins/:coinId/*`,
//       element: <CoinDetail />,
//       children: [
//           {
//               path:`price`,
//               element: <Price/>
//           },
//           {
//               path:`chart`,
//               element: <Chart/>
//           }
//       ]
//     },
//     {
//       path: `${process.env.PUBLIC_URL}/home`,
//       element: <Home />,
//     },
//     {
//       path: `${process.env.PUBLIC_URL}/users/:userId`,
//       element: <User />,
//       children: [
//         {
//           path: `followers`,
//           element: <Followers />,
//         },
//       ],
//     },
//   ]);
export default router;

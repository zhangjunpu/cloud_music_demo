import React from "react";
import { Redirect } from "react-router-dom";

const Discover = React.lazy(() => import("@/pages/discover"));
const Recommend = React.lazy(() => import("@/pages/discover/c-pages/recommend"));
const Ranking = React.lazy(() => import("@/pages/discover/c-pages/ranking"));
const SongList = React.lazy(() => import("@/pages/discover/c-pages/songlist"));
const DJRadio = React.lazy(() => import("@/pages/discover/c-pages/djradio"));
const Artist = React.lazy(() => import("@/pages/discover/c-pages/artist"));
const Album = React.lazy(() => import("@/pages/discover/c-pages/album"));
const Player = React.lazy(() => import("@/pages/player"));
const Mine = React.lazy(() => import("@/pages/mine"));
const Follow = React.lazy(() => import("@/pages/follow"));

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  {
    path: "/discover",
    component: Discover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      {
        path: "/discover/recommend",
        component: Recommend,
      },
      {
        path: "/discover/ranking",
        component: Ranking,
      },
      {
        path: "/discover/songlist",
        component: SongList,
      },
      {
        path: "/discover/djradio",
        component: DJRadio,
      },
      {
        path: "/discover/artist",
        component: Artist,
      },
      {
        path: "/discover/album",
        component: Album,
      },
      {
        path: "/discover/player",
        component: Player,
      },
    ],
  },
  {
    path: "/mine",
    component: Mine,
  },
  {
    path: "/follow",
    component: Follow,
  },
];

export default routes;

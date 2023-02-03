import Discover from "@/pages/discover";
import Recommend from "@/pages/discover/c-pages/recommend";
import Ranking from "@/pages/discover/c-pages/ranking";
import SongList from "@/pages/discover/c-pages/songlist";
import DJRadio from "@/pages/discover/c-pages/djradio";
import Artist from "@/pages/discover/c-pages/artist";
import Album from "@/pages/discover/c-pages/album";
import Mine from "@/pages/mine";
import Follow from "@/pages/follow";
import { Redirect } from "react-router-dom";

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

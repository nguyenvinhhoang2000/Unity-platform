import React from "react";

import IconAdd from "@/public/icons/IconAdd";
import IconChat from "@/public/icons/IconChat";
import IconDocument from "@/public/icons/IconDocument";
import IconGamePlay from "@/public/icons/IconGamePlay";
import IconProfile from "@/public/icons/IconProfile";
import IconSetting from "@/public/icons/IconSetting";
import IconTrending from "@/public/icons/IconTrending";
import IconVideo from "@/public/icons/IconVideo";

import { ACTIVE_STATUS, LOCATIONS } from ".";

export const NEW_FEEDS = [
  {
    href: LOCATIONS.NEWS,
    label: "New Feeds",
    icon: <IconGamePlay />,
  },
  {
    href: LOCATIONS.TRENDING,
    label: "Trending",
    icon: <IconTrending />,
  },
  {
    href: LOCATIONS.FOLLOWING,
    label: "Following",
    icon: <IconProfile />,
  },
  {
    href: LOCATIONS.YOUR_VIDEO,
    label: "Your Videos",
    icon: <IconVideo />,
    rightIcon: <IconAdd />,
  },
  {
    href: LOCATIONS.PLAYLIST,
    label: "Playlist",
    icon: <IconDocument />,
  },
];

export const UNITY_GAMING = [
  {
    href: LOCATIONS.CHAT,
    label: "Chat",
    icon: <IconChat />,
  },
  {
    href: LOCATIONS.SETTINGS,
    label: "Settings",
    icon: <IconSetting />,
  },
];

export const USER_LIST = [
  {
    _id: 1,
    name: "Dylan Hodges",
    activeStatus: ACTIVE_STATUS.STREAMING,
    image: "/images/avatar/avatar-1.png",
  },
  {
    _id: 2,
    name: "Vincent Parks",
    activeStatus: ACTIVE_STATUS.ONLINE,
    image: "/images/avatar/avatar-2.png",
  },
  {
    _id: 3,
    name: "Richard Bowers",
    activeStatus: ACTIVE_STATUS.STREAMING,
    image: "/images/avatar/avatar-3.png",
  },
  {
    _id: 4,
    name: "Isaac Lambert",
    activeStatus: ACTIVE_STATUS.STREAMING,
    image: "/images/avatar/avatar-4.png",
  },
  {
    _id: 5,
    name: "Lillie Nash",
    activeStatus: ACTIVE_STATUS.ONLINE,
    image: "/images/avatar/avatar-5.png",
  },
  {
    _id: 6,
    name: "Edith Cain",
    activeStatus: ACTIVE_STATUS.ONLINE,
    image: "/images/avatar/avatar-6.png",
  },
  {
    _id: 7,
    name: "Jerry Sherman",
    activeStatus: ACTIVE_STATUS.STREAMING,
    image: "/images/avatar/avatar-7.png",
  },
];

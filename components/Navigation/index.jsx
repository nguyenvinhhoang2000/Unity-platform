"use client";

import React, { useCallback, useEffect } from "react";
import classNames from "classnames/bind";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useBoolean } from "usehooks-ts";

import MenuItem from "@/components/MenuItem";

import IconAdd from "@/public/icons/IconAdd";
import IconChat from "@/public/icons/IconChat";
import IconDocument from "@/public/icons/IconDocument";
import IconGamePlay from "@/public/icons/IconGamePlay";
import IconProfile from "@/public/icons/IconProfile";
import IconSetting from "@/public/icons/IconSetting";
import IconTrending from "@/public/icons/IconTrending";
import IconVideo from "@/public/icons/IconVideo";

// import PropTypes from 'prop-types';
import styles from "./Navigation.module.scss";

const cx = classNames.bind(styles);

const NEW_FEEDS = [
  {
    href: "/news",
    label: "New Feeds",
    icon: <IconGamePlay />,
  },
  {
    href: "/trending",
    label: "Trending",
    icon: <IconTrending />,
  },
  {
    href: "/following",
    label: "Following",
    icon: <IconProfile />,
  },
  {
    href: "/your-videos",
    label: "Your Videos",
    icon: <IconVideo />,
    rightIcon: <IconAdd />,
  },
  {
    href: "/playlist",
    label: "Playlist",
    icon: <IconDocument />,
  },
];

const UNITY_GAMING = [
  {
    href: "/chat",
    label: "Chat",
    icon: <IconChat />,
  },
  {
    href: "/settings",
    label: "Settings",
    icon: <IconSetting />,
  },
];

function Navigation() {
  const { value: isOpen, setFalse: setIsActive, toggle } = useBoolean(false);
  const pathname = usePathname();
  const [activeNav, setActiveNav] = React.useState(pathname);

  const onMouseLeaveNavWrapper = useCallback(() => {
    setActiveNav(pathname);
  }, [pathname]);

  useEffect(() => {
    setIsActive(false);
  }, [pathname]);

  return (
    <div className="flex flex-col pt-10 px-10 w-[256px] h-screen shadow-navigation">
      <div className="flex items-center gap-[3px] mb-9">
        <Image
          src="/images/logo.svg"
          priority
          width={141}
          height={32}
          alt="logo"
          className="w-[141px] h-[32px] aspect-[141/32] object-cover"
        />
        <button
          type="button"
          onClick={toggle}
          className="bg-transparent outline-none w-fit h-fit"
        >
          <span className={cx("Burger", isOpen && "Active")} />
        </button>
      </div>

      <div
        className="flex flex-col gap-8"
        onMouseLeave={onMouseLeaveNavWrapper}
      >
        <div>
          <p className="text-caption-2 text-neutral-deactive h-8">New Feeds</p>

          <div className="flex flex-col pb-[31px] border-b border-solid border-grey">
            {NEW_FEEDS.map((item) => (
              <MenuItem
                key={item.label}
                href={item.href}
                icon={item.icon}
                rightIcon={item.rightIcon}
                activeNav={activeNav}
                setActiveNav={setActiveNav}
              >
                {item.label}
              </MenuItem>
            ))}
          </div>
        </div>
        <div>
          <p className="text-caption-2 text-neutral-deactive h-8">
            Unity Gaming
          </p>

          <div className="flex flex-col">
            {UNITY_GAMING.map((item) => (
              <MenuItem
                key={item.label}
                href={item.href}
                icon={item.icon}
                activeNav={activeNav}
                setActiveNav={setActiveNav}
              >
                {item.label}
              </MenuItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

Navigation.propTypes = {};

export default Navigation;

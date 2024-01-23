"use client";

import React, { useCallback, useEffect } from "react";
import classNames from "classnames/bind";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useBoolean } from "usehooks-ts";

import MenuItem from "@/components/MenuItem";
import UserNav from "@/components/UserNav";

import { NEW_FEEDS, UNITY_GAMING, USER_LIST } from "@/constants/faker";
import IconDownload from "@/public/icons/IconDownload";
import IconMoon from "@/public/icons/IconMoon";
import IconSun from "@/public/icons/IconSun";

// import PropTypes from 'prop-types';
import styles from "./Navigation.module.scss";

const cx = classNames.bind(styles);

function Navigation() {
  const { value: isOpen, setFalse: setIsActive, toggle } = useBoolean(false);
  const { value: isDarkMode, toggle: toggleDarkMode } = useBoolean(false);
  const pathname = usePathname();
  const [activeNav, setActiveNav] = React.useState(pathname);

  const onMouseLeaveNavWrapper = useCallback(() => {
    setActiveNav(pathname);
  }, [pathname]);

  useEffect(() => {
    setIsActive(false);
  }, [pathname]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  return (
    <div className="flex flex-col pt-[46px] lg:pt-10 w-[96px] lg:w-[256px] h-screen shadow-navigation dark:shadow-navigation-dark transition-shadow duration-300">
      <div className="flex items-center gap-[3px] px-8 lg:px-10 mb-9">
        <Image
          src="/images/logo.svg"
          priority
          width={141}
          height={32}
          alt="logo"
          className="w-[141px] h-[32px] aspect-[141/32] object-cover hidden lg:flex"
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
        className="flex flex-col gap-8 px-5 lg:px-10 overflow-y-auto no-scrollbar"
        onMouseLeave={onMouseLeaveNavWrapper}
      >
        <div>
          <p className="flex justify-center text-caption-2 text-neutral-deactive h-8">
            <span className="hidden lg:flex w-fit">New&nbsp;</span>Feeds
          </p>

          <div className="flex flex-col pb-[31px] border-b border-solid border-grey-main dark:border-grey-o-10 transition-color duration-300">
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
          <p className="text-caption-2 text-neutral-deactive h-8">Following</p>

          <div className="flex flex-col pb-[31px] border-b border-solid border-grey-main dark:border-grey-o-10 transition-color duration-300">
            {USER_LIST.map((item) => (
              <UserNav key={item._id} userInfo={item} />
            ))}
          </div>
        </div>
        <div>
          <p className="flex justify-center h-8 text-caption-2 text-neutral-deactive">
            <span className="hidden lg:flex w-fit">Unity&nbsp;</span>Gaming
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

      <div className="flex justify-between items-center px-4 lg:px-10 py-6 shadow-[0px_1px_0px_0px_rgba(0,0,0,0.05)_inset] dark:shadow-[0px_1px_0px_0px_rgba(228,228,228,0.1)_inset] transition-shadow duration-300">
        <AnimatePresence mode="wait">
          <div className="hidden lg:flex">
            {isDarkMode && (
              <motion.div
                initial={{ scale: 0, transition: { duration: 0.3 } }}
                animate={{ scale: 1 }}
                // exit={{ scale: 0, transition: { duration: 0.3 } }}
              >
                <IconMoon className={cx("IconMoon")} />
              </motion.div>
            )}
            {!isDarkMode && (
              <motion.div
                initial={{ scale: 0, transition: { duration: 0.3 } }}
                animate={{ scale: 1 }}
                // exit={{ scale: 0, transition: { duration: 0.3 } }}
              >
                <IconSun className={cx("IconSun")} />
              </motion.div>
            )}
          </div>
        </AnimatePresence>

        <button
          type="button"
          onClick={toggleDarkMode}
          className={cx("DarkModeWrapper", isDarkMode && "DarkModeActive")}
        >
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 700, damping: 30 }}
            className={cx("DarkMode")}
          />
        </button>

        <IconDownload className={cx("IconDownload", "hidden lg:flex")} />
      </div>
    </div>
  );
}

Navigation.propTypes = {};

export default Navigation;

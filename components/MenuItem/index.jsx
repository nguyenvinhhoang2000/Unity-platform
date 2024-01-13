import React, { useCallback } from "react";
import classNames from "classnames/bind";
import { motion } from "framer-motion";
import Link from "next/link";
import PropTypes from "prop-types";

import { INIT_VALUES } from "@/constants";

import styles from "./MenuItem.module.scss";

const cx = classNames.bind(styles);

function MenuItem({
  children,
  href = "#",
  activeNav = "/",
  icon = null,
  rightIcon = null,
  setActiveNav = INIT_VALUES.FUNCTION,
}) {
  const onMouseEnter = useCallback(() => setActiveNav(href), [href]);
  return (
    <Link
      onMouseEnter={onMouseEnter}
      href={href}
      className={cx("MenuItem", activeNav === href && "Active")}
    >
      {icon && <div className={cx("MenuItemIcon")}>{icon}</div>}
      <div className="flex flex-1 justify-between items-center">
        <span className="flex text-menu whitespace-nowrap">{children}</span>
        {rightIcon && <div className={cx("MenuItemIcon")}>{rightIcon}</div>}
      </div>
      {activeNav === href && (
        <motion.div className={cx("MenuItemBackground")} layoutId="MenuItem" />
      )}
    </Link>
  );
}

MenuItem.propTypes = {
  href: PropTypes.string.isRequired,
  activeNav: PropTypes.string,

  icon: PropTypes.node,
  rightIcon: PropTypes.node,
  children: PropTypes.node.isRequired,
  setActiveNav: PropTypes.func,
};

export default MenuItem;

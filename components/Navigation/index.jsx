"use client";

import React, { useEffect } from "react";
import classNames from "classnames/bind";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useBoolean } from "usehooks-ts";

// import PropTypes from 'prop-types';
import styles from "./Navigation.module.scss";

const cx = classNames.bind(styles);

function Navigation() {
  const { value: isOpen, setFalse: setIsActive, toggle } = useBoolean(false);
  const pathname = usePathname();
  useEffect(() => {
    setIsActive(false);
  }, [pathname]);

  return (
    <div className="flex flex-col pt-10 px-10 w-[256px] h-screen shadow-navigation">
      <div className="flex items-center gap-[3px]">
        <Image
          src="/images/logo.svg"
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
    </div>
  );
}

Navigation.propTypes = {};

export default Navigation;

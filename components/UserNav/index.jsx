import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

import { ACTIVE_STATUS, INIT_VALUES, LOCATIONS } from "@/constants";
import IconLive from "@/public/icons/IconLive";

function UserNav({ userInfo = INIT_VALUES.OBJECT }) {
  const renderActiveStatus = useMemo(() => {
    switch (userInfo.activeStatus) {
      case ACTIVE_STATUS.ONLINE:
        return (
          <div className="flex justify-center items-center w-6 h-6">
            <div className="w-2 h-2 rounded-full bg-success-main" />
          </div>
        );

      case ACTIVE_STATUS.OFFLINE:
        return (
          <div className="flex justify-center items-center w-6 h-6">
            <div className="w-2 h-2 rounded-full bg-neutral-deactive" />
          </div>
        );

      case ACTIVE_STATUS.STREAMING:
        return (
          <div className="flex justify-center items-center w-6 h-6">
            <IconLive />
          </div>
        );

      default:
        return null;
    }
  }, [userInfo.activeStatus]);

  return (
    <Link
      href={LOCATIONS.CHANNEL}
      className="flex items-center gap-4 py-4 text-neutral-deactive"
    >
      <Image
        src={userInfo.image}
        width={24}
        height={24}
        alt={`${userInfo.name} avatar`}
        className="w-[24px] h-[24px] aspect-square object-cover rounded-full"
      />
      <div className="flex flex-1 gap-2 justify-between items-center">
        <span className="flex flex-1 w-[104px] text-menu hover:text-primary-main transition-colors truncate">
          {userInfo.name}
        </span>

        {renderActiveStatus}
      </div>
    </Link>
  );
}

UserNav.propTypes = {
  userInfo: PropTypes.instanceOf(Object),
};

export default UserNav;

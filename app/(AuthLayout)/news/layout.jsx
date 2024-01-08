import React from "react";
import PropTypes from "prop-types";

import Header from "@/components/Header";
import Navigation from "@/components/Navigation";

function AuthLayout({ children }) {
  return (
    <main className="flex gap-[64px] w-screen h-screen">
      <Navigation />
      <div>
        <Header />
        {children}
      </div>
    </main>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLayout;

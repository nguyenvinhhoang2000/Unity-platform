// import React from "react";
import { redirect } from "next/navigation";

import { LOCATIONS } from "@/constants";

function HomePage() {
  return redirect(LOCATIONS.NEWS);
}

export default HomePage;

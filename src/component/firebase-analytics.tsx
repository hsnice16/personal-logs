"use client";

import { analytics } from "@/data/firebase";
import { logEvent } from "firebase/analytics";
import { useEffect } from "react";

export default function FirebaseAnalytics() {
  useEffect(() => {
    if (analytics) {
      logEvent(analytics, "page_view");
    }
  }, []);

  return null; // no ui needed
}

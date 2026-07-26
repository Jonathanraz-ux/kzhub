"use client";

import { useEffect } from "react";

interface AnalyticsProps {
  measurementId?: string;
  enabled?: boolean;
}

export default function Analytics({
  measurementId,
  enabled = false,
}: AnalyticsProps) {
  const id = measurementId ?? process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    if (!enabled || !id) return;

    const w = window as unknown as { dataLayer?: unknown[][]; gtag?: (...args: unknown[]) => void };
    w.dataLayer = w.dataLayer || [];
    w.gtag = (...args: unknown[]) => { w.dataLayer!.push(args); };

    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    script.async = true;
    document.head.appendChild(script);

    w.gtag("js", new Date());
    w.gtag("config", id, { send_page_view: false });

    return () => {
      document.head.removeChild(script);
    };
  }, [id, enabled]);

  if (!enabled || !id) return null;

  return null;
}

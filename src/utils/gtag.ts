declare global {
  interface Window {
    gtag: (
      option: string,
      gaTrackingId: string,
      options: Record<string, unknown>
    ) => void;
  }
}

/**
 * @example
 * https://developers.google.com/analytics/devguides/collection/gtagjs/pages
 */
export const pageview = (url: string, trackingId: string) => {
  if (!window?.gtag) {
    if (process.env.NODE_ENV === "development") {
      console.warn("window.gtag is not defined.");
    }
    return;
  }
  window.gtag("config", trackingId, {
    page_path: url,
  });
};

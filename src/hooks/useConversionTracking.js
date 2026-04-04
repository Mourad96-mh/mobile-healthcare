export const useConversionTracking = () => {
  const trackConversion = (url) => {
    if (typeof window.gtag_report_conversion === "function") {
      window.gtag_report_conversion(url);
    } else {
      window.location.href = url;
    }
  };

  return { trackConversion };
};

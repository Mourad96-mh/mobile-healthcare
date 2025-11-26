// utils/gclid.js

// Capture GCLID from URL and store in localStorage
export const captureGCLID = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const gclid = urlParams.get("gclid");
  if (gclid) {
    localStorage.setItem("gclid", gclid);
  }
};

// Retrieve GCLID from localStorage
export const getGCLID = () => {
  return localStorage.getItem("gclid") || null;
};
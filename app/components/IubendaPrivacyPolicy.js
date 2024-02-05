'use client'

import React, { useEffect } from 'react';

const IubendaPrivacyPolicy = () => {
  useEffect(() => {
    const loader = () => {
      const s = document.createElement("script");
      const tag = document.getElementsByTagName("script")[0];
      s.src = "https://cdn.iubenda.com/iubenda.js";
      tag.parentNode.insertBefore(s, tag);
    };

    if (window.addEventListener) {
      window.addEventListener("load", loader, false);
    } else if (window.attachEvent) {
      window.attachEvent("onload", loader);
    } else {
      window.onload = loader;
    }
  }, []);

  const openInNewTab = () => {
    window.open("https://www.iubenda.com/privacy-policy/93796554", "_blank");
  };

  return (
    <a href="#" onClick={openInNewTab} className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe" title="Privacy Policy">
      Privacy Policy
    </a>
  );
};

export default IubendaPrivacyPolicy;
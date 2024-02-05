'use client';

import { useIubenda } from '@mep-agency/next-iubenda';

const ConsentAwareComponent = () => {
  const {
    userPreferences, // The latest available user preferences data
    showCookiePolicy, // Displays the cookie policy popup
    openPreferences, // Opens the preferences panel
    showTcfVendors, // Opens the TCF vendors panel
    resetCookies, // Resets all cookies managed by Iubenda

    /*
     * The following exposed entries are meant for internal use only and should
     * not be used in your projects.
     */
    // dispatchUserPreferences, // Update the user preferences data across the app
    // i18nDictionary, // Contains the translations for the built-in components
  } = useIubenda();

  return (
    <div>
      User preferences status:{' '}
      <span style={{ color: userPreferences.hasBeenLoaded ? 'green' : 'red' }}>
        {userPreferences.hasBeenLoaded ? 'LOADED' : 'LOADING...'}
      </span>
    </div>
  );
};

export default ConsentAwareComponent;
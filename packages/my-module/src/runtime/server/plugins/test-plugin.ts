import { defineNitroPlugin } from 'nitropack/dist/runtime/plugin';

export default defineNitroPlugin(async (nitroApp) => {
  // This is the path / alias to the session store factory
  const sessionStorePath = '#my-session-store';

  if (sessionStorePath) {
    // Logging the path / alias
    console.log(sessionStorePath);

    // Importing the alias path
    // This is failing.
    const factoryModule = await import(sessionStorePath);
    const sessionStoreInstance = factoryModule.default;

    // Logging the instance created by the factory
    console.log(sessionStoreInstance);
  }
});

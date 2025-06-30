import { defineNitroPlugin } from 'nitropack/dist/runtime/plugin';

export default defineNitroPlugin(async (nitroApp) => {
  // Importing the alias path
  // This is failing.
  const factoryModule = await import('#my-session-store';);
  const sessionStoreInstance = factoryModule.default;

  // Logging the instance created by the factory
  console.log(sessionStoreInstance);
});

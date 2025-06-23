import { defineNuxtModule, createResolver, addServerPlugin, resolvePath } from '@nuxt/kit';

export interface ModuleOptions {
  sessionStoreFactoryPath?: string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'my-module',
    configKey: 'myModule',
  },
  async setup(options, nuxt) {
    console.log('my-module is being set up with options:', options);
    const resolver = createResolver(import.meta.url);

    if (options.sessionStoreFactoryPath) {
      const absoluteSessionStoreFactoryPath = await resolvePath(options.sessionStoreFactoryPath);

      nuxt.options.nitro.alias = nuxt.options.nitro.alias || {};
      nuxt.options.nitro.alias['#my-session-store'] = absoluteSessionStoreFactoryPath;
    }

    addServerPlugin(resolver.resolve('./runtime/server/plugins/test-plugin'));
  },
});

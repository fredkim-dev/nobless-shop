const Encore = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
  .setOutputPath('public/nobless-theme')
  .setPublicPath('/nobless-theme')
  .addEntry('app', './themes/NoblessTheme/assets/entry.js')
  .enableSingleRuntimeChunk()
  .cleanupOutputBeforeBuild()
  .splitEntryChunks()
  .enableSassLoader()
  .autoProvidejQuery()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())
;

const config = Encore.getWebpackConfig();
config.name = 'noblessTheme';

module.exports = config;

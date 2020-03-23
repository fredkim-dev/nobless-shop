const Encore = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
  .setOutputPath('public/bootstrap-theme')
  .setPublicPath('/bootstrap-theme')
  .addEntry('app', './themes/BootstrapTheme/assets/app.js')
  .enableSingleRuntimeChunk()
  .cleanupOutputBeforeBuild()
  .splitEntryChunks()
  .enableSassLoader()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction());

const config = Encore.getWebpackConfig();
config.name = 'bootstrapTheme';

module.exports = config;
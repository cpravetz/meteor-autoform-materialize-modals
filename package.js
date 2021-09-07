Package.describe({
  name: 'seakaytee:autoform-materialize-modals',
  summary: 'Autoform Materialize Modals',
  version: '4.1.1',
  git: 'https://github.com/mozfet/meteor-autoform-materialize-modals.git'
});
 
Package.onUse(function(api) {
  api.versionsFrom(['METEOR@1.6','2.3']);
  api.use([
    'templating',
    'blaze',
    'dburles:mongo-collection-instances'], 'client');
  api.use(['underscore', 'mongo'], 'client');
  api.use('ecmascript');
  api.addFiles([
    'index.js'
  ], 'client');
});

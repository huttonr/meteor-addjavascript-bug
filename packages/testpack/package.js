Package.describe({
  name: 'huttonr:testpack',
  version: '0.0.1',
  summary: 'Meteor v1.3-modules-beta.4 unworking addJavascript example',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  //api.versionsFrom('1.3-modules-beta.4');
  api.versionsFrom('1.2.1');

  //api.use('ecmascript@0.3.1-modules.4');
  api.use('ecmascript'); // Not required

  api.use('isobuild:compiler-plugin@1.0.0');
});

Package.registerBuildPlugin({
  name: 'build-testpack',
  use: [
    //'ecmascript@0.3.1-modules.4'
    'ecmascript@0.1.6' // Seems to be required
  ],
  sources: [
    'plugin.js'
  ]
});

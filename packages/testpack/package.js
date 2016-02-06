Package.describe({
  name: 'huttonr:testpack',
  version: '0.0.2',
  summary: 'Meteor v1.3-modules-beta.8 unworking addJavascript and addStylesheet example',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  //api.versionsFrom('1.3-modules-beta.8'); // Also doesn't work
  //api.versionsFrom('1.2.1');

  //api.use('ecmascript@0.4.0-modules.8'); // Also doesn't work
  api.use('ecmascript');

  api.use('isobuild:compiler-plugin@1.0.0');
});

Package.registerBuildPlugin({
  name: 'build-testpack',
  use: [
    'caching-compiler',
    'ecmascript'
    //'ecmascript@0.4.0-modules.8' // Also doesn't work
    //'ecmascript@0.1.6'
  ],
  sources: [
    'plugin.js'
  ]
});

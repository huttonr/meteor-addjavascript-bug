
// const path = Plugin.path

// Plugin.registerCompiler({
//   extensions: [],
//   filenames: ['testcompile.myext']
// }, () => new TestPackCompiler)

// class TestPackCompiler {
//   processFilesForTarget(filesFound) {
//     let settingsFile = filesFound[0]

//     // This shows up fine in the server console
//     console.log('\ntestpack compiler is being executed...')

//     // This added javascript will never be executed as of Meteor 1.3 beta 1
//     settingsFile.addJavaScript({
//       data: 'console.log("SUCCESS!"); alert("SUCCESS!");\n',
//       path: path.join('client', 'successmessage.js')
//     })

//     // This added css will never be added in Meteor 1.3 beta 8 (and some earlier beta versions)
//     settingsFile.addStylesheet({
//       data: '.teststyle { background-color: red }\n',
//       path: path.join('client', 'stylesheets', 'mystylesheet.css')
//     })
//   }
// }

var path = Plugin.path

Plugin.registerCompiler({
  extensions: [],
  filenames: ['testcompile.myext']
}, function () {
  return new TestPackCompiler();
});

TestPackCompiler = function () {}

TestPackCompiler.prototype.processFilesForTarget = function (filesFound) {
  var settingsFile = filesFound[0];

  // This shows up fine in the server console
  console.log('\ntestpack compiler is being executed...');

  // This added javascript will never be executed as of Meteor 1.3 beta 1
  settingsFile.addJavaScript({
    data: 'console.log("SUCCESS!"); alert("SUCCESS!");\n',
    path: path.join('client', 'successmessage.js')
  });

  // This added css will never be added in Meteor 1.3 beta 8 (and some earlier beta versions)
  settingsFile.addStylesheet({
    data: '.teststyle { background-color: red }\n',
    path: path.join('client', 'stylesheets', 'mystylesheet.css')
  });
};

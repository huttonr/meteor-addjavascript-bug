
const path = Plugin.path

Plugin.registerCompiler({
  extensions: [],
  filenames: ['testcompile.json']
}, () => new TestPackCompiler)

class TestPackCompiler {
  processFilesForTarget(filesFound) {
    let settingsFile = filesFound[0]

    console.log('\ntestpack compiler is being executed...')

    // This added javascript will never be executed in Meteor v1.3 beta 4
    settingsFile.addJavaScript({
      data: 'console.log("SUCCESS!"); alert("SUCCESS!");',
      path: path.join('client', 'successmessage.js')
    })
  }
}

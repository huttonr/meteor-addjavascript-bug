
const path = Plugin.path

Plugin.registerCompiler({
  extensions: [],
  filenames: ['testcompile.json']
}, () => new TestPackCompiler)

class TestPackCompiler {
  processFilesForTarget(filesFound) {
    let settingsFile = filesFound[0]

    console.log('\ntestpack compiler is being executed...')
    settingsFile.addJavaScript({
      data: 'console.log("SUCCESS!"); alert("SUCCESS!");',
      path: path.join('.', 'successmessage.js')
    })
  }
}


## addJavascript bug example
##### *(Applies to Meteor v1.3-modules-beta.4)*

The following `plugin.js` does not work.
The javascript added with `addJavascript` will not be executed.
Though it works as expected in Meteor v1.2.1.

```javascript
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
```

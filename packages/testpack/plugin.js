
const path = Plugin.path

Plugin.registerCompiler({
  //extensions: ['json'],
  filenames: ['testcompile.json']
}, () => new TestPackCompiler)

class TestPackCompiler extends CachingCompiler {
  constructor() {
    super({
      compilerName: 'test-compiler',
      defaultCacheSize: 1024*1024*10,
    })
  }

  getCacheKey(inputFile) {
    return inputFile.getSourceHash()
  }

  compileResultSize(compileResult) {
    return 1000
    //return compileResult.source.length + compileResult.sourceMap.length
  }

  compileOneFile(inputFile) {
    return {testing: 'test', source: 'blah'}
  }

  addCompileResult(inputFile, compileResult) {
    // This added javascript will never be executed as of Meteor 1.3 beta 1
    inputFile.addJavaScript({
      data: 'console.log("SUCCESS!"); alert("SUCCESS!");\n',
      path: path.join('client', 'successmessage.js')
    })

    // This added css will never be added in Meteor 1.3 beta 8 (and some earlier beta versions)
    inputFile.addStylesheet({
      data: '.teststyle { background-color: red }\n',
      path: path.join('client', 'stylesheets', 'mystylesheet.css')
    })
  }
}

// Because this file imports from  protractor, you'll need to have it as a
// project dependency. Please see the reference config: lib/config.ts for more
// information.
//
// Why you might want to create your config with typescript:
// Editors like Microsoft Visual Studio Code will have autocomplete and
// description hints.
//
// To run this example, first transpile it to javascript with `npm run tsc`,
// then run `protractor conf.js`.
import { Config } from 'protractor';
import { SpecReporter } from 'jasmine-spec-reporter';

export let config: Config = {
  framework: 'jasmine',
  capabilities: {
    browserName: 'firefox'
  },
  specs: ['*e2e.spec.js'],
  exclude : ['pokedex*'],
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true,
  directConnect: true,
  onPrepare: () => {
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  },
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () { }
  },
  allScriptsTimeout: 11000
};
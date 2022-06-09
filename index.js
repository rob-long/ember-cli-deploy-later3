/* jshint node: true */
'use strict';

var DeployPluginBase = require('ember-cli-deploy-plugin');

module.exports = {
  name: 'ember-cli-deploy-awesomeness',

  createDeployPlugin: function (options) {
    var DeployPlugin = DeployPluginBase.extend({
      name: options.name,

      // note: most plugins can simply implement these next two properties and use
      // the base class' implementation of the `configure` hook
      defaultConfig: {
      // implement any hooks appropriate for your plugin
      willUpload: function (context) {


        // Use the `log` method to generate output consistent with the tree style
        // of ember-cli-deploy's verbose output
        this.log('output some awesomeness');
        this.log('output some red awesomeness', { color: 'red' });
        this.log('output this only when verbose option is enabled', {
          verbose: true,
        });

        // Need to do something async? You can return a promise.
        // Need to fail out? Throw an error or return a promise which becomes rejected
        return Promise.resolve();
      },
    });
    return new DeployPlugin();
  },
};

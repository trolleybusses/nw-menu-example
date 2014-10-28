/*jshint node:true, strict:false, -W106 */

module.exports = function (grunt) {

    grunt.initConfig({
        nodewebkit: {
            options: {
                platforms: ['win', 'osx'],
                build_dir: './build', // Where the build version of my node-webkit app is saved
                version: '0.11.0-rc1'
            },
            src: './app/**/*' // Your node-wekit app
        }
    });

    grunt.loadNpmTasks('grunt-node-webkit-builder');

    grunt.registerTask('build', ['nodewebkit']);
};

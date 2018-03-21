module.exports = function (grunt) {
    grunt.initConfig({
        browserify: {
            js: {
                src: ['../javascripts/main.js'],
                dest: '../dist/app.js'
            },
            options: {
                browserifyOptions: {
                    paths: ["./node_modules"]
                }
            }
        },
        jshint: {
            files: ['../javascripts/**/*.js'], //location of javascript files
            options: {
                predef: ["document", "console"], //allows for predefined things not found in js
                esnext: true, //allows for ES6 
                globalstrict: true,
                browserify: true
            }
        },
        sass: { //setup sass compilation
            dist: {
                files: {
                    '../dist/css/main.css': '../sass/main.scss'
                }
            }
        },
        watch: {
            javascripts: {
                files: ['../javascripts/**/*.js'],
                tasks: ['jshint']
            },
            sass: {
                files: ['../sass/**/*.scss'],
                tasks: ['sass']
            },
            browserify: {
                files: ['../javascripts/**/*.js'],
                tasks: ['browserify']
            }
        }
    });

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.registerTask('default', ['jshint', 'sass', 'browserify', 'watch']);
};
module.exports = function(grunt) {

    var files = [
        'index.js',
        'Gruntfile.js'
    ];

    // Configure Tasks
    grunt.initConfig({

        watch: {
            js: {
                files: files,
                tasks: ['jscs:scan', 'jshint:all']
            }
        },

        jsdoc: {
            dist: {
                src: ['README.md'].concat(files),
                options: {
                    destination: 'docs'
                }
            }
        },

        jscs: {
            scan: {
                src: files
            },
            fix: {
                src: files,
                options: {
                    fix: true
                }
            }
        },

        jshint: {
            all: files
        }

    });

    // Load Tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jscs');
    grunt.loadNpmTasks('grunt-jsdoc');

    // Register Tasks
    grunt.registerTask('default', ['lint']);
    grunt.registerTask('lint', ['jscs:scan', 'jshint:all']);

};

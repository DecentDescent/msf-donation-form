// Main Grunt Files

module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            msfForm: {
                files: {
                    'dist/css/msf-form.min.css': 'src/sass/msf-form.scss'
                }
            }
        },
        uglify: {
            msfForm: {
                options: {
                    mangle: false,
                    compress: {
                        drop_console: false
                    }
                },
                files: {
                    'dist/js/msf-form.min.js': [
                        'src/js/msf-form.js'

                    ]
                }
            }
        },
        postcss: {
            options: {
                map: false,
                processors: [
                    require('autoprefixer')({ browsers: 'last 2 versions' }),
                    require('cssnano')()
                ]
            },
            dist: {
                src: 'dist/css/*.css'
            }
        },
        watch: {
            sass: {
                files: ['src/sass/*.scss'],
                tasks: ['sass', 'postcss']
            },
            uglify: {
                files: ['src/js/*.js'],
                tasks: ['uglify']
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['sass', 'uglify', 'postcss', 'watch']);
};
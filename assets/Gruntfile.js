/******************************/
/*****                    *****/
/*****                   ******/
/*****     ********************/
/*****     ********************/
/*****     ********************/
/*****              ***********/
/*****             ************/
/*****     ********************/
/*****     ********************/
/*****     ********************/
/*****     ********************/
/*****     ********************/
/*****     ********************/
/******************************/

/** Bootstrap Variable **/
var bootstrapBasePath  = 'bower_components/bootstrap-sass/',
    bootstrapScssPath  = bootstrapBasePath + 'assets/stylesheets/',
    bootstrapJsPath    = bootstrapBasePath + 'assets/javascripts/';
/*************************/

/** Enem Apps Variable **/
var enemAppsBasePath = 'enem_apps/',
    enemAppsScssPath = enemAppsBasePath + 'master_enem',
    enemAppsJsPath   = enemAppsBasePath + 'enem_js/';
/************************/

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: [bootstrapScssPath]
      },
      dist: {
        options: {
          outputStyle: 'compressed',
          report: 'gzip',
        },
        files: {
          'css/app.min.css': 'enem_apps/master_enem/master_enem.scss'
        }
      },
      dev: {
        options: {
          outputStyle: 'nested',
          report: 'gzip',
        },
        files: {
          'css/app.css': 'enem_apps/master_enem/master_enem.scss'
        }
      }
    },
      
    cssmin: {
        options: {
            report: 'min',
        },
        target: {
//            files: [{
//                expand: true,
//                cwd: 'css/',
//                src: ['*.css', '!*.min.css'],
//                dest: 'css/',
//                ext: '.min.css'
//            }]
            files: {
                'css/app.min.css': ['css/app.min.css']
            }
        }
    },

    concat: {
      options: {
        separator: '\n;',
        banner: '\n',
      },
      vendor: {
        src: [
          'bower_components/jquery/dist/jquery.js',
//          'bower_components/modernizr/modernizr.js',
//          foundationJsPrefix + 'js',
//          foundationJsPrefix + 'abide.js',
//          foundationJsPrefix + 'accordion.js',
//          foundationJsPrefix + 'aleart.js',
//          foundationJsPrefix + 'clearing.js',
//          foundationJsPrefix + 'dropdown.js',
//          foundationJsPrefix + 'equalizer.js',
//          foundationJsPrefix + 'interchange.js',
          // foundationJsPrefix + 'joyride.js',
          // foundationJsPrefix + 'magellan.js',
//          foundationJsPrefix + 'offcanvas.js',
//          foundationJsPrefix + 'orbit.js',
//          foundationJsPrefix + 'reveal.js',
          // foundationJsPrefix + 'slider.js',
//          foundationJsPrefix + 'tab.js',
//          foundationJsPrefix + 'tooltip.js',
//          foundationJsPrefix + 'topbar.js',
            
          // for bootstrap js
          bootstrapJsPath + 'bootstrap.min.js',
        
          // Enem Plugin Slider
          'bower_components/swiper/dist/js/swiper.min.js',
            
          //Enem Required Plugin Animate Wave
          'bower_components/waves/dist/waves.min.js',
            
          //Enem Required Plugin Chart
          'bower_components/raphael/raphael-min.js',
          'bower_components/morris.js/morris.js',
          'bower_components/fancybox/jquery.fancybox.js',
            
          //Enem Required Plugin Alert
          'bower_components/vex/js/vex.combined.min.js',
          
          //Enem Required Plugin Modernizr
//          'bower_components/modernizr/dist/modernizr-build.js',    
            
          //Enem Required Plugin Yepnope
          'bower_components/yepnope/src/yepnope.js',

            
          // for enem_apps js 
          enemAppsJsPath + 'TweenMax.min.js',
          enemAppsJsPath + 'ScrollToPlugin.min.js',
          enemAppsJsPath + 'modernizr.js',
          enemAppsJsPath + 'enem.js',


          // required plugin
//          'js/carousel/carouFredSel.js',
//          'js/paralax-slide/responsive-slider.js',
//          'js/scrolltofixed/jquery-scrolltofixed.js',
//          'js/page-navigation/jquery.malihu.PageScroll2id.min.js',
            
//          'js/fancybox/jquery.fancybox.js', di matiin dulu
            'js/fancybox/jquery.fancybox.js',
//          'bower_components/fancybox/jquery.fancybox.js',
            
//          'js/crop/imgLiquid-min.js',
//          'js/waitForImages/jquery.waitforimages.min.js',
          // 'js/jssor-slider/jssor.slider.mini.js',
          // 'js/jssor-slider/jssor.js',
          'js/fancybox/jquery.fancybox-thumbs.js',
          //my script
          //'js/app.js',
          // 'js/unduh.js',
          // 'js/publikasi.js',
          // 'js/faq.js',
          // 'js/produk.js',         
        ],
          // foundationJsPrefix + 'topbar.js',
        dest: 'js/vendor.js'
      }
    },

    uglify: {
      options: {
        mangle: true,
        compress: true,
        report: 'gzip'        
      },
      target: {
        files: {
          'js/vendor.min.js':['js/vendor.js'],
        }
      }
    },

    // removelogging: {
    //   js: {
    //     src: "js/app.min.js",
    //     dest: "js/app.min.js"
    //   }
    // },

    watch: {
      grunt: {
        files: ['Gruntfile.js'],
        tasks: ['development-task']
      },
      sass: {
        files: 'enem_apps/**/*.scss',
        tasks: ['development-task']
      },
      js: {
        files: 'js/**/*.js',
        tasks: ['development-task']
      }
    },
      
    compress: {
      main: {
        options: {
          mode: 'gzip'
        },
        expand: true,
        cwd: 'css/',
        src: ['*'],
        dest: 'jadi/'
      }
    },
      
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css/',
          src: ['*.css', '!*.min.css'],
          dest: 'css/',
          ext: '.min.css'
        }]
      },
      min_again: {
        files: [{
          expand: true,
          cwd: 'css/',
          src: ['*.min.css'],
          dest: 'css/',
          ext: '.min.css'
        }]
      }
    },
      
    copy: {
      fontawesome: {
        expand: true,
        cwd: 'bower_components/font-awesome/fonts/',
        src: ['*'],
        dest: 'fonts/fontawesome/',
      },
      bootstrap: {
        expand: true,
        cwd: 'bower_components/bootstrap-sass/assets/fonts/bootstrap/',
        src: ['*'],
        dest: 'fonts/bootstrap/',
      },
    },
      
    // Jangan lupa ubah path fontnya di css
      
//    modernizr: {
//      dist: {
//            // Avoid unnecessary builds (see Caching section below)
//            "cache" : true,
//
//            // Path to the build you're using for development.
//            "devFile" : false,
//
//            // Path to save out the built file
//            "dest" : false,
//
//            // Based on default settings on http://modernizr.com/download/
//            "options" : [
//                "setClasses",
//                "addTest",
//                "html5printshiv",
//                "testProp",
//                "fnBind",
//            ],
//
//            // By default, source is uglified before saving
//            "uglify" : true,
//
//            // Define any tests you want to explicitly include
//            "tests" : [],
//
//            // Useful for excluding any tests that this tool will match
//            // e.g. you use .notification class for notification elements,
//            // but don’t want the test for Notification API
//            "excludeTests": [],
//
//            // By default, will crawl your project for references to Modernizr tests
//            // Set to false to disable
//            "crawl" : true,
//
//            // Set to true to pass in buffers via the "files" parameter below
//            "useBuffers" : false,
//
//            // By default, this task will crawl all *.js, *.css, *.scss files.
//            "files" : {
//                "src": [
//                    "*[^(g|G)runt(file)?].{js,css,scss}",
//                    "**[^node_modules]/**/*.{js,css,scss}",
//                    "!lib/**/*"
//                ]
//            },
//
//            // Have custom Modernizr tests? Add them here.
//            "customTests" : []
//        },
//    },
      
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-modernizr');

  grunt.registerTask('development-task', ['sass:dev','concat:vendor']);
  grunt.registerTask('production-task', ['sass:dist','uglify']);
  grunt.registerTask('production-min-task',['sass:dist','uglify','cssmin:target','cssmin:min_again','cssmin:target','cssmin:target','cssmin:target','cssmin:target','cssmin:target','cssmin:target']);
    
  grunt.registerTask('copy-task',['copy:fontawesome','copy:bootstrap']);

  grunt.registerTask('build', ['production-task']);
  grunt.registerTask('build-min', ['production-min-task']);
  grunt.registerTask('default', ['development-task','watch']);
    
  grunt.registerTask('enem',['build','default']);
  grunt.registerTask('enem-extream',['build-min','default']);
  grunt.registerTask('enem-copy',['copy-task']); //Task for copy file support
}
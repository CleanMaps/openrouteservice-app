// Karma configuration
// Generated on Mon Mar 05 2018 12:21:31 GMT+0100 (CET)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '.',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            // 'bower_components/rxjs/dist/rx.lite.js',
            // 'bower_components/jquery/dist/jquery.js',
            // 'bower_components/jquery-ui/jquery-ui.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            // 'bower_components/angular-cookies/angular-cookies.js',
            // 'bower_components/angular-animate/angular-animate.js',
            // 'bower_components/angular-sanitize/angular-sanitize.js',
            // 'bower_components/angular-translate/angular-translate.js',
            // 'bower_components/ng-focus-if/focusIf.min.js',
            // 'bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
            'node_modules/@angular/router/angular1/angular_1_router.js',
            // 'node_modules/geojson/geojson.min.js',
            // 'node_modules/togpx/togpx.js',
            // 'node_modules/tokml/tokml.js',
            // 'node_modules/leaflet-omnivore/leaflet-omnivore.min.js',
            // 'node_modules/turf.js',
            // 'node_modules/leaflet/dist/leaflet.js',
            // 'bower_components/leaflet-measure/dist/leaflet-measure.js',
            // 'node_modules/leaflet-control-angular/src/L.Control.Angular.js',
            // 'node_modules/leaflet-geometryutil/src/leaflet.geometryutil.js',
            // 'bower_components/leaflet.markercluster/dist/leaflet.markercluster.js',
            // 'bower_components/leaflet.editable/src/Leaflet.Editable.js',
            // 'bower_components/leaflet.heightgraph/src/L.Control.Heightgraph.js',
            // 'bower_components/leaflet.locatecontrol/src/L.Control.Locate.js',
            // 'bower_components/leaflet-distance-markers/leaflet-distance-marker.js',
            // 'bower_components/angular-loading-bar/build/loading-bar.js',
            // 'bower_components/angular-ui-sortable/sortable.js',
            // 'bower_components/angularjs-slider/dist/rzslider.js',
            // 'bower_components/d3/d3.js',
            // 'bower_components/d3-tip/index.js',
            // 'node_modules/d3-interpolate/build/d3-interpolate.js',
            // 'node_modules/d3-color/build/d3-color.js',
            // 'node_modules/d3-scale-chromatic/build/d3-scale-chromatic.js',
            // 'bower_components/vkBeautify/vkbeautify.js',
            // 'bower_components/angular-file-saver/dist/angular-file-saver.bundle.js',
            // 'bower_components/angular-tooltips/dist/angular-tooltips.js',
            'app/js/test_app.js',
            'app/js/app_karma.js',
            'app/js/filters.js',
            'app/js/config.js',
            'app/js/templates.js',
            'app/constants/namespaces.js',
            'app/constants/lists.js',
            'app/constants/countries.js',
            'app/constants/mappings.js',
            'app/values/globals.js',
            'app/infrastructure/ors-settings-service.js',
            'app/infrastructure/ors-objects-service.js',
            'app/infrastructure/ors-map-service.js',
            'app/infrastructure/ors-request-service.js',
            'app/infrastructure/ors-utils-service.js',
            'app/infrastructure/ors-messaging-service.js',
            'app/infrastructure/ors-params-service.js',
            'app/infrastructure/ors-route-service.js',
            'app/infrastructure/ors-aa-service.js',
            'app/infrastructure/ors-cookies-service.js',
            'app/infrastructure/ors-importexport-service.js',
            'app/infrastructure/ors-locations-service.js',
            'app/infrastructure/ors-apikey-factory.js',
            'app/components/ors-navigation/ors-nav.js',
            'app/components/ors-panel-routing/ors-panel-routing.js',
            'app/components/ors-panel-routing/ors-waypoints/ors-waypoints.js',
            'app/components/ors-panel-routing/ors-waypoints/ors-waypoint/ors-waypoint.js',
            'app/components/ors-panel-routing/ors-summary/ors-summary.js',
            'app/components/ors-panel-routing/ors-waypoints/ors-route-controls/ors-route-controls.js',
            'app/components/ors-panel-routing/ors-waypoints/ors-route-controls/ors-options/ors-options.js',
            'app/components/ors-panel-routing/ors-instructions/ors-instructions.js',
            'app/components/ors-panel-routing/ors-addresses/ors-addresses.js',
            'app/components/ors-panel-routing/ors-route-extras/ors-route-extras.js',
            'app/components/ors-panel-routing/ors-route-extras/ors-bars-chart/ors-bars-chart.js',
            'app/components/ors-panel-routing/ors-route-extras/ors-route-extras-map/ors-route-extras-map.js',
            'app/components/ors-profiles-options/ors-profiles-options.js',
            'app/components/ors-share/ors-share.js',
            'app/components/ors-panel-accessibilityanalysis/ors-panel-accessibilityanalysis.js',
            'app/components/ors-panel-accessibilityanalysis/ors-aa-controls/ors-aa-controls.js',
            'app/components/ors-panel-accessibilityanalysis/ors-aa-waypoints/ors-aa-waypoints.js',
            'app/components/ors-panel-accessibilityanalysis/ors-aa-waypoints/ors-aa-waypoint/ors-aa-waypoint.js',
            'app/components/ors-panel-accessibilityanalysis/ors-aa-sliders/ors-aa-sliders.js',
            'app/components/ors-panel-accessibilityanalysis/ors-aa-queries/ors-export-query/ors-export-query.js',
            'app/components/ors-panel-accessibilityanalysis/ors-aa-queries/ors-aa-queries.js',
            'app/components/ors-panel-accessibilityanalysis/ors-aa-queries/ors-aa-query/ors-aa-query.js',
            'app/components/ors-header/ors-header.js',
            'app/components/ors-error/ors-error.js',
            'app/components/ors-loading/ors-loading.js',
            'app/components/ors-modal/ors-modal.js',
            'app/components/ors-panel-routing/ors-export-route/ors-export-route.js',
            'app/components/ors-panel-routing/ors-import-route/ors-import-route.js',
            'app/components/ors-map/ors-map.js',

            'test/**/*.js'
        ],


        // list of files / patterns to exclude
        exclude: [
            'app/js/templates.js',
            'app/js/app.js'/*,
            'test/default.spec.js'*/
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['story'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Firefox'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,
    })
}

mapboxgl.accessToken =
            'pk.eyJ1IjoiamFrb2J6aGFvIiwiYSI6ImNpcms2YWsyMzAwMmtmbG5icTFxZ3ZkdncifQ.P9MBej1xacybKcDN_jehvw';
        let map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/dark-v10',
            zoom: 4, // starting zoom
            minZoom: 2, // minimum zoom level of the map
            center: [-100, 40], // starting center
            projection: 'albers'
        });
        const grades = [12000, 24000, 36000, 48000, 60000],
            colors = ['rgb(54,103,133)', 'rgb(107,142,164)', 'rgb(204,204,204)', 'rgb(228,134,70)', 'rgb(200,82,0)'],
            radii = [5, 10, 15, 20, 25];

        //load data to the map as new layers.
        //map.on('load', function loadingData() {
        map.on('load', () => { //simplifying the function statement: arrow with brackets to define a function

            // when loading a geojson, there are two steps
            // add a source of the data and then add the layer out of the source
            map.addSource('counts', {
                type: 'geojson',
                data: 'assets/us-covid-2020-counts.json'
            });

            map.addLayer({
                'id': 'covid-point',
                'type': 'circle',
                'source': 'counts',
                'paint': {
                    // increase the radii of the circle as cases value increases
                    'circle-radius': {
                        'property': 'cases',
                        'stops': [
                            [grades[0], radii[0]],
                            [grades[1], radii[1]],
                            [grades[2], radii[2]],
                            [grades[3], radii[3]],
                            [grades[4], radii[4]]
                        ]
                    },
                    // change the color of the circle as mag value increases
                    'circle-color': {
                        'property': 'cases',
                        'stops': [
                            [grades[0], colors[0]],
                            [grades[1], colors[1]],
                            [grades[2], colors[2]],
                            [grades[3], colors[3]],
                            [grades[4], colors[4]]
                        ]
                    },
                    'circle-stroke-color': 'white',
                    'circle-stroke-width': 1,
                    'circle-opacity': 0.6
                }
            });
            // click on tree to view magnitude in a popup
            map.on('click', 'covid-point', (event) => {
                new mapboxgl.Popup()
                    .setLngLat(event.features[0].geometry.coordinates)
                    .setHTML(`<strong>Cases:</strong> ${event.features[0].properties.cases}`)
                    .addTo(map);
            });
        });
        // create legend
        const legend = document.getElementById('legend');
        //set up legend grades and labels
        var labels = ['<strong>Cases</strong>'],
            vbreak;
        //iterate through grades and create a scaled circle and label for each
        for (var i = 0; i < grades.length; i++) {
            vbreak = grades[i];
            // you need to manually adjust the radius of each dot on the legend 
            // in order to make sure the legend can be properly referred to the dot on the map.
            dot_radii = 2 * radii[i];
            labels.push(
                '<p class="break"><i class="dot" style="background:' + colors[i] + '; width: ' + dot_radii +
                'px; height: ' +
                dot_radii + 'px; "></i> <span class="dot-label" style="top: ' + dot_radii / 2 + 'px;">' + vbreak +
                '</span></p>');
        }
        // add the data source
        const source =
            '<p style="text-align: right; font-size:10pt">Source: <a href="https://github.com/jakobzhao/geog458/tree/master/labs/lab03">bozhao</a></p>';
        // combine all the html codes.
        legend.innerHTML = labels.join('') + source;
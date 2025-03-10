ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-3008306.655329, 3371054.651190, 6585752.407611, 8630900.591172]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_adisoutbreaks20250310_095523_1 = new ol.format.GeoJSON();
var features_adisoutbreaks20250310_095523_1 = format_adisoutbreaks20250310_095523_1.readFeatures(json_adisoutbreaks20250310_095523_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_adisoutbreaks20250310_095523_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adisoutbreaks20250310_095523_1.addFeatures(features_adisoutbreaks20250310_095523_1);
cluster_adisoutbreaks20250310_095523_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_adisoutbreaks20250310_095523_1
});
var lyr_adisoutbreaks20250310_095523_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_adisoutbreaks20250310_095523_1, 
                style: style_adisoutbreaks20250310_095523_1,
                popuplayertitle: 'adis-outbreaks-20250310_095523',
                interactive: true,
                title: '<img src="styles/legend/adisoutbreaks20250310_095523_1.png" /> adis-outbreaks-20250310_095523'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_adisoutbreaks20250310_095523_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_adisoutbreaks20250310_095523_1];
lyr_adisoutbreaks20250310_095523_1.set('fieldAliases', {'Reference': 'Reference', 'National reference': 'National reference', 'Country/Territory': 'Country/Territory', 'Event reference': 'Event reference', 'Тип': 'Тип', 'Disease name': 'Disease name', 'Disease type': 'Disease type', 'Epidemiological unit': 'Epidemiological unit', 'Local Authority Unit (LAU)': 'Local Authority Unit (LAU)', 'Submitted on': 'Submitted on', 'Modified on': 'Modified on', 'Administrative division level 1': 'Administrative division level 1', 'Administrative division level 2': 'Administrative division level 2', 'Administrative division level 3': 'Administrative division level 3', 'Outbreak occurring inside an already restricted zone': 'Outbreak occurring inside an already restricted zone', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Approximate location': 'Approximate location', 'Location': 'Location', 'Species 1': 'Species 1', 'Wildlife type 1': 'Wildlife type 1', 'Production Category 1': 'Production Category 1', 'Water type 1': 'Water type 1', 'Production system 1': 'Production system 1', 'Measuring unit 1': 'Measuring unit 1', 'Susceptible 1': 'Susceptible 1', 'Cases 1': 'Cases 1', 'Dead 1': 'Dead 1', 'Killed 1': 'Killed 1', 'Slaughtered 1': 'Slaughtered 1', 'Vaccinated 1': 'Vaccinated 1', 'Mortality/Morbidity unit measure 1': 'Mortality/Morbidity unit measure 1', 'Morbidity level 1': 'Morbidity level 1', 'Mortality level 1': 'Mortality level 1', 'Species 2': 'Species 2', 'Wildlife type 2': 'Wildlife type 2', 'Production Category 2': 'Production Category 2', 'Water type 2': 'Water type 2', 'Production system 2': 'Production system 2', 'Measuring unit 2': 'Measuring unit 2', 'Susceptible 2': 'Susceptible 2', 'Cases 2': 'Cases 2', 'Dead 2': 'Dead 2', 'Killed 2': 'Killed 2', 'Slaughtered 2': 'Slaughtered 2', 'Vaccinated 2': 'Vaccinated 2', 'Mortality/Morbidity unit measure 2': 'Mortality/Morbidity unit measure 2', 'Morbidity level 2': 'Morbidity level 2', 'Mortality level 2': 'Mortality level 2', 'Species 3': 'Species 3', 'Wildlife type 3': 'Wildlife type 3', 'Production Category 3': 'Production Category 3', 'Water type 3': 'Water type 3', 'Production system 3': 'Production system 3', 'Measuring unit 3': 'Measuring unit 3', 'Susceptible 3': 'Susceptible 3', 'Cases 3': 'Cases 3', 'Dead 3': 'Dead 3', 'Killed 3': 'Killed 3', 'Slaughtered 3': 'Slaughtered 3', 'Vaccinated 3': 'Vaccinated 3', 'Mortality/Morbidity unit measure 3': 'Mortality/Morbidity unit measure 3', 'Morbidity level 3': 'Morbidity level 3', 'Mortality level 3': 'Mortality level 3', 'Species 4': 'Species 4', 'Wildlife type 4': 'Wildlife type 4', 'Production Category 4': 'Production Category 4', 'Water type 4': 'Water type 4', 'Production system 4': 'Production system 4', 'Measuring unit 4': 'Measuring unit 4', 'Susceptible 4': 'Susceptible 4', 'Cases 4': 'Cases 4', 'Dead 4': 'Dead 4', 'Killed 4': 'Killed 4', 'Slaughtered 4': 'Slaughtered 4', 'Vaccinated 4': 'Vaccinated 4', 'Mortality/Morbidity unit measure 4': 'Mortality/Morbidity unit measure 4', 'Morbidity level 4': 'Morbidity level 4', 'Mortality level 4': 'Mortality level 4', 'Species 5': 'Species 5', 'Wildlife type 5': 'Wildlife type 5', 'Production Category 5': 'Production Category 5', 'Water type 5': 'Water type 5', 'Production system 5': 'Production system 5', 'Measuring unit 5': 'Measuring unit 5', 'Susceptible 5': 'Susceptible 5', 'Cases 5': 'Cases 5', 'Dead 5': 'Dead 5', 'Killed 5': 'Killed 5', 'Slaughtered 5': 'Slaughtered 5', 'Vaccinated 5': 'Vaccinated 5', 'Mortality/Morbidity unit measure 5': 'Mortality/Morbidity unit measure 5', 'Morbidity level 5': 'Morbidity level 5', 'Mortality level 5': 'Mortality level 5', 'Species 6': 'Species 6', 'Wildlife type 6': 'Wildlife type 6', 'Production Category 6': 'Production Category 6', 'Water type 6': 'Water type 6', 'Production system 6': 'Production system 6', 'Measuring unit 6': 'Measuring unit 6', 'Susceptible 6': 'Susceptible 6', 'Cases 6': 'Cases 6', 'Dead 6': 'Dead 6', 'Killed 6': 'Killed 6', 'Slaughtered 6': 'Slaughtered 6', 'Vaccinated 6': 'Vaccinated 6', 'Mortality/Morbidity unit measure 6': 'Mortality/Morbidity unit measure 6', 'Morbidity level 6': 'Morbidity level 6', 'Mortality level 6': 'Mortality level 6', 'Outbreak year': 'Outbreak year', 'Suspicion/Start date': 'Suspicion/Start date', 'Confirmation date': 'Confirmation date', '"Date of completion of prelim. C&amp': '"Date of completion of prelim. C&amp', 'D"': 'D"', 'End date': 'End date', 'Status Continuing/Resolved': 'Status Continuing/Resolved', 'Specific information for the outbreak': 'Specific information for the outbreak', 'Suspicion': 'Suspicion', 'Clinical signs': 'Clinical signs', 'Diagnostic tests': 'Diagnostic tests', 'Necropsy': 'Necropsy', 'Control measures 1': 'Control measures 1', 'Control measures 2': 'Control measures 2', 'Control measures 3': 'Control measures 3', 'Control measures 4': 'Control measures 4', 'Control measures 5': 'Control measures 5', 'Control measures 6': 'Control measures 6', 'Origin of infection 1': 'Origin of infection 1', 'Origin of infection 2': 'Origin of infection 2', 'Origin of infection 3': 'Origin of infection 3', 'Origin of infection 4': 'Origin of infection 4', 'Origin of infection 5': 'Origin of infection 5', 'Origin of infection 6': 'Origin of infection 6', 'Category 1': 'Category 1', 'Subcategory 1': 'Subcategory 1', 'Test name 1': 'Test name 1', 'Test type 1': 'Test type 1', 'Laboratory name 1': 'Laboratory name 1', 'Laboratory type 1': 'Laboratory type 1', 'Species 1_1': 'Species 1_1', 'Result date 1': 'Result date 1', 'Result type 1': 'Result type 1', 'Category 2': 'Category 2', 'Subcategory 2': 'Subcategory 2', 'Test name 2': 'Test name 2', 'Test type 2': 'Test type 2', 'Laboratory name 2': 'Laboratory name 2', 'Laboratory type 2': 'Laboratory type 2', 'Species 2_1': 'Species 2_1', 'Result date 2': 'Result date 2', 'Result type 2': 'Result type 2', 'Category 3': 'Category 3', 'Subcategory 3': 'Subcategory 3', 'Test name 3': 'Test name 3', 'Test type 3': 'Test type 3', 'Laboratory name 3': 'Laboratory name 3', 'Laboratory type 3': 'Laboratory type 3', 'Species 3_1': 'Species 3_1', 'Result date 3': 'Result date 3', 'Result type 3': 'Result type 3', 'Category 4': 'Category 4', 'Subcategory 4': 'Subcategory 4', 'Test name 4': 'Test name 4', 'Test type 4': 'Test type 4', 'Laboratory name 4': 'Laboratory name 4', 'Laboratory type 4': 'Laboratory type 4', 'Species 4_1': 'Species 4_1', 'Result date 4': 'Result date 4', 'Result type 4': 'Result type 4', 'Category 5': 'Category 5', 'Subcategory 5': 'Subcategory 5', 'Test name 5': 'Test name 5', 'Test type 5': 'Test type 5', 'Laboratory name 5': 'Laboratory name 5', 'Laboratory type 5': 'Laboratory type 5', 'Species 5_1': 'Species 5_1', 'Result date 5': 'Result date 5', 'Result type 5': 'Result type 5', 'Category 6': 'Category 6', 'Subcategory 6': 'Subcategory 6', 'Test name 6': 'Test name 6', 'Test type 6': 'Test type 6', 'Laboratory name 6': 'Laboratory name 6', 'Laboratory type 6': 'Laboratory type 6', 'Species 6_1': 'Species 6_1', 'Result date 6': 'Result date 6', 'Result type 6': 'Result type 6', 'Pertinence': 'Pertinence', });
lyr_adisoutbreaks20250310_095523_1.set('fieldImages', {'Reference': '', 'National reference': '', 'Country/Territory': '', 'Event reference': '', 'Тип': '', 'Disease name': '', 'Disease type': '', 'Epidemiological unit': '', 'Local Authority Unit (LAU)': '', 'Submitted on': '', 'Modified on': '', 'Administrative division level 1': '', 'Administrative division level 2': '', 'Administrative division level 3': '', 'Outbreak occurring inside an already restricted zone': '', 'Latitude': '', 'Longitude': '', 'Approximate location': '', 'Location': '', 'Species 1': '', 'Wildlife type 1': '', 'Production Category 1': '', 'Water type 1': '', 'Production system 1': '', 'Measuring unit 1': '', 'Susceptible 1': '', 'Cases 1': '', 'Dead 1': '', 'Killed 1': '', 'Slaughtered 1': '', 'Vaccinated 1': '', 'Mortality/Morbidity unit measure 1': '', 'Morbidity level 1': '', 'Mortality level 1': '', 'Species 2': '', 'Wildlife type 2': '', 'Production Category 2': '', 'Water type 2': '', 'Production system 2': '', 'Measuring unit 2': '', 'Susceptible 2': '', 'Cases 2': '', 'Dead 2': '', 'Killed 2': '', 'Slaughtered 2': '', 'Vaccinated 2': '', 'Mortality/Morbidity unit measure 2': '', 'Morbidity level 2': '', 'Mortality level 2': '', 'Species 3': '', 'Wildlife type 3': '', 'Production Category 3': '', 'Water type 3': '', 'Production system 3': '', 'Measuring unit 3': '', 'Susceptible 3': '', 'Cases 3': '', 'Dead 3': '', 'Killed 3': '', 'Slaughtered 3': '', 'Vaccinated 3': '', 'Mortality/Morbidity unit measure 3': '', 'Morbidity level 3': '', 'Mortality level 3': '', 'Species 4': '', 'Wildlife type 4': '', 'Production Category 4': '', 'Water type 4': '', 'Production system 4': '', 'Measuring unit 4': '', 'Susceptible 4': '', 'Cases 4': '', 'Dead 4': '', 'Killed 4': '', 'Slaughtered 4': '', 'Vaccinated 4': '', 'Mortality/Morbidity unit measure 4': '', 'Morbidity level 4': '', 'Mortality level 4': '', 'Species 5': '', 'Wildlife type 5': '', 'Production Category 5': '', 'Water type 5': '', 'Production system 5': '', 'Measuring unit 5': '', 'Susceptible 5': '', 'Cases 5': '', 'Dead 5': '', 'Killed 5': '', 'Slaughtered 5': '', 'Vaccinated 5': '', 'Mortality/Morbidity unit measure 5': '', 'Morbidity level 5': '', 'Mortality level 5': '', 'Species 6': '', 'Wildlife type 6': '', 'Production Category 6': '', 'Water type 6': '', 'Production system 6': '', 'Measuring unit 6': '', 'Susceptible 6': '', 'Cases 6': '', 'Dead 6': '', 'Killed 6': '', 'Slaughtered 6': '', 'Vaccinated 6': '', 'Mortality/Morbidity unit measure 6': '', 'Morbidity level 6': '', 'Mortality level 6': '', 'Outbreak year': '', 'Suspicion/Start date': '', 'Confirmation date': '', '"Date of completion of prelim. C&amp': '', 'D"': '', 'End date': '', 'Status Continuing/Resolved': '', 'Specific information for the outbreak': '', 'Suspicion': '', 'Clinical signs': '', 'Diagnostic tests': '', 'Necropsy': '', 'Control measures 1': '', 'Control measures 2': '', 'Control measures 3': '', 'Control measures 4': '', 'Control measures 5': '', 'Control measures 6': '', 'Origin of infection 1': '', 'Origin of infection 2': '', 'Origin of infection 3': '', 'Origin of infection 4': '', 'Origin of infection 5': '', 'Origin of infection 6': '', 'Category 1': '', 'Subcategory 1': '', 'Test name 1': '', 'Test type 1': '', 'Laboratory name 1': '', 'Laboratory type 1': '', 'Species 1_1': '', 'Result date 1': '', 'Result type 1': '', 'Category 2': '', 'Subcategory 2': '', 'Test name 2': '', 'Test type 2': '', 'Laboratory name 2': '', 'Laboratory type 2': '', 'Species 2_1': '', 'Result date 2': '', 'Result type 2': '', 'Category 3': '', 'Subcategory 3': '', 'Test name 3': '', 'Test type 3': '', 'Laboratory name 3': '', 'Laboratory type 3': '', 'Species 3_1': '', 'Result date 3': '', 'Result type 3': '', 'Category 4': '', 'Subcategory 4': '', 'Test name 4': '', 'Test type 4': '', 'Laboratory name 4': '', 'Laboratory type 4': '', 'Species 4_1': '', 'Result date 4': '', 'Result type 4': '', 'Category 5': '', 'Subcategory 5': '', 'Test name 5': '', 'Test type 5': '', 'Laboratory name 5': '', 'Laboratory type 5': '', 'Species 5_1': '', 'Result date 5': '', 'Result type 5': '', 'Category 6': '', 'Subcategory 6': '', 'Test name 6': '', 'Test type 6': '', 'Laboratory name 6': '', 'Laboratory type 6': '', 'Species 6_1': '', 'Result date 6': '', 'Result type 6': '', 'Pertinence': '', });
lyr_adisoutbreaks20250310_095523_1.set('fieldLabels', {'Reference': 'no label', 'National reference': 'no label', 'Country/Territory': 'no label', 'Event reference': 'no label', 'Тип': 'no label', 'Disease name': 'no label', 'Disease type': 'no label', 'Epidemiological unit': 'no label', 'Local Authority Unit (LAU)': 'no label', 'Submitted on': 'no label', 'Modified on': 'no label', 'Administrative division level 1': 'no label', 'Administrative division level 2': 'no label', 'Administrative division level 3': 'no label', 'Outbreak occurring inside an already restricted zone': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Approximate location': 'no label', 'Location': 'no label', 'Species 1': 'no label', 'Wildlife type 1': 'no label', 'Production Category 1': 'no label', 'Water type 1': 'no label', 'Production system 1': 'no label', 'Measuring unit 1': 'no label', 'Susceptible 1': 'no label', 'Cases 1': 'no label', 'Dead 1': 'no label', 'Killed 1': 'no label', 'Slaughtered 1': 'no label', 'Vaccinated 1': 'no label', 'Mortality/Morbidity unit measure 1': 'no label', 'Morbidity level 1': 'no label', 'Mortality level 1': 'no label', 'Species 2': 'no label', 'Wildlife type 2': 'no label', 'Production Category 2': 'no label', 'Water type 2': 'no label', 'Production system 2': 'no label', 'Measuring unit 2': 'no label', 'Susceptible 2': 'no label', 'Cases 2': 'no label', 'Dead 2': 'no label', 'Killed 2': 'no label', 'Slaughtered 2': 'no label', 'Vaccinated 2': 'no label', 'Mortality/Morbidity unit measure 2': 'no label', 'Morbidity level 2': 'no label', 'Mortality level 2': 'no label', 'Species 3': 'no label', 'Wildlife type 3': 'no label', 'Production Category 3': 'no label', 'Water type 3': 'no label', 'Production system 3': 'no label', 'Measuring unit 3': 'no label', 'Susceptible 3': 'no label', 'Cases 3': 'no label', 'Dead 3': 'no label', 'Killed 3': 'no label', 'Slaughtered 3': 'no label', 'Vaccinated 3': 'no label', 'Mortality/Morbidity unit measure 3': 'no label', 'Morbidity level 3': 'no label', 'Mortality level 3': 'no label', 'Species 4': 'no label', 'Wildlife type 4': 'no label', 'Production Category 4': 'no label', 'Water type 4': 'no label', 'Production system 4': 'no label', 'Measuring unit 4': 'no label', 'Susceptible 4': 'no label', 'Cases 4': 'no label', 'Dead 4': 'no label', 'Killed 4': 'no label', 'Slaughtered 4': 'no label', 'Vaccinated 4': 'no label', 'Mortality/Morbidity unit measure 4': 'no label', 'Morbidity level 4': 'no label', 'Mortality level 4': 'no label', 'Species 5': 'no label', 'Wildlife type 5': 'no label', 'Production Category 5': 'no label', 'Water type 5': 'no label', 'Production system 5': 'no label', 'Measuring unit 5': 'no label', 'Susceptible 5': 'no label', 'Cases 5': 'no label', 'Dead 5': 'no label', 'Killed 5': 'no label', 'Slaughtered 5': 'no label', 'Vaccinated 5': 'no label', 'Mortality/Morbidity unit measure 5': 'no label', 'Morbidity level 5': 'no label', 'Mortality level 5': 'no label', 'Species 6': 'no label', 'Wildlife type 6': 'no label', 'Production Category 6': 'no label', 'Water type 6': 'no label', 'Production system 6': 'no label', 'Measuring unit 6': 'no label', 'Susceptible 6': 'no label', 'Cases 6': 'no label', 'Dead 6': 'no label', 'Killed 6': 'no label', 'Slaughtered 6': 'no label', 'Vaccinated 6': 'no label', 'Mortality/Morbidity unit measure 6': 'no label', 'Morbidity level 6': 'no label', 'Mortality level 6': 'no label', 'Outbreak year': 'no label', 'Suspicion/Start date': 'no label', 'Confirmation date': 'no label', '"Date of completion of prelim. C&amp': 'no label', 'D"': 'no label', 'End date': 'no label', 'Status Continuing/Resolved': 'no label', 'Specific information for the outbreak': 'no label', 'Suspicion': 'no label', 'Clinical signs': 'no label', 'Diagnostic tests': 'no label', 'Necropsy': 'no label', 'Control measures 1': 'no label', 'Control measures 2': 'no label', 'Control measures 3': 'no label', 'Control measures 4': 'no label', 'Control measures 5': 'no label', 'Control measures 6': 'no label', 'Origin of infection 1': 'no label', 'Origin of infection 2': 'no label', 'Origin of infection 3': 'no label', 'Origin of infection 4': 'no label', 'Origin of infection 5': 'no label', 'Origin of infection 6': 'no label', 'Category 1': 'no label', 'Subcategory 1': 'no label', 'Test name 1': 'no label', 'Test type 1': 'no label', 'Laboratory name 1': 'no label', 'Laboratory type 1': 'no label', 'Species 1_1': 'no label', 'Result date 1': 'no label', 'Result type 1': 'no label', 'Category 2': 'no label', 'Subcategory 2': 'no label', 'Test name 2': 'no label', 'Test type 2': 'no label', 'Laboratory name 2': 'no label', 'Laboratory type 2': 'no label', 'Species 2_1': 'no label', 'Result date 2': 'no label', 'Result type 2': 'no label', 'Category 3': 'no label', 'Subcategory 3': 'no label', 'Test name 3': 'no label', 'Test type 3': 'no label', 'Laboratory name 3': 'no label', 'Laboratory type 3': 'no label', 'Species 3_1': 'no label', 'Result date 3': 'no label', 'Result type 3': 'no label', 'Category 4': 'no label', 'Subcategory 4': 'no label', 'Test name 4': 'no label', 'Test type 4': 'no label', 'Laboratory name 4': 'no label', 'Laboratory type 4': 'no label', 'Species 4_1': 'no label', 'Result date 4': 'no label', 'Result type 4': 'no label', 'Category 5': 'no label', 'Subcategory 5': 'no label', 'Test name 5': 'no label', 'Test type 5': 'no label', 'Laboratory name 5': 'no label', 'Laboratory type 5': 'no label', 'Species 5_1': 'no label', 'Result date 5': 'no label', 'Result type 5': 'no label', 'Category 6': 'no label', 'Subcategory 6': 'no label', 'Test name 6': 'no label', 'Test type 6': 'no label', 'Laboratory name 6': 'no label', 'Laboratory type 6': 'no label', 'Species 6_1': 'no label', 'Result date 6': 'no label', 'Result type 6': 'no label', 'Pertinence': 'no label', });
lyr_adisoutbreaks20250310_095523_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
# COVID-19 Thematic Mapping in the United States

## Introduction:
This project aims to visualize COVID-19 cases and rates in the United States through thematic mapping. This project offers interactive maps with proportional symbols and choropleth that provide COVID-19 data for each county in 2020. The maps provide information about the prevalence and intensity of COVID-19 in various parts of the nation.

## Maps:
- Map 1: This choropleth map provides a visual representation of the intensity of COVID-19 spread across the United States in 2020, illustrates the COVID-19 rates per thousand residents at the county level. Users can hover the mouse over the map to see the COVID-19 rates at that county.
- Link: http://127.0.0.1:5500/map1.html
<img width="1440" alt="截屏2024-02-02 下午3 58 22" src="https://github.com/zyhleohao/COVID-19-cases-and-rates-in-US/assets/129431505/dadd274c-a9bc-4dfe-a5f6-71667d8f10db">

- Map 2: This proportional symbols map displays COVID-19 cases in the US in 2020, users can observe variations in the number of cases across different counties. Users can click on any ponits on the map to see the cases in that county.
- Link: http://127.0.0.1:5500/map2.html
<img width="1440" alt="截屏2024-02-02 下午3 57 37" src="https://github.com/zyhleohao/COVID-19-cases-and-rates-in-US/assets/129431505/9d5d9387-7e76-4163-bb52-42a9abda572d">

## Libraries in Use:

- Leaflet.js
- Mapshape
- GitHub Pages

## Data Sources:

The COVID-19 case/death data are originally from The New York Times. The data include all the cases in 2020. The population data used for calculating the case rates are from the 2018 ACS 5 year estimates. Both data are at the county level. The U.S. county boundary shapefile was downloaded from the U.S. Census Bureau. The data have been processed in order to suit the purpose of this project. The case rate is calculated as cases per thousand residents.

## Credit:
Thanks to the U.S. Census Bureau for providing county border shapefiles and The New York Times for contributing COVID-19 data, the effort is acknowledged.

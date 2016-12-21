
*It tells is a application which tells information like minimum and maximum temperature about a particular place *

***How to use**
* Connect to internet
* Open index.html file and wait  for the map to load
* When we  click on a marker a window opens which shows the name,  image and temperatures of the place
* we can also select place from the list view on the left
* input field filters the locations in list and markers and displays only those which match to it
* When we select a particular place its markers color changes to green  and markers bounce

***Frame works***
* Google maps api for map
* Open weather map api to show max and min temperatures
* street view api to show the image in infowindow
* knockout-3.2.0.js (for organizing and making changes in data visible easier)and jQuery(writing the code easily) are used

***If unexpected things occur***
* If something wrong went and map could not load an alert would come telling the map could not load
* If something went wrong while loading the information in infoWindow **could bot display** will be shown in infoWindow

***summary***
This a single-page application featuring a map of your neighborhood. Additional functionalities are added to this application, including: map markers to identify popular locations or places, a search function to easily discover these locations, and a listview to support simple browsing of all locations. There is a APIs that provide additional information about each of these locations
var map;
var ajaxRequest;
var plotlist;
var plotlayers=[];

var pPlants = L.geoJson().addToMao(map);

var ppCollection =[{
	"type":"FeatureCollection",
	"features":[]
}];
var ppFeatTemplate =[{
	"type": "Feature",
	"geometry": {"type":"Point", "coordinates": []},
	"properties": {"City":"","State":"","Facility Type":"","Output":"", "Status":""}
}];

var cogenIcon = L.MakiMarkers.icon({
	icon: "industrial",
	color: "#b0b",
	size: "s"
});

//http://colorschemedesigner.com/#0041Tw0w0w0w0
var opFacIcon = L.MakiMarkers.icon({
	icon: "circle-stroked",
	color: "#9FEE00",
	size:"l"
});

var idleFacIcon = L.MakiMarkers.icon({
	icon: "circle-stroked",
	color: "#5CCCCC",
	size:"l"
});

var pilotProjectIcon = L.MakiMarkers.icon({
	icon: "circle-stroked",
	color: "#1D7373",
	size:"l"
});

var propFacIcon = L.MakiMarkers.icon({
	icon: "circle-stroked",
	color: "#C9F76F",
	size:"l"
});

var nonOpIcon = L.MakiMarkers.icon({
	icon: "circle-stroked",
	color: "#FF0000",
	size:"l"
});

var activeDevIcon = L.MakiMarkers.icon({
	icon: "circle-stroked",
	color: "#FF7400",
	size:"l"
});

function initmap() {
	// set up the map
	map = new L.Map('map');

	// create the tile layer with correct attribution
	var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmAttrib='Map data © OpenStreetMap contributors';
	var osm = new L.TileLayer(osmUrl, {minZoom: 3, maxZoom: 18, attribution: osmAttrib});		

	// start the map in California
	map.setView([36.208, -120.102], 6);
	map.addLayer(osm);
}
/**
 * 
 */
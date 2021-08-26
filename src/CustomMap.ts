export class CustomMap {
    private googleMap: google.maps.Map

    constructor(mapDivId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(mapDivId), {zoom: 5, center: {lat: 0, lng: 0}})
    }
}
const style = [
    {
        "featureType": "landscape",
        "stylers": [
            {
                "hue": "#FFBB00"
            },
            {
                "saturation": 43.400000000000006
            },
            {
                "lightness": 37.599999999999994
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "road.highway",
        "stylers": [
            {
                "hue": "#FFC200"
            },
            {
                "saturation": -61.8
            },
            {
                "lightness": 45.599999999999994
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "stylers": [
            {
                "hue": "#FF0300"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 51.19999999999999
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "hue": "#FF0300"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 52
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "hue": "#0078FF"
            },
            {
                "saturation": -13.200000000000003
            },
            {
                "lightness": 2.4000000000000057
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "hue": "#00FF6A"
            },
            {
                "saturation": -1.0989010989011234
            },
            {
                "lightness": 11.200000000000017
            },
            {
                "gamma": 1
            }
        ]
    }
]


function initMap() {
    const mapParams = {
        center: {lat: 50.081438, lng: 20.001853},
        zoom: 16,
        mapTypeControl: false,
        styles: style,
    };

    const map = new google.maps.Map(document.querySelector('.map'), mapParams);

    let markerSize = new google.maps.Size(75, 125);
    if(window.innerWidth < 769) {
        markerSize = new google.maps.Size(60, 100)
    }

    const marker = new google.maps.Marker({
        position: new google.maps.LatLng(50.081438, 20.001853),
        map: map,
        animation: google.maps.Animation.DROP,
        icon: {
            url: './img/icons/map_pin.svg',
            scaledSize: markerSize,
        }
    });

    google.maps.event.addListener(
        marker,
        'click',
        ()=>window.open('https://www.google.com/maps/dir/?api=1&destination=QVB&destination_place_id=ChIJp5He2KtFFkcRFneCdvpV9QI', '_blank')
    );
}

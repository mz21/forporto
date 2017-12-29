<template lang="jade">
container
  #map_section
    #tracker_box
      #tracker_section
        .row
          .icon_box
            img.icon(:src="iconClock")
          h5.tracker_time 9:30 am
        .row
          .icon_box
            img.icon(:src="iconDistance")
          h5.tracker_distance 1.8 mi
  subnav

</template>

<script>
import Container from '@/components/Container'
import Subnav from '@/components/Subnav'
import mapboxgl from 'mapbox-gl'
import iconClock from '@/assets/icons/clock.svg'
import iconDistance from '@/assets/icons/distance.svg'
import routesData from '@/store/data/routes.json'

export default {
  name: 'PageIntro',
  components: {
    Container,
    Subnav
  },
  mounted () {
    mapboxgl.accessToken = 'pk.eyJ1IjoibXpob25nMjEiLCJhIjoiMENiR1A5VSJ9.juucE1xKoXyVQWMT3nl7zA'
    const map = new mapboxgl.Map({
      container: 'map_section',
      style: 'mapbox://styles/mapbox/light-v9',
      center: [-8.6135977, 41.1535069],
      zoom: 11.8
    })
    map.on('load', function () {
      map.addLayer({
        'id': 'points',
        'type': 'symbol',
        'source': {
          'type': 'geojson',
          'data': {
            'type': 'FeatureCollection',
            'features': [
              {
                'type': 'Feature',
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-8.6065795, 41.1472382]
                },
                'properties': {
                  'icon': 'restaurant'
                }
              },
              {
                'type': 'Feature',
                'geometry': {
                  'type': 'Point',
                  'coordinates': [-8.6105553, 41.141536]
                },
                'properties': {
                  'icon': 'restaurant'
                }
              }
            ]
          }
        },
        'layout': {
          'icon-image': '{icon}-15'
        }
      })
      for (let i = 0; i < routesData.route.length; i++) {
        map.addLayer({
          'id': 'route' + i,
          'type': 'line',
          'source': {
            'type': 'geojson',
            'data': {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'LineString',
                'coordinates': routesData.route[i].coords
              }
            }
          },
          'layout': {
            'line-join': 'round',
            'line-cap': 'round'
          },
          'paint': {
            'line-color': 'rgba(144,19,255, 0.22)',
            'line-width': 4
          }
        })
      }
    })
  },
  data () {
    return {
      iconClock,
      iconDistance
    }
  }
}
</script>

<style scoped lang="sass">
@import '~@/globals/variables'
#map_section
  width: 100%
  height: 100%
.subnav
  height: $nav-height
  width: 100%
  background: whitesmoke
#tracker_box
  position: absolute
  width: 100px
  background-color: rgba(255,255,255,0.9)
  border-radius: 2px
  z-index: 100
  right: 18px
  top: 18px
  padding: 8px
  box-shadow: -2px 2px 3px $shadow
  display: flex
  justify-content: center
  align-items: center
  .row
    display: flex
.tracker_time, .tracker_distance
  color: $text-color
  font-size: $medium-text
  font-family: "Gotham Narrow SSm A", "Gotham Narrow SSm B"
  font-weight: 400
  margin: 0
.tracker_label
  padding: 2px 0 8px 0
  color: rgb(160,160,160)
  font-family: "Gotham Narrow SSm A", "Gotham Narrow SSm B"
  font-size: 8px
  letter-spacing: 0.1px
.icon
  fill: red
  width: auto
  height: $medium-text
.icon_box
  width: 25px
  margin-bottom: calc(0.2 * #{$medium-text})
</style>

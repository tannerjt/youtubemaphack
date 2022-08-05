import './style.css'
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView';

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script')

tag.src = "https://www.youtube.com/player_api"
var firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
window.onYouTubeIframeAPIReady = function () {
  player = new YT.Player('ytplayer', {
    height: '300',
    width: '500',
    videoId: 'fdMrwcOMdFE',
    playerVars: {
      'playsinline': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  })
}

// 4. The API will call this function when the video player is ready.
window.onPlayerReady = function (event) {
  event.target.playVideo()
  setInterval(() => {
    const currentTime = player.getCurrentTime();
    navigateWithTime(currentTime);
  }, 1000)
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
window.onPlayerStateChange = function (event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    done = true
  }
}

const map = new Map({
  basemap: "hybrid" // Basemap layer service
});

const view = new MapView({
  map: map,
  center: [-72.31729224247019, 33.86144582292893], // Longitude, latitude
  zoom: 3, // Zoom level
  container: "map" // Div element
})

const config = {
  4: {
    title: 'The Wedge, California',
    message: `The Wedge can produce large beach break up to 30 feet.  Shallow beach breaks are dangerous for surfers, but great for bodyboarding.`,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Wedge%2C_The.jpg/1600px-Wedge%2C_The.jpg',
    x: -117.88183133378953,
    y: 33.59338881928402,
    zoom: 14
  },
  21: {
    title: 'Pipeline, Hawaii',
    message: `Located on O'ahu's North Shore, this famous break is famous for fast breaking barrels and large outer reef monsters.`,
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Empty_wave_at_Banzai_Pipeline.jpeg',
    x:  -158.05141651405515,
    y: 21.66616016150571,
    zoom: 14
  },
  52: {
    title: 'Mullaghmore Head, Ireland',
    message: `Cold, bumpy, and mean.  Ireland's big wave spot breaks off enormous cliffs and can produce 60 foot giants.`,
    image: 'https://www.surfertoday.com/images/stories/mullaghmore-head-barrel.jpg',
    x: -8.492802987432697,
    y: 54.455833761298564,
    zoom: 14
  },
  74: {
    title: 'Cortez Bank, California',
    message: `An outermost feature in California's Channel Islands, this remote spot can produce some of the largest tubes possible.  Capable of 90 foot swells, this break is only for the most serious wave chasers.`,
    image: 'https://d14fqx6aetz9ka.cloudfront.net/wp-content/uploads/2019/08/13141307/AERIAL2.jpg',
    x: -119.16632439061101,
    y: 32.46586454838841,
    zoom: 9
  },
  117: {
    title: 'Shipstern Bluff, Tasmania',
    message: `Nicknamed 'shippies', this wave is famous for it's multiple 'steps' that prove difficult but rewarding for those that dare to attempt it.`,
    image: 'https://www.surfertoday.com/images/stories/shipsternbluffstep.jpg',
    x: 147.75186889633594,
    y: -43.20947195084807,
    zoom: 13
  },
  130: {
    title: 'Belharra, France',
    message: `This special wave requires just the right conditions to fire, but this offshore gem offers some of the biggest waves on the planet.`,
    image: `https://www.surfertoday.com/images/stories/belharra-2020.jpg`,
    x: -1.6789508129983461,
    y: 43.406619659771344,
    zoom: 12
  },
  168: {
    title: 'Nazare, Portugal',
    message: `The underwater canyon at Nazare waves that burst up in height before breaking.  THis dangerous break has produced some of the biggest waves ever ridden in competition.`,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Can_you_see_the_surfer%3F_%2833988985575%29.jpg/480px-Can_you_see_the_surfer%3F_%2833988985575%29.jpg',
    x: -9.08770339677496,
    y: 39.60431978148163,
    zoom: 13
  },
  206: {
    title: 'Mavericks, CA',
    message: 'Jeff Clark grew up riding this wave, which everybody thought was too dangerous to surf, by himself before convincing others of its existence.  This ominous spot is famous for kicking off the big wave community.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/2010_mavericks_competition.jpg/440px-2010_mavericks_competition.jpg',
    x: -122.4990473724547,
    y: 37.49189133730058,
    zoom: 14
  },
  238: {
    title: 'Teahupoo, Tahiti',
    message: `One of the thickest barrels on Earth, Teahupoo is the proving ground for surfers on the WSL.`,
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Kitesurfteahupoo.jpg',
    x: -149.31221050693634,
    y: -17.803473338664322,
    zoom: 13
  },
  260: {
    title: 'Jaws, Hawaii',
    message: `Peahi, also knows as Jaws, is a big wave spot off of Maui.  It's thunderous sound can be heard across the island on big days.`,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Jesse_Richman_-_Pierre_Bouras_1.jpg/520px-Jesse_Richman_-_Pierre_Bouras_1.jpg',
    x: -156.29738970246086,
    y: 20.94418094224754,
    zoom: 13
  }
}

const navigateWithTime = (seconds) => {
  const c = config[Math.floor(seconds)];
  if (c) {
    const box = document.querySelector('.a-box');
    const boxTitle = document.querySelector('#title');
    const boxMessage = document.querySelector('#message');
    const boxImage = document.querySelector('#image');

    boxTitle.innerHTML = c.title;
    boxMessage.innerHTML = c.message;
    boxImage.src = c.image;
    setTimeout(() => {
      box.style.visibility = 'visible';
      box.style.opacity = 1;
      box.style.display = 'inline-block';
    }, 500)

    view.goTo({
      center: [c.x, c.y],
      zoom: c.zoom
    }, {
      animate: true,
      duration: 4000,
      easing: 'ease-in'
    }).then(() => {
      const keys = Object.keys(config);
      const idxCurrent = keys.indexOf(`${Math.floor(seconds)}`);
      const nextTime = keys[idxCurrent + 1];
      if (nextTime) {
        const diff = nextTime - seconds;
        setTimeout(() => {
          view.goTo({
            center: [-72.31729224247019, 33.86144582292893],
            zoom: 5
          }, {
            animate: true,
            duration: 2500,
            easing: 'ease-out'
          });
          box.style.visibility = 'hidden';
          box.style.opacity = 0;
        }, diff * 1000 - 8000);
      }
    })
  }
}
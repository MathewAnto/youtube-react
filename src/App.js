// import logo from './logo.svg';
import "./App.css";
import { Home } from "./components/Home";
import vid1 from './img/vid1.png'
import dp1 from './img/dp1.png'
import vid2 from './img/vid2.png'
import dp2 from './img/dp2.png'
import vid3 from './img/vid3.png'
import dp3 from './img/dp3.png'
import vid4 from './img/vid4.png'
import dp4 from './img/dp4.png'
import vid5 from './img/vid5.png'
import dp5 from './img/dp5.png'
import vid6 from './img/vid6.png'
import dp6 from './img/dp6.png'
import vid7 from './img/vid7.png'
import dp7 from './img/dp7.png'

function App() {

  const data = [
    {
      thumbnail: vid1,
      vidLink: "https://www.youtube.com/embed/rAUn1Lom6dw?si=uk2EHdqtgO7BRRoP?autoplay=1",
      dp: dp1,
      title: "Code Tetris: JavaScript Tutorial for Beginners",
      site: "freeCodeCamp.org",
      siteLink: "https://www.youtube.com/@freecodecamp",
      views: "375K views",
      uptime: "3 years ago"
      },
    {
      thumbnail: vid2,
      vidLink: "https://www.youtube.com/embed/J5j95RUSLd8?si=Ifuf8FnfxgbU7hSm?autoplay=1",
      dp: dp2,
      title: "2024 Total Solar Eclipse: Through the Eyes of NASA (Telescope Feed)",
      site: "NASA",
      siteLink: "https://www.youtube.com/@NASA",
      views: "135K views",
      uptime: "1 month ago"
    },
    {
      thumbnail: vid3,
      vidLink: "https://www.youtube.com/embed/w4N22lhkEPg?si=ffmYPpoRB-pjoTnT?autoplay=1",
      dp: dp3,
      title: "Be Notorious End Credit Version Lyric Video | Bheeshmaparvam |...",
      site: "123Musix",
      siteLink: "https://www.youtube.com/@123Musix",
      views: "8.2M views",
      uptime: "2 years ago"
    },
    {
      thumbnail: vid4,
      vidLink: "https://www.youtube.com/embed/EA_mzs4ICwo?si=U76HaHt6avpIQuOj?autoplay=1",
      dp: dp4,
      title: "City of the Sun - W.16th St. | Sofar Washington D.C.",
      site: "Sofar Sounds",
      siteLink: "https://www.youtube.com/@Sofarsounds",
      views: "4.3M views",
      uptime: "8 years ago"
    },
    {
      thumbnail: vid5,
      vidLink: "https://www.youtube.com/embed/1-8i8Q6Si3w?si=21Y5ol97m-VZydvI?autoplay=1",
      dp: dp5,
      title: "1 month with the Jimny has changed me | Malayalam Review | Content...",
      site: "Content With Cars",
      siteLink: "https://www.youtube.com/@ContentWithCars",
      views: "144K views",
      uptime: "4 months ago"
    },
    {
      thumbnail: vid6,
      vidLink: "https://www.youtube.com/embed/fy3TqHU7DsU?si=tT0eAFMkvaOn8S3k?autoplay=1",
      dp: dp6,
      title: "Namma Stories - The South Anthem | NJ, Arivu, SIRI & Hanumankind |...",
      site: "Netflix India",
      siteLink: "https://www.youtube.com/@NetflixIndiaOfficial",
      views: "9.3M views",
      uptime: "2 years ago"
    },
    {
      thumbnail: vid7,
      vidLink: "https://www.youtube.com/embed/EW4pNzAbVao?si=vlMaHS7ZeFaSOvag?autoplay=1",
      dp: dp7,
      title: "KSHMR & Lost Stories - Bombay Dreams [feat. Kavita Seth] (Official Music Video)",
      site: "KSHMR",
      siteLink: "https://www.youtube.com/channel/UCFMjkrMT7Gvg84v0av-DIwA",
      views: "40M views",
      uptime: "4 years ago"
    }
  ]

  return (
    <div className="App">
      <Home data={data}/>
    </div>
  );
}

export default App;

import "./App.css";
import Video from "./components/Video";
import videos  from "./data/data";

function App() {
  
  return (
    <div className="App">
      <div>Videos</div>
      {videos.map((video) => (
        <Video
        key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
        ></Video>
      ))}
      {/* <Video{...obj}></Video> */}
      {/* <Video
        title="React JS tutorial"
        views="100K "
        time="1 year ago"
        channel="NEW LEARNER's"
      ></Video> */}
      {/* <Video verified ={false}
        title="Node JS tutorial"
        views="15K "
        time="8 months ago"
        channel="NEW LEARNER's"
      ></Video> */}
    </div>
  );
}

export default App;

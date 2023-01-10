import "./watch.scss";
import { ArrowBack } from "@mui/icons-material";

function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBack />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4"
        // src="https://youtu.be/FzWG8jiw4XM"
      />
    </div>
  );
}

export default Watch;

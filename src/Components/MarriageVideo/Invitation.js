import { Card } from "@mui/material";
import { Player } from "video-react";
import "video-react/dist/video-react.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

export default function Invitation() {
  return (
    <div style={styles}>

      
      <Player playsInline poster="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUiyHK9rvG8wWas4bftIoDdGrj_ye1c3ftRQ&usqp=CAU">
        <source
          src="https://www.youtube.com/watch?v=tj_7NIzU7wY"
          type="video/mp4"
        />
      </Player>
    </div>
  );
}
// const App = () => (
//   <div style={styles}>
//     <Hello name="Video React" />
//     <h2>
//       The web video player built from the ground up for an HTML5 world using
//       React library. {"\u2728"}
//     </h2>
//     <Player playsInline poster="https://video-react.js.org/assets/poster.png">
//       <source
//         src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
//         type="video/mp4"
//       />
//     </Player>
//   </div>
// );

// render(<App />, document.getElementById("root"));

import axios from "axios";

const getLocation = async () => {
  navigator.geolocation
    ? navigator.geolocation.getCurrentPosition((position) => {
        axios
          .post("http://localhost:5050/api/v1/location", {
            coordinates: position.coords,
            timestamp: position.timestamp,
          })
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));
      })
    : console.log("Geolocation is not supported by this browser.");
};

function App() {
  return (
    <div>
      <button onClick={getLocation}>get location</button>
    </div>
  );
}

export default App;

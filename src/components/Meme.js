import React from "react";
// import memesData from "../memesData";

export default function Meme(props) {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMeme, setAllMeme] = React.useState([]);
  function getMemeImage() {
    const randNum = Math.floor(Math.random() * allMeme.length);
    const randURL = allMeme[randNum].url;
    setMeme((prevState) => {
      return {
        ...prevState,
        randomImage: randURL,
      };
    });
  }
  React.useState(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMeme(data.data.memes));
  }, []);
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  // Rough work

  // const [starWarsData, setStarWarsData] = React.useState({});
  // const [count, setCount] = React.useState(1);
  // console.log("component Rendered");
  // React.useEffect(
  //   function () {
  //     fetch(`https://swapi.dev/api/people/${count}`)
  //       .then((res) => res.json())
  //       .then((data) => setStarWarsData(data));
  //   },
  //   [count]
  // );
  // function add() {
  //   setCount(count + 1);
  // }

  // Rough work ends
  return (
    <>
      <main>
        <section className="content">
          <form action="">
            <input
              type="text"
              placeholder="Top text"
              name="topText"
              value={meme.topText}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Bottom text"
              name="bottomText"
              value={meme.bottomText}
              onChange={handleChange}
            />
            <button
              className="new-img-btn"
              type="button"
              onClick={getMemeImage}
            >
              Get a new meme image 🖼️
            </button>
          </form>
          <div className="meme">
            <img src={meme.randomImage} alt="" />
            <h2 className="top-text">{meme.topText}</h2>
            <h2 className="bottom-text">{meme.bottomText}</h2>
          </div>
        </section>
      </main>
    </>
  );
}

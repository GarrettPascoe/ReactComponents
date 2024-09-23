import Header from "./Header";
import Footer from "./Footer";
import Background from "./Background";
import TextBoxWithButton from "./TextBoxWithButton";

const Portfolio = () => {
  return (
    <>
      <div
        className="container-fluid"
        style={{
          position: "absolute",
          zIndex: 1,
          top: 0,
          left: 0,
          padding: 0,
          margin: 0,
        }}
      >
        <Header />

        <div
          className="p-3 text-primary-emphasis bg-info-subtle border border-primary-subtle container-md"
          style={{
            position: "relative",
            zIndex: 1,
            height: 1900,
          }}
        >
          <div className="row" style={{ height: 100 }}></div>

          <TextBoxWithButton
            title="Click Search Google Chrome Extension"
            text="Click Search is a Google Chrome Extension that allows the
                      user to query ChatGPT about the content featured in a
                      YouTube video by clicking the extension button. The
                      extension determines what the YouTube video is about
                      before sending premade queries to ChatGPT and dispaying
                      the results in a pop-up."
            butLink="/ClickSearch"
            butName="Go to Click Search"
          />
          <div className="row" style={{ height: 100 }}></div>

          <TextBoxWithButton
            title="Dog, Cat, or Squirrel Image Classifier"
            text="A Pytorch image classifier model that I trained
          using images sourced from images.cv
          organized into training and testing folders. The model
          will attempt to determine whether the animal in a provided
          image is a dog, cat, or squirrel."
            butLink="/ImageClassification"
            butName="Go to Image Classifier"
          />
          <div className="row" style={{ height: 100 }}></div>
          <TextBoxWithButton
            title="Tower Defense Game"
            text="A Pytorch image classifier model that I trained
          using images sourced from images.cv
          organized into training and testing folders. The model
          will attempt to determine whether the animal in a provided
          image is a dog, cat, or squirrel."
            butLink="/ImageClassification"
            butName="Go to Image Classifier"
          />
          <div className="row" style={{ height: 100 }}></div>
          <TextBoxWithButton
            title="text box title"
            text="This is a test to see how the text box with button component looks when it is filled with text passed as a string parameter."
            butLink="/ImageClassification"
            butName="Go to Image Classifier"
          />
        </div>
        <div>
          <Footer />
        </div>
      </div>
      <div
        className="container-fluid"
        style={{
          position: "relative",
          zIndex: 0,
          padding: 0,
          margin: 0,
        }}
      >
        <Background />
        <Background />
        <Background />
        <Background />
        <Background />
      </div>
    </>
  );
};

export default Portfolio;

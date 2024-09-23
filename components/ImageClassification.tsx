import Header from "./Header";
import Footer from "./Footer";
import Background from "./Background";
import TextBox from "./TextBox";
import Paper from "@mui/material/Paper";
import blue from "@mui/material/colors/blue";
import DataPipeline from "D:/Projects/Open Projects/vite_react_app/src/assets/DataPipeline.png";
import NueralNetwork from "D:/Projects/Open Projects/vite_react_app/src/assets/NueralNetwork.png";
import Training from "D:/Projects/Open Projects/vite_react_app/src/assets/Training.png";

const ImageClassification = () => {
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
          className="p-3 text-primary-emphasis bg-info-subtle border border-primary-subtle"
          style={{
            position: "relative",
            zIndex: 1,
            height: 3500,
          }}
        >
          <div className="row" style={{ height: 100 }} />
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <TextBox
                title="Dog, Cat, or Squirrel"
                text="An image classification model which determines whether an animal in an image is a dog, a cat, or a squirrel.
              It is a model made using Pytorch"
              />
            </div>
            <div className="col-2"></div>
          </div>
          <div className="row" style={{ height: 100 }} />
          <div className="row">
            <div className="col-6">
              <img
                src={DataPipeline}
                className="img-fluid w-100"
                alt="DataPipeline"
                style={{ position: "relative" }}
              />
            </div>
            <div className="col-6">
              <TextBox
                title="Data Pipeline"
                text="The model uses 128px x 128px png's sourced from images.cv. The images are seperated into two folders, 'training' and 'test',
              which each contain three sub-folders, 'cat', 'dog', and 'squirrel'. The class of the images are determined by the name of the
              sub-folders they are taken from. The data pipeline also randomly selects 10% of the images from the training set to create a 
              validation set."
              />
            </div>
          </div>
          <div className="row" style={{ height: 100 }} />
          <div className="row">
            <div className="col-6">
              <TextBox
                title="Nueral Network"
                text="The model is composed of three convolutional layers followed by three linear layers.
              Using batches of 32 images, 128px x 128px input images with three channels pass through a convolutional layer and a maxPool
              layer. After passing through all of the convolutional and maxPool layers, we obtain 12px x 12px output images with 64 channels.
              The model then flattens all dimensions aside from batch size. The model then passes through the three linear layers. The 4608
              features are narrowed down to 1000 features, then 100 features, until we have only the three features that are used to determine
              the classification of the image."
              />
            </div>
            <div className="col-6">
              <img
                src={NueralNetwork}
                className="img-fluid w-100 h-100"
                alt="NueralNetwork"
                style={{ position: "relative" }}
              />
            </div>
          </div>
          <div className="row" style={{ height: 100 }} />
          <div className="row">
            <div className="col-5">
              <img
                src={Training}
                className="img-fluid w-100"
                alt="Training"
                style={{ position: "relative" }}
              />
            </div>
            <div className="col-7">
              <TextBox
                title="Optimizer and Training"
                text="The current model uses a cross entropy loss optimizer and a learning rate of 0.001. I trained version 1.0 of the model
              with 8 epochs, and attained an accuracy of 74%"
              />
            </div>
          </div>
          <div className="row" style={{ height: 100 }} />
          <div className="row">
            <div className="col-1" />
            <div className="col-7">
              <Paper elevation={10} sx={{ backgroundColor: blue[50] }}>
                <Paper elevation={11} sx={{ backgroundColor: blue[300] }}>
                  <h4 style={{ margin: 10 }}>Links:</h4>
                </Paper>
                <p style={{ margin: 20 }}>
                  {" "}
                  <br></br>
                  <a href="https://github.com/GarrettPascoe/GP---Dog-Cat-or-Squirrel-">
                    Github Link
                  </a>
                  <br></br> <br></br>{" "}
                </p>
              </Paper>
            </div>
            <div className="col-4"></div>
          </div>
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

export default ImageClassification;

import Header from "./Header";
import Footer from "./Footer";
import Background from "./Background";
import TextBoxWithButton from "./TextBoxWithButton";
import TextBox from "./TextBox";

const Home = () => {
  return (
    <>
      <div>
        <div
          className="vw-100 h-100"
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
              height: 1500,
            }}
          >
            <div className="row" style={{ height: 100 }} />
            <TextBox
              title="Welcome to My Homepage"
              text="I am Garrett Pascoe, a recent graduate from Oakland
                      University with a strong interest in algorithms, machine
                      learning, neural networks, and other computer science
                      related topics. I built this website not only to showcase
                      my portfolio, but to be a part of it. It is a web app made
                      with a Django backend using Python and a React frontend
                      using Typescript."
            />
            <div className="row" style={{ height: 100 }} />
            <TextBoxWithButton
              title="n/a"
              text="Visit my About page in order to learn more about
                    me and gain insight into my thought processes."
              butLink="/About"
              butName="Go to About Page"
            />
            <div className="row" style={{ height: 100 }} />
            <TextBoxWithButton
              title="n/a"
              text="Visit my Resume page for an overview of my skills
                    and qualifications."
              butLink="/Resume"
              butName="Go to Resume Page"
            />
            <div className="row" style={{ height: 100 }} />
            <TextBoxWithButton
              title="n/a"
              text="Visit my portfolio page for a brief overview of my
                    projects with links for more in-depth explainations."
              butLink="/Portfolio"
              butName="Go to Portfolio Page"
            />
          </div>

          <div>
            <Footer />
          </div>
        </div>

        <div
          className=" "
          style={{
            position: "relative",
            zIndex: 0,
            padding: 0,
            margin: 0,
            top: 208,
          }}
        >
          <Background />
          <Background />
          <Background />
          <Background />
        </div>
      </div>
    </>
  );
};

export default Home;

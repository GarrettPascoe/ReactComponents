import Header from "./Header";
import Footer from "./Footer";
import Background from "./Background";
import TextBoxWithButton from "./TextBoxWithButton";

const Links = () => {
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
          <div className="row" style={{ height: 100 }} />
          <TextBoxWithButton
            title="Github Link"
            text="List of my github repositories"
            butLink=""
            butName="Github"
          />
          <div className="row" style={{ height: 100 }} />
          <TextBoxWithButton
            title="LinkedIn Link"
            text="Link to my LinkedIn page"
            butLink=""
            butName="LinkedIn"
          />
          <div className="row" style={{ height: 100 }} />
          <TextBoxWithButton
            title="Github Link"
            text="List of my github repositories"
            butLink=""
            butName="Github"
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

export default Links;

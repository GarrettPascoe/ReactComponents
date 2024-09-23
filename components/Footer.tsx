const Footer = () => {
  return (
    <div
      className="p-3 text-white bg-dark text-center"
      style={{ padding: 0, margin: 0, height: 500, bottom: 0 }}
    >
      <div className="row" style={{ height: 100 }}></div>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-3">
          <p style={{ margin: 20 }}>
            <h5>Website Links:</h5>
            <br></br>
            <a href="/Home">Home</a>
            <br></br>
            <a href="/About">About</a>
            <br></br>
            <a href="/Resume">Resume</a>
            <br></br>
            <a href="/Portfolio">Portfolio</a>
            <br></br>
          </p>
        </div>
        <div className="col-3">
          <p style={{ margin: 20 }}>
            <br></br>
            <h5>External Links:</h5>
            <br></br>
            <a href="https://github.com/GarrettPascoe?tab=repositories">
              Github Repositories
            </a>
            <br></br>
            <a href="https://www.linkedin.com/in/garrett-pascoe-29728a2a3">
              LinkedIn Profile
            </a>
            <br></br> <br></br>{" "}
          </p>
        </div>
        <div className="col-3">
          <p style={{ margin: 20 }}>
            <br></br>
            <h5>Contact Me:</h5>
            <br></br>
            <p>garrettp523@gmail.com</p>
            <br></br> <br></br>{" "}
          </p>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};

export default Footer;

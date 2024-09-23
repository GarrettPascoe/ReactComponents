import NavButtonPercent from "./NavButtonPercent";
import Paper from "@mui/material/Paper";
import blue from "@mui/material/colors/blue";

interface Props {
  title: string;
  text: string;
  butLink: string;
  butName: string;
}

const TextBoxWithButton = ({ title, text, butLink, butName }: Props) => {
  if (title == "n/a") {
    return (
      <>
        <div className="row justify-content-md-center">
          <div className="col-10">
            <Paper elevation={10}>
              <div className="row">
                <div className="col-7">
                  <p style={{ margin: 20 }}>
                    {" "}
                    <br></br>
                    {text}
                    <br></br> <br></br>{" "}
                  </p>
                </div>
                <div className="col-1"></div>
                <div className="col-3">
                  <div
                    className="top-50 translate-middle-y"
                    style={{
                      position: "relative",
                      height: "50%",
                      width: "100%",
                    }}
                  >
                    <NavButtonPercent link={butLink} name={butName} />
                  </div>
                </div>
                <div className="col-1"></div>
              </div>
            </Paper>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="row justify-content-md-center">
        <div className="col-10">
          <Paper elevation={10}>
            <div
              className="w-50"
              style={{
                position: "relative",
                top: 5,
                left: 5,
              }}
            >
              <Paper elevation={11} sx={{ backgroundColor: blue[300] }}>
                <h4 style={{ margin: 10 }}>{title}</h4>
              </Paper>
            </div>
            <div className="row">
              <div className="col-7">
                <p style={{ margin: 20 }}>
                  {" "}
                  <br></br>
                  {text}
                  <br></br> <br></br>{" "}
                </p>
              </div>
              <div className="col-1"></div>
              <div className="col-3">
                <div
                  className="top-50 translate-middle-y"
                  style={{
                    position: "relative",
                    height: "50%",
                    width: "100%",
                  }}
                >
                  <NavButtonPercent link={butLink} name={butName} />
                </div>
              </div>
              <div className="col-1"></div>
            </div>
          </Paper>
        </div>
      </div>
    </>
  );
};

export default TextBoxWithButton;

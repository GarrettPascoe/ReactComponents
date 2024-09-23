import Header from "./Header";
import Footer from "./Footer";
import Background from "./Background";
import Paper from "@mui/material/Paper";

const Resume = () => {
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
          <div className="row">
            <div className="col"></div>
            <div className="col-5">
              <Paper elevation={10}>
                <p style={{ margin: 20 }}>
                  {" "}
                  <br></br>
                  <h3>Education:</h3>
                  <h5>Oakland University</h5>
                  318 Meadow Brook Rd, Rochester, MI 48309<br></br>
                  Bachelor of Science in Computer Science
                  <br></br>
                  <br></br>
                  <h5>Macomb Community College</h5>
                  14500 Twelve Mile Rd, Warren, MI 48088<br></br>
                  Associate's Degree in General Studies
                  <br></br> <br></br>{" "}
                </p>
              </Paper>
            </div>
            <div className="col"></div>
            <div className="col-6">
              <Paper elevation={10}>
                <p style={{ margin: 20 }}>
                  {" "}
                  <br></br>
                  <h3>Work Experience:</h3>
                  I've worked a part time job since I graduated high school as I
                  <br></br>
                  worked towards my degree. I've worked a customer service job
                  <br></br>
                  as a cashier and sales clerk as well as physically demanding
                  <br></br>
                  shipping and receiving jobs.
                  <br></br> <br></br>{" "}
                </p>
              </Paper>
            </div>
            <div className="col"></div>
          </div>

          <div className="row">
            <div className="col"></div>
            <div className="col-5">
              <div className="row">
                <div className="col">
                  <Paper elevation={10}>
                    <p style={{ margin: 20 }}>
                      {" "}
                      <br></br>
                      <h3>Math and Sciences:</h3>
                      <ul>
                        <li>
                          <strong>Linear Algebra</strong>
                        </li>
                        <li>
                          <strong>Trigonometry</strong>
                        </li>
                        <li>
                          <strong>Geometry</strong>
                        </li>
                        <li>
                          <strong>Calculus</strong>
                        </li>
                        <li>
                          <strong>Chemistry</strong>
                        </li>
                        <li>
                          <strong>Physics</strong>
                        </li>
                        <li>
                          <strong>Biology</strong>
                        </li>
                      </ul>
                      <br></br>{" "}
                    </p>
                  </Paper>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Paper elevation={10}>
                    <p style={{ margin: 20 }}>
                      {" "}
                      <br></br>
                      <h3>Other Skills:</h3>
                      <ul>
                        <li>
                          <strong>Customer Service</strong> - I always try to
                          remain polite and professional even on the more
                          stressful days.
                        </li>
                        <li>
                          <strong>Informative and Persuasive Writing</strong> -
                          I am very confident in my ability to find reasonable
                          conclusions and articulate said conclusions to others.
                        </li>
                        <li>
                          <strong>Problem Solving</strong> - I love a good
                          puzzle.
                        </li>
                        <li>
                          <strong>Optimization</strong> - I always am trying to
                          work out the most efficient and effective way for the
                          team to do tasks.
                        </li>
                        <li>
                          <strong>Project Leadership</strong> - I often
                          defaulted to team lead in my course projects for my
                          inititive in putting forth ideas.
                        </li>
                        <li>
                          <strong>Informal Workplace Leadership</strong> -
                          Coworkers often look for me to make calls when there
                          are no managers available.
                        </li>
                      </ul>
                      <br></br>{" "}
                    </p>
                  </Paper>
                </div>
              </div>
            </div>
            <div className="col"></div>
            <div className="col-6">
              <Paper elevation={10}>
                <p style={{ margin: 20 }}>
                  {" "}
                  <br></br>
                  <h3>Tech Skills:</h3>
                  <ul>
                    <h5>
                      <strong>Computer Languages:</strong>
                    </h5>
                    <li>
                      <strong>C++</strong>
                    </li>
                    <li>
                      <strong>C#</strong>
                    </li>
                    <li>
                      <strong>Java Script</strong>
                    </li>
                    <li>
                      <strong>Type Script</strong>
                    </li>
                    <li>
                      <strong>Python</strong>
                    </li>
                    <li>
                      <strong>HTML</strong>
                    </li>
                    <li>
                      <strong>CSS</strong>
                    </li>
                    <li>
                      <strong>XML</strong>
                    </li>
                    <li>
                      <strong>SQL</strong>
                    </li>
                  </ul>
                  <ul>
                    <h5>
                      <strong>Machine Learning:</strong>
                    </h5>
                    <li>
                      <strong>Pytorch</strong>
                    </li>
                    <li>
                      <strong>TensorFlow</strong>
                    </li>
                    <li>
                      <strong>Keras</strong>
                    </li>
                    <li>
                      <strong>Image Classification</strong>
                    </li>
                    <li>
                      <strong>Neural Networks</strong>
                    </li>
                    <li>
                      <strong>Algorithm Optimization</strong>
                    </li>
                  </ul>
                  <ul>
                    <h5>
                      <strong>Frontend:</strong>
                    </h5>
                    <li>
                      <strong>React</strong>
                    </li>
                    <li>
                      <strong>Django</strong>
                    </li>
                    <li>
                      <strong>SQLite</strong>
                    </li>
                    <li>
                      <strong>Node.js</strong>
                    </li>
                    <li>
                      <strong>Google Chrome Extension</strong>
                    </li>
                    <li>
                      <strong>REST API</strong>
                    </li>
                    <li>
                      <strong>YouTube API</strong>
                    </li>
                    <li>
                      <strong>OpenAI API</strong>
                    </li>
                  </ul>
                  <ul>
                    <h5>
                      <strong>Other:</strong>
                    </h5>
                    <li>
                      <strong>Unity</strong>
                    </li>
                    <li>
                      <strong>Agile Development</strong>
                    </li>
                    <li>
                      <strong>Database Design</strong>
                    </li>
                    <li>
                      <strong>Jupyter Notebook</strong>
                    </li>
                    <li>
                      <strong></strong>
                    </li>
                  </ul>
                  <br></br>{" "}
                </p>
              </Paper>
            </div>
            <div className="col"></div>
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

export default Resume;

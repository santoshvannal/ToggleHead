import React from "react";
import "./styles.css"; // Import the CSS file
import searchIcon from "./assets/svg/Icon_material_search.png.png";
import BusinessManRuning from "./assets/svg/Mas_Group_99.svg"

function Website() {
  return (
    <div className="website">
      <header className="header">
        <div className="logo">LOGO</div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#">Qualifications</a>
            </li>
            <li>
              <a href="#">Organizations</a>
            </li>
            <li>
              <a href="#">Research & Analysis</a>
            </li>
            <li>
              <a href="#">Lorem ipsum</a>
            </li>
            <li>
              <a href="#">Lorem ipsum</a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-search"></i>
              </a>
            </li>
            <li>
              <img src={searchIcon} alt="logo" />
            </li>
            <li>
              <a href="#">Enrolment</a>
            </li>
          </ul>
        </nav>
      </header>

        <div className="top-section">
              <div className="text-container">
              <h2>Lorem ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd
              </p>
              <button>Know More</button>
              </div>
            <div className="image-container">
            <img
              src={BusinessManRuning}
              alt="Businessman running through a keyhole"
            />
          </div>
         
        </div>

        <section className="upcoming-examinations">
          <h2>Upcoming Examinations</h2>
          <div className="exam-card">
            <div className="exam-date">02th October 2014</div>
            <div className="exam-details">
              <h3>Lorem ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat.
              </p>
              <button>Know More</button>
            </div>
          </div>
          {/* Repeat the exam card for other exams */}
        </section>

        <section className="statistics">
          <h2>Statistics</h2>
          <div className="stat-card">
            <div className="stat-number">123+</div>
            <div className="stat-text">Lorem ipsum</div>
          </div>
          {/* Repeat the stat card for other statistics */}
        </section>

        <section className="faq">
          <h2>FAQ</h2>
          <div className="faq-item">
            <div className="faq-question">How does an investment work?</div>
            <div className="faq-answer">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd
              </p>
            </div>
          </div>
          {/* Repeat the faq item for other questions */}
        </section>

        <section className="subscribe">
          <h2>Subscribe</h2>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </form>
        </section>

        <footer className="footer">
          <div className="contact-us">
            <h2>Contact us</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat.
            </p>
            <p>Email: lorem.ipsum@example.com</p>
            <p>Phone: +123 456 7890</p>
          </div>

          <div className="follow-us">
            <h2>Follow us</h2>
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-search"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="head-office">
            <h2>Head Office</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat.
            </p>
            <p>Address: Lorem ipsum dolor sit amet</p>
            <p>Phone: +123 456 7890</p>
          </div>

          <div className="copyright">
            <p>© 2021 All Rights Reserved. Privacy Policy</p>
          </div>
        </footer>
    </div>
  );
}

export default Website;

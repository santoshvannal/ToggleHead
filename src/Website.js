import React, { useEffect, useState } from "react";
import "./styles.css"; // Import the CSS file
import searchIcon from "./assets/svg/Icon_material_search.svg.svg";
import BusinessManRuning from "./assets/svg/Mas_Group_99.svg";
import directionIcon from "./assets/svg/Polygon_1.svg.svg";
import line from "./assets/svg/Line_156.png.png";
import calenderIcon from "./assets/svg/Group_2645.png.png"

function Website() {
  const texts = [
    "Welcome to our website!",
    "Enjoy exploring our content.",
    "Stay updated with the latest news.",
    "Thank you for visiting!",
    "Have a great day!",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === texts.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [texts.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="website">
      <header className="header">
        <span className="logo">LOGO</span>
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
              <img className="searcg-icon" src={searchIcon} alt="logo" />
            </li>
            <li>
              <a className="enrolment" href="#">
                Enrolment
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="top-section"></div>
      <div className="banner">
        <div className="slider">
          <div className="slider-content">
            <div className="text-container">
              <h2>Lorem ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd
              </p>
              <button className="first_button">
                Know More <span className="arrow"> ▶</span>
              </button>
            </div>
            <div className="image-container">
              <img
                src={BusinessManRuning}
                alt="Businessman running through a keyhole"
              />
            </div>
          </div>
          <div className="slider-buttons">
            {texts.map((_, index) => (
              <span
                key={index}
                className={`button ${index === currentIndex ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>

      <section className="upcoming_examinations">
        <div className="exam-schedule">
          <div className="upcoming-exams">
            <h2>Upcoming Examinations</h2>
            <p>Enquire about the examination & register for the exams</p>
          </div>
            <svg className="line"/>
          <div className="exam-level">
            
              <div className="exam_date">
                <img className="calendar-icon" src={calenderIcon}></img>
                <div className="exam_dates_child">
                <h5>02th October 2014</h5>
                
                <p>Level 1 Exam</p>
                </div>
              </div>
              <div className="exam_date">
                <img className="calendar-icon" src={calenderIcon}></img>
                <div className="exam_dates_child">
                <h5>02th October 2014</h5>
                
                <p>Level 1 Exam</p>
                </div>
              </div>
              <div className="exam_date">
                <img className="calendar-icon" src={calenderIcon}></img>
                <div className="exam_dates_child">
                <h5>02th October 2014</h5>
                
                <p>Level 1 Exam</p>
                </div>
              </div>
          </div>
        </div>
      </section>

      <section className="statistics">
        <div>
            <div className="statistics_box">
              <h5>Lorem ipsum</h5>
                
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
              <a href="#">Know More</a>
              <button></button>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
      </section>

      <section className="faq">
        <h2>FAQ</h2>
        <div className="faq-item">
          <div className="faq-question">How does an investment work?</div>
          <div className="faq-answer">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd
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

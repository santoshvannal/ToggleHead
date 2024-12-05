import React, { useEffect, useRef, useState } from "react";
import "./styles.css"; // Import the CSS file
import searchIcon from "./assets/svg/searchIcon.svg";
import BusinessManRuning from "./assets/svg/Mas_Group_99.svg";
import facebookIcon from "./assets/svg/facebookIcon.svg";
import linkedinIcon from "./assets/svg/linkedinIcon.svg";
import instagramIcon from "./assets/svg/instagramIcon.svg";
import twitterIcon from "./assets/svg/twitterIcon.svg";
import youtubeIcon from "./assets/svg/youtubeIcon.svg";
import quoraIcon from "./assets/svg/quora.svg";
import search from "./assets/svg/Mask_Group_72.svg";
import calenderIcon from "./assets/svg/Group_2645.png.png";
import locationIcon from "./assets/svg/location.svg";
import headoffice01 from "./assets/svg/headoffice02.svg";
import headoffice02 from "./assets/svg/headoffice01.svg";
import knowmorearrow from "./assets/svg/knowmorearrow.svg";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        borderBottom: "1px solid #ccc",
        margin: "10px 0",
        borderRadius: "1px",
        background: "white",
        textAlign: "left",
        color: "#12406F",
      }}
    >
      <div
        onClick={toggleAccordion}
        style={{
          padding: "25px 10px",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>{title}</span>
        <span
          style={{
            // fontWeight: "bolder",
            border: "1px solid black",
            padding: "5px",
            borderRadius: "50%",
            height: "10px",
            width: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {isOpen ? "-" : "+"}
        </span>
      </div>
      {isOpen && (
        <div
          style={{ padding: "10px", backgroundColor: "#fff", color: "#525252" }}
        >
          {content}
        </div>
      )}
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div style={{ width: "90%", margin: "20px 0px" }}>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};
function Website() {
  const texts = [
    "Welcome to our website!",
    "Enjoy exploring our content.",
    "Stay updated with the latest news.",
    "Thank you for visiting!",
    "Have a great day!",
  ];

  const slides = [
    {
      title: "Welcome to our Website!",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
      image: BusinessManRuning,
    },
    {
      title: "Explore the things",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
      image: BusinessManRuning,
    },
    {
      title: "Stay updated with the latest news.",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
      image: BusinessManRuning,
    },
    {
      title: "Thanks for choosing.!",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
      image: BusinessManRuning,
    },
    {
      title: "Good Buy! Have a great day!",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
      image: BusinessManRuning,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const accordionData = [
    {
      title: "How does an investor gain access to MF Utility?",
      content:
        "Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      title: "Will investors be able to have multiple Common Account Numbers?",
      content:
        "Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      title: "How does an investor gain access to MF Utility?",
      content:
        "Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
  ];

  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollInterval;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (slider) {
          const maxScroll = slider.scrollWidth - slider.offsetWidth;
          if (slider.scrollLeft >= maxScroll) {
            slider.scrollTo({ left: 0, behavior: "smooth" }); // reset to the start
          } else {
            slider.scrollBy({ left: 320, behavior: "smooth" }); // move to the next box
          }
        }
      }, 3000); // adjust interval (3 seconds here)
    };

    const stopAutoScroll = () => {
      clearInterval(scrollInterval);
    };

    // Start auto-scroll on mount
    startAutoScroll();

    // Cleanup on unmount
    return () => stopAutoScroll();
  }, []);

  return (
    <div className="website">
      <header className="header">
        <span className="logo">LOGO</span>
        <nav className="navbar">
          <ul className="nav-links">
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
            <li className="searcg-icon-li">
              <img className="searcg-icon" src={searchIcon} alt="logo" />
            </li>
            <li>
              <button className="enrolment" href="#">
                Enrolment
              </button>
            </li>
          </ul>

          <div
            class="hamburger"
            onClick={() => navLinks.classList.toggle("active")}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>

      <div className="banner">
        <div className="slider">
          <div className="slider-content">
            <div className="text-container">
              <h2>{slides[currentIndex].title}</h2>
              <p>{slides[currentIndex].text}</p>
              <button className="first_button">
                Know More <span className="arrow">▶</span>
              </button>
            </div>
            <div className="image-container">
              <img
                src={slides[currentIndex].image}
                alt={slides[currentIndex].title}
              />
            </div>
          </div>
          <div className="slider-buttons">
            {slides.map((_, index) => (
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
          <svg className="line" />
          <div className="exam-level">
            <div className="exam_date">
              <img className="calendar-icon" src={calenderIcon}></img>
              <div className="exam_dates_child">
                <h5>02th October 2014 </h5>

                <p>Level 1 Exam</p>
              </div>
            </div>
            <div className="exam_date">
              <img className="calendar-icon" src={calenderIcon}></img>
              <div className="exam_dates_child">
                <h5>Nov-Dec 2016 </h5>

                <p>Level 2 </p>
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
              </div>
            </div>
            <div className="exam_date">
              <img className="calendar-icon" src={calenderIcon}></img>
              <div className="exam_dates_child">
                <h5>Ongoing this year </h5>

                <p>Level 3 (Grad)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="statistics_slider">
        <div className="statistics_container" ref={sliderRef}>
          <div className="statistics">
            <div className="statistics_box">
              <h3>Lorem ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur
                <br /> sadipscing elitr, sed diam nonumy eirmod
              </p>
              <div className="statistics_box_child">
                <p>Know More</p>
                <img src={knowmorearrow} alt={knowmorearrow} />
              </div>
            </div>
            <div className="statistics_box">
              <h3>Lorem ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur
                <br /> sadipscing elitr, sed diam nonumy eirmod
              </p>
              <div className="statistics_box_child">
                <p>Know More</p>
                <img src={knowmorearrow} alt={knowmorearrow} />
              </div>
            </div>
            <div className="statistics_box">
              <h3>Lorem ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur
                <br /> sadipscing elitr, sed diam nonumy eirmod
              </p>
              <div className="statistics_box_child">
                <p>Know More</p>
                <img src={knowmorearrow} alt="" />
              </div>
            </div>
            <div className="statistics_box">
              <h3>Lorem ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur
                <br /> sadipscing elitr, sed diam nonumy eirmod
              </p>
              <div className="statistics_box_child">
                <p>Know More</p>
                <img src={knowmorearrow} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="subscribers_container">
        <div className="subscribe_content">
          <p>Lorem ipsum</p>
          <h1>123+</h1>
          <h4>Lorem ipsum</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since
          </p>
        </div>
        <div className="subscribe_content">
          <p>Lorem ipsum</p>
          <h1>12+</h1>
          <h4>Lorem ipsum</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since
          </p>
        </div>
        <div className="subscribe_content">
          <p>Lorem ipsum</p>
          <h1>12+</h1>
          <h4>Lorem ipsum</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since
          </p>
        </div>
        <div className="subscribe_content">
          <p>Lorem ipsum</p>
          <h1>123</h1>
          <h4>Lorem ipsum</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since
          </p>
        </div>
      </section>

      <section className="faq">
        <h2>FAQ</h2>

        <Accordion items={accordionData} />
      </section>

      <section className="subscribe_count">
        <div className="left_side">
          <h2>Subscribe</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna
          </p>
          <form className="subscribe_form">
            <input
              className="subscribe_input"
              type="email"
              placeholder="Enter your Email Address"
            />
            <a className="subscribe_button">
              Subscribe <span className="arrow"> ▶</span>
            </a>
          </form>
        </div>
        <div className="right_side">
          <img className="mobile_search" src={search} alt="Subscribe" />
        </div>
      </section>

      <div className="footer">
        <div className="contact-us">
          <h2>Contact us</h2>
          <p>
            Address: amet, consetetur sadipscing elitr, sed diam Email id:
            eirmod tempor invidunt ut labore et dolore
            <br />
            Phone no: 123456789
          </p>
        </div>

        <div className="follow-us">
          <h2>Follow us</h2>

          <div className="followus_child">
            <img src={facebookIcon} alt="" />
            <img src={linkedinIcon} alt="" />
            <img src={instagramIcon} alt="" />
            <img src={twitterIcon} alt="" />
            <img src={youtubeIcon} alt="" />
            <img src={quoraIcon} alt="" />
          </div>
        </div>

        <div className="head-office">
          <h2>Head Office</h2>
          <div className="headoffice_child">
            <img src={locationIcon} alt="" />
            <p>
              Address: amet, consetetur sadipscing elitr, sed diam Email id:
              eirmod tempor invidunt ut labore et dolore Phone no: 123456789
            </p>
          </div>
          <div className="headoffice_child">
            <img src={headoffice01} alt="" />
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
          </div>
          <div className="headoffice_child">
            <img src={headoffice01} alt="" />
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
          </div>
          <div className="headoffice_child">
            <img src={headoffice02} alt="" />
            <p>Lorem ipsum asd asdsaweeq Lorem Ipsum</p>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© 2021 All Rights Reserved. Privacy Policy</p>
      </div>
    </div>
  );
}

export default Website;

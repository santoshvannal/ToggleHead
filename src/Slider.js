import React, { useState, useEffect } from "react";
import './App.css';  // Make sure the CSS from the previous section is in this file

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 3000);  // Change slide every 3 seconds

    return () => clearInterval(interval);  // Clean up the interval on component unmount
  }, []);

  return (
    <section className="subscribers_container">
      <div
        className="subscribe_content"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        <p>Lorem</p>
        <h1>123+</h1>
        <h4>Lorem ipsum</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
      <div
        className="subscribe_content"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        <p>Lorem</p>
        <h1>12+</h1>
        <h4>Lorem ipsum</h4>
        <p>Lorem Ipsum has been the industry's standard dummy text ever since.</p>
      </div>
      <div
        className="subscribe_content"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        <p>Lorem</p>
        <h1>12+</h1>
        <h4>Lorem ipsum</h4>
        <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
      </div>
      <div
        className="subscribe_content"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        <p>Lorem</p>
        <h1>123</h1>
        <h4>Lorem ipsum</h4>
        <p>Lorem Ipsum is the industry's standard dummy text ever since.</p>
      </div>
    </section>
  );
}

export default Slider;
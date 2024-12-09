import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://online-book-store-2-hrs8.onrender.com");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
          📚 Expand Your Horizons with Our Learning Courses! 🎓
At [Book Haven], we don’t just offer books—we offer opportunities to learn, grow, and excel. Our carefully curated courses are designed to help you dive deeper into your passions, gain new skills, and achieve your goals.

Why Choose Our Courses?

Wide Range of Topics: From creative writing and literature analysis to professional development and self-improvement, we have something for everyone.
Expert-Led Lessons: Learn from experienced instructors who are passionate about their subjects.
Flexible Learning: Access courses anytime, anywhere, at your own pace.
Affordable Pricing: Enjoy top-quality education without breaking the bank.
Whether you're looking to refine your skills, explore new interests, or complement your reading journey, our courses are the perfect companion to your intellectual growth.

Start Learning Today!
Unleash your potential with [Book Haven]—where books meet lifelong learning.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;

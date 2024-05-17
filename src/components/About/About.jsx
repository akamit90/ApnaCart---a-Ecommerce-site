import React from 'react';
import aboutImage from "../../assets/aboutusimage.jpg";
import innovationImage from "../../assets/innovationimage.webp";

function About() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="about us" src={aboutImage} />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-12 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Who We Are</h1>
            <p className="mb-8 leading-relaxed">ApnaCart Group is at the forefront of India's digital commerce revolution. Comprising of Flipkart, Myntra, Flipkart Wholesale, Flipkart Health+, Cleartrip, and ANS Commerce, we are committed to bringing high-quality products and services to Indian consumers.</p>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-12 md:pr-8 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Technology at ApnaCart</h1>
            <p className="mb-8 leading-relaxed">ApnaCart Group leverages cutting-edge technology to deliver unparalleled shopping experiences to millions of Indian consumers. Our innovative solutions make online shopping convenient, intuitive, and seamless, ensuring that our customers have access to the best products and services.</p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="technology at apnacart" src={innovationImage} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

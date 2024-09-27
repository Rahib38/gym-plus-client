import React from 'react';

const Aboutus = () => {
    return (
      <div>
        <h1 class="text-2xl font-semibold text-center capitalize lg:text-3xl ">
          About Us
        </h1>
        <div className="flex flex-col md:flex-row mt-8 gap-10">
          <div>
            <img
              className=" p-4"
              src="https://img.freepik.com/free-photo/full-body-portrait-athletic-shirtless-male-doing-biceps-workouts-with-dumbbells-gym-club_613910-1176.jpg?ga=GA1.1.938237795.1710318786&semt=ais_hybrid
"
              alt=""
            />
          </div>
          <div className="space-y-4 md:w-1/2 md:mt-8 p-4">
            <div className="">
              <h3 className="font-semibold text-2xl">Who We Are</h3>
              <p>
                At Fitness Pro, we are dedicated to helping you achieve your
                fitness goals through personalized training, comprehensive
                nutrition plans, and a supportive community. Our team of
                experienced trainers and nutritionists work together to provide
                a holistic approach to fitness and well-being.
              </p>
            </div>
            <div className="">
              <h3 className="font-semibold text-2xl">Our Mission</h3>
              <p>
                Our mission is to empower individuals to lead healthier lives by
                providing them with the tools, knowledge, and support they need
                to succeed. We believe that fitness is not just about physical
                health, but also about mental and emotional well-being.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-2xl">Why Choose Us</h3>
              <p>
                We offer a wide range of services, from personalized training
                programs to group classes and yoga sessions. Our
                state-of-the-art facility is equipped with the latest fitness
                equipment, and our community is always here to motivate and
                inspire you. Join us and take the first step towards a
                healthier, happier you!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Aboutus;
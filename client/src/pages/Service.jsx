import React from 'react';

const Service = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary">Car Service Solutions</h1>
        <p className="mt-4 text-primary">We provide the best service for your vehicle. Fast, reliable, and professional care!</p>
      </header>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-semibold text-primary mb-4">Oil Change</h3>
          <p className="text-primary">Keep your engine running smoothly with our quick and affordable oil change service.</p>
        </div>

        {/* Service 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-semibold text-primary mb-4">Brake Inspection</h3>
          <p className="text-primary">Ensure your safety with a comprehensive brake system inspection by our experts.</p>
        </div>

        {/* Service 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-semibold text-primary mb-4">Tire Rotation</h3>
          <p className="text-primary">Extend the life of your tires and improve performance with regular tire rotations.</p>
        </div>

        {/* Service 4 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-semibold text-primary mb-4">Engine Diagnostics</h3>
          <p className="text-primary">Diagnose engine issues quickly with our state-of-the-art diagnostic tools.</p>
        </div>

        {/* Service 5 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-semibold text-primary mb-4">Battery Replacement</h3>
          <p className="text-primary">Get your car back on the road with our fast and reliable battery replacement service.</p>
        </div>

        {/* Service 6 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-semibold text-primary mb-4">Air Conditioning Service</h3>
          <p className="text-primary">Stay cool with our A/C maintenance and repair services for all vehicle types.</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center text-primary mb-8">What Our Customers Say</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-primary">"Fast and efficient service! My car has never run better."</p>
            <p className="mt-4 font-semibold text-primary">- John D.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-primary">"Professional staff and great prices. Highly recommend this shop!"</p>
            <p className="mt-4 font-semibold text-primary">- Sarah L.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mt-16 bg-primary text-white py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="mb-6">Need to schedule a service? Get in touch with us today.</p>
          <p className="font-semibold">Phone: (123) 456-7890</p>
          <p className="font-semibold">Email: info@carservice.com</p>
        </div>
      </section>
    </div>
  );
};

export default Service;

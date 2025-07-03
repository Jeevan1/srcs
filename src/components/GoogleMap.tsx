const GoogleMap = () => {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg shadow-lg ">
      <iframe
        className="h-full w-full border-0"
        src="https://www.google.com/maps/embed/v1/place?q=santosh+raj&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default GoogleMap;

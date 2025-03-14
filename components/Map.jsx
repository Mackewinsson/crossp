import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <iframe
          className="embed-responsive-item"
          title="my location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51170.89540740967!2d-4.490466362193868!3d36.71821490104431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7259c44fdb212d%3A0x6025dc92c9ca32cf!2zTcOhbGFnYQ!5e0!3m2!1ses-419!2ses!4v1740834409772!5m2!1ses-419!2ses"
        ></iframe>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;

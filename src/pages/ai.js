import React, { useEffect } from "react";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import style from "../css/content.scss";
import imageSrcs from "../components/images";

const imagesIA = () => {
  useEffect(() => {
    // define a custom handler function
    // for the contextmenu event
    const handleContextMenu = (e) => {
      // prevent the right-click menu from appearing
      e.preventDefault();
    };

    // attach the event listener to
    // the document object
    document.addEventListener("contextmenu", handleContextMenu);

    // clean up the event listener when
    // the component unmounts
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  const firebase =
    "https://firebasestorage.googleapis.com/v0/b/yagasaki-aiart.appspot.com/o/";

  return (
    <div className={style}>
      <div className="homePage">
        <Navigation />
        <div className="container">
          <h2>AI Art by @Yagasaki7K</h2>
          <p>
            <b>WARNING:</b> Most images are NSFW or adult content.
          </p>
          <p>
            All images produced in this page are protected by copyright law.
            These images are solely owned by @Yagasaki7K and may not be
            reproduced, distributed, or sold without explicit permission. If you
            wish to use or distribute any of these images, please seek
            permission from me by contacting me by email.
          </p>

          <div className="grid" id="id" oncontextmenu="return false">
            {imageSrcs.map((src, index) => (
              <img key={index} src={firebase + src} disabled Loading="lazy" />
            ))}
          </div>
        </div>

        <hr />
        <Footer />
      </div>
    </div>
  );
};

export default imagesIA;

import "./Posts.css"
import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function HomePost() {
  const [homePostData, setHomePost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "header"] {
        body
      }`
      )
      .then((data) => setHomePost(data))
      .catch(console.error);
  }, []);

  return (
      <div className="bio">
        {homePostData &&
          homePostData.map((post, index) => (
              <BlockContent div key={index} className="body"
                blocks={post.body}
              />
          ))}
      </div>
  );
}
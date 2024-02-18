import "./Posts.css"
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import HomePost from "./HomePost.jsx"

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] | order(_createdAt asc) {
        title,
        slug,
        mainImage{
          asset->{
          _id,
          url
          }
        },
        secondImage{
          asset->{
          _id,
          url
          }
        },
        linkTitle,
        link,
        type,
        year,
        imgOne{
          asset->{
          _id,
          url
          }
        },
        imgTwo{
          asset->{
          _id,
          url
          }
        },
        imgThree{
          asset->{
          _id,
          url
          }
        },
        backgroundImage{
          asset->{
          _id,
          url
          }
        },
        body
      }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <>
    <HomePost/>
      <div className="post-margin">
        {allPostsData &&
          allPostsData.map((post, index) => (
            <div key={index}>
              {post.backgroundImage && (<div className="backgroundImage"><img src={post.backgroundImage.asset.url} alt=""/></div>)}
              <div className="foreGround">
                  <div className="inner-footer">
                    <div className="footer-2">{post.type}</div>
                    <div className="footer-1"><Link to={post.link} target="_blank" rel="noopener noreferrer">{post.linkTitle}</Link></div>
                    <div className="footer-3">{post.year}</div>
                  </div>
                <div className="left">
                    <span>
                        <h2>{post.title}</h2>
                    </span>
                  {/* <Link to={"/" + post.slug.current} key={post.slug.current} target="_blank" rel="noopener noreferrer">
                    <span key={index}>
                        <h2>{post.title}</h2>
                    </span>
                  </Link> */}
                  <BlockContent className="body"
                    blocks={post.body}
                  />
                </div>
                <div className="right">
                  {post.secondImage && (<div className="secondImage"><img src={post.secondImage.asset.url} alt="" /></div>)}
                  {post.mainImage && (<div className="mainImage"><img src={post.mainImage.asset.url} alt="" /></div>)}
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
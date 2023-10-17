import React, { useContext, useState, useEffect } from "react";

import Hero from "./Hero";
import blogPostsJSON from "../JSON/blogPosts.json";
import GridItem from "./GridItem";
import MyContext from "../context/myContext";

const Container = () => {
  const context = useContext(MyContext);
  const { isLoggedIn } = context;

  const [blogs, setBlogs] = useState([]);

  const initBlogs = () => {
    isLoggedIn
      ? setBlogs(blogPostsJSON.blogPosts)
      : setBlogs(
          blogPostsJSON.blogPosts.filter(
            (currBlog) => currBlog.visibility === "public"
          )
        );
  };

  useEffect(() => {
    initBlogs();
  }, []);

  return (
    <section className="px-6 lg:px-16">
      <Hero />
      {/* search and filter */}
      <div className="flex flex-col-reverse justify-between items-center gap-4 pb-10 md:flex-row">
        <div>
          <ul className="flex justify-center items-center gap-4 flex-wrap lg:justify-start">
            <li
              onClick={() => {
                const filteredBlogs = blogPostsJSON.blogPosts.filter(
                  (currBlog) =>
                    isLoggedIn
                      ? currBlog.category === "news"
                      : currBlog.category === "news" &&
                        currBlog.visibility === "public"
                );
                setBlogs(filteredBlogs);
              }}
              className="px-5 py-2 bg-zinc-600 rounded-full cursor-pointer hover:bg-blue-500"
            >
              News
            </li>
            <li
              onClick={() => {
                const filteredBlogs = blogPostsJSON.blogPosts.filter(
                  (currBlog) =>
                    isLoggedIn
                      ? currBlog.category === "entertainment"
                      : currBlog.category === "entertainment" &&
                        currBlog.visibility === "public"
                );
                setBlogs(filteredBlogs);
              }}
              className="px-5 py-2 bg-zinc-600 rounded-full cursor-pointer hover:bg-orange-500"
            >
              Entertainment
            </li>
            <li
              onClick={() => {
                const filteredBlogs = blogPostsJSON.blogPosts.filter(
                  (currBlog) =>
                    isLoggedIn
                      ? currBlog.category === "sports"
                      : currBlog.category === "sports" &&
                        currBlog.visibility === "public"
                );
                setBlogs(filteredBlogs);
              }}
              className="px-5 py-2 bg-zinc-600 rounded-full cursor-pointer hover:bg-violet-500"
            >
              Sports
            </li>
            <li
              onClick={() => {
                const filteredBlogs = blogPostsJSON.blogPosts.filter(
                  (currBlog) =>
                    isLoggedIn
                      ? currBlog.category === "technology"
                      : currBlog.category === "technology" &&
                        currBlog.visibility === "public"
                );
                setBlogs(filteredBlogs);
              }}
              className="px-5 py-2 bg-zinc-600 rounded-full cursor-pointer hover:bg-green-500"
            >
              Technology
            </li>
            <li
              onClick={initBlogs}
              className="px-5 py-2 bg-zinc-600 rounded-full cursor-pointer hover:bg-red-500"
            >
              All
            </li>
          </ul>
        </div>
        <div>
          <button className="items-center gap-2 hidden md:flex">
            <i className="ri-search-line text-xl"></i> Search
          </button>
        </div>
        <input
          className="px-6 py-3 bg-transparent rounded-full border border-zinc-600 focus:outline-none focus:border-amber-500 block w-full md:hidden"
          type="search"
          name="search"
          id="search"
          placeholder="Search here"
        />
      </div>
      {/* blog posts */}
      <section>
        <h2 className="text-5xl py-7">Blogs</h2>
        <hr className="border-t-zinc-600" />
        {/* blog grid */}
        <div className="py-10 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <GridItem key={index} blog={blog} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Container;

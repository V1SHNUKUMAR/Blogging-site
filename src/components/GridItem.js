import React from "react";

const GridItem = (props) => {
  const { blog } = props;

  return (
    <article className="hover:scale-105 duration-300 cursor-pointer">
      {/* blog image */}
      <div className="h-52 rounded-3xl relative overflow-hidden">
        <p className="absolute z-10 top-2 right-0 text-xs bg-black px-3 py-2 rounded-l-full font-medium">
          {blog.category.substring(0, 1).toUpperCase() +
            blog.category.substring(1)}
        </p>
        <img
          className="h-full w-full object-cover object-center"
          src={blog.imageUrl}
          alt="blog"
        />
      </div>
      {/* blog details */}
      <div className="py-7 space-y-4">
        <div>
          <p className="bg-zinc-700 text-xs px-3 py-0.5 my-2 rounded-full w-min">
            {blog.visibility.substring(0, 1).toUpperCase() +
              blog.visibility.substring(1)}
          </p>
          <h3 className="text-3xl font-semibold">
            {blog.title.substring(0, 1).toUpperCase() + blog.title.substring(1)}
          </h3>
        </div>
        <p className="line-clamp-3 text-ellipsis text-sm">{blog.content}</p>
        <div>
          <p className="text-zinc-500 font-medium uppercase">{blog.author}</p>
          <p className="text-zinc-500 font-medium">{blog.date}</p>
        </div>
      </div>
    </article>
  );
};

export default GridItem;

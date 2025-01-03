"use client";
import React, { ChangeEvent, useState } from "react";

const CommentSection = () => {
  const [comment, setComment] = useState(""); 
  const [comments, setComments] = useState<string[]>([]); 

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    if (comment.trim()) {
      setComments((prevComments) => [...prevComments, comment]); 
      setComment(""); 
    }
  };

  return (
    <div className="mx-20 py-28">
      <p className="text-[#111111] font-bold text-[25px] mb-8">
        Leave a Comment
      </p>
      <div className="flex flex-col gap-4">
        <textarea
          value={comment}
          onChange={handleInputChange}
          placeholder="Hi! I’d like to ask about"
          className="text-[16px] font-poppins border border-[#9F9F9F] rounded-[10px] pt-[26px] pb-[70px] px-[30px] w-full h-[100px] overflow-y-hidden resize-none"
        ></textarea>
        <button
          onClick={handleSubmit}
          className="px-[90px] bg-[#029FAE] py-[13.75px] text-white font-poppins self-auto lg:self-start"
        >
          Submit
        </button>
      </div>
      <div className="mt-6">
        {comments.map((comment, index) => (
          <div
            key={index}
            className="mb-4 p-4 border border-[#9F9F9F] rounded-[10px] bg-[#F8F8F8]"
          >
            <p className="text-[#111111] font-poppins text-[16px]">
              <strong>Comment {index + 1}:</strong> {comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;

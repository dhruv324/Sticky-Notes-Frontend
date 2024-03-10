import React from "react";
import { CgFileAdd } from "react-icons/cg";
import { IoDownloadOutline } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 100 }}
      className="relative w-60 h-72 text-white bg-zinc-900/90 rounded-[40px] p-5 mt-4 overflow-hidden"
    >
      <CgFileAdd className="hover:cursor-pointer" />
      <p className="text-sm font-body leading-tight mt-5 font-medium">{data.desc}</p>
      <div className="footer absolute bottom-0  w-full  left-0 ">
        <div className="relative flex items-center px-8 py-3 justify-between mb-6">
          <h5 className="font-body text-sm font-light ">{data.filesize}</h5>
          <span className="hover:cursor-pointer">
            {data.close ? <IoMdCloseCircle /> : <IoDownloadOutline />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={` hover:cursor-pointer tag font-uzi text-black mt-5 w-full py-6 px-4 ${
              data.tag.tagColor === "red" ? "bg-green-600" : "bg-red-600"
            } flex items-center justify-center`}
          >
            <h3 className="text-sm font-abc tex-xl  font-semibold ">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div> 
  );
}

export default Card;

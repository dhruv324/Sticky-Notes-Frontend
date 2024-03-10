import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {

  const ref = useRef(null);

  const data = [
    {
      desc :  "West was born on June 8, 1977, in Atlanta, Georgia.[c] ",
      filesize : "11mb ",
      close : true,
      tag:{isOpen : true , tagTitle : "Save Note", tagColor: "green" },

    },

    {
      desc :  "This is a valid card",
      filesize : "9.7Kb ",
      close : false,
      tag:{isOpen : true , tagTitle : "Save Note", tagColor: "red" },

    },

    {
      desc :  "The young man wanted a role model. He looked long and hard in his youth,",
      filesize : "5Kb ",
      close : true,
      tag:{isOpen : true , tagTitle : "Delete Note ", tagColor: "green" },

    },

    {
      desc :  "[Untitled - unnamed]",
      filesize : "11.5mb ",
      close : false,
      tag:{isOpen : false , tagTitle : "Save Note ", tagColor: "blue" },

    },

    {
      desc :  "[Time - Table - unnamed]",
      filesize : "2.5mb ",
      close : false,
      tag:{isOpen : false , tagTitle : "Save Note ", tagColor: "blue" },

    }
  ]
  return (
  

<div  ref = {ref} className=' py-10 gap-10 flex flex-wrap  fixed top-0 left-0 z-[3] w-full h-full'>
{data.map((item , index ) => (
  <Card  data = {item} reference = {ref} />
))}


</div>
      
  
  )
}

export default Foreground

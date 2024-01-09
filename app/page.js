"use client"
import React from 'react'
import {motion, useAnimation} from "framer-motion";
const page = () => {
  const control = useAnimation();

  const data = {
    hidden:{
        opacity:0
    },
    visible:{
        opacity:1,
        delay:0.5
    }
  }
  
  return (
    <div className='background'>
      <motion.div className='box1'
          animate={{
            x:"900px",
            rotate:360,
            backgroundColor:"white"
          }}
          transition={{

            // spring type ki animation mein duration kaam nhi krti 
                // uski jagah stifness kaam karti hai 

            // tween type ki animation mein duration kaam krti hai 
            type:"spring", 
            stiffness:60,
          }}
      />

      <motion.div className='box1'
          drag 
          dragConstraints={{
            right:300,
            left:-10,
            bottom:30,
            top:30
          }}
      />

      <motion.div className='box1'
      variants={data}
          initial="hidden"
          animate="visible"
      >

          {
            [1,2,3].map((_,id)=>{

              return(
              <motion.li key = {id}  className='box2' 
              initial="hidden"
              animate="visible"
              >
                
              </motion.li>
              )

            })
          }

      </motion.div>


      <motion.div className='box1'

        animate={{
          scale:[1,2,2,2,1.75,1.5,1],
          borderRadius:[10,20,100,100,70,40],
          rotate:[0,180,360,280,0],
          transition:{
            duration:3
          }
        }}
      
      />

      <div className='UseAnimate'>
        <motion.div className='buttons'>
          <motion.button onClick={ () => {
            control.start({
              x:-300,

            })
          }}>Left</motion.button>
          <motion.button onClick={()=>{
            control.start({
              x:300
            })
          }}>Right</motion.button>
          <motion.button onClick={()=>{
            control.start({
              borderRadius:"100px"
            })
          }}>Circle</motion.button>
          <motion.button onClick={()=>{
            control.start({
              y:300
            })
          }}>Down</motion.button>
          <motion.button onClick={()=>{
            control.start({
              borderRadius:"0px"
            })
          }}>Rectangle</motion.button>
        </motion.div>
        <motion.button onClick={()=>{
          control.start({
            y:-300
          })
        }}>
          UP
        </motion.button>

        <motion.div className='box1'
          animate={control}
        >
        

        </motion.div>
      </div>

      
    </div>
  )
}

export default page
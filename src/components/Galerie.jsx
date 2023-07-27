import React, { useRef, useState, useEffect } from 'react'

import { motion } from 'framer-motion';

import photo1 from '../images/1.jpg'
import photo2 from '../images/2.jpg'
import photo3 from '../images/3.jpg'
import photo4 from '../images/4.jpg'
import photo5 from '../images/5.jpg'
import photo6 from '../images/6.jpg'
import photo7 from '../images/7.jpg'
import photo8 from '../images/8.jpg'
import photo9 from '../images/9.jpg'
import photo10 from '../images/10.jpg'
import photo11 from '../images/11.jpg'
import photo12 from '../images/12.jpg'


const photos = {
    1: photo1,
    2: photo2,
    3: photo3,
    4: photo4,
    5: photo5,
    6: photo6,
    7: photo7,
    8: photo8,
    9: photo9,
    10: photo10,
    11: photo11,
    12: photo12,
}

const divImage = {
    initial: {
        opacity:0,
    },
    animate: {
        opacity:1,
        transition: {
            delay:0.02,
            staggerChildren: 0.2,
                type: "spring",
                stiffness: 100
        }
    }
}

const imageGalerie = {
    initial: {
        opacity:0,
        y:100,
    },
    animate: {
        opacity:1,
        y:0,
        transition: {
            duration: 1
        }
    }
}


export const Galerie = () => {
    const ref = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
  
    const handleImageClick = (imageSrc) => {
      setSelectedImage(imageSrc);
    };
  
    const handleMouseDown = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setSelectedImage(null);
      }
    };
  
    return (
      <section className='container mx-auto px-4 h-fit md:py-16 pb-8 relative'>
        <motion.div
          className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 grid-cols-1 px-8"
          initial="initial"
          variants={divImage}
          whileInView="animate"
        >
          {Object.keys(photos).map((key) => (
            <motion.div
              className="flex justify-center"
              variants={imageGalerie}
              key={key}
            >
              <motion.img
                src={photos[key]}
                width="40"
                className='w-full h-auto rounded-md shadow cursor-pointer '
                alt="Astro"
                whileHover={{
                  y: -10,
                }}
                transition={{
                  duration: 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                onClick={() => handleImageClick(photos[key])}
              />
            </motion.div>
          ))}
        </motion.div>
  
        {/* Modal pour afficher l'image sélectionnée */}
        {selectedImage && (
          <motion.div
            ref={ref} // Ajoutez la référence pour capturer les clics à l'intérieur du modal
            className="cursor-pointer fixed top-0 pt-10 pb-10 left-0 right-0 bottom-0 flex justify-center items-center z-50 backdrop-blur-md backdrop-brightness-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              className="max-w-full max-h-full"
              alt="Image Zoomée"
            //   onClick={() => setSelectedImage(null)}
              initial={{ scale: 0 }} // Agrandir l'image lorsqu'elle est sélectionnée
              animate={{ scale: 1 }}
            />
          </motion.div>
        )}
      </section>
    );
  };
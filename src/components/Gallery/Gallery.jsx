import React from 'react'
import G1 from '../../assets/GallaryImg/G1.jpg'
// import G2 from '../../assets/GallaryImg/G2.jpp'
import G3 from '../../assets/GallaryImg/G3.jpg'
import G4 from '../../assets/GallaryImg/G4.jpg'
import G5 from '../../assets/GallaryImg/G5.jpg'
import G6 from '../../assets/GallaryImg/G6.jpg'
import G7 from '../../assets/GallaryImg/G7.jpg'

function Gallery() {
  return (
    <>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-20 mx-auto flex flex-wrap">
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block hover:translate-y-4 hover:skew-y-3 transition duration-500" src={G3}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block hover:translate-y-4 hover:skew-y-3 transition duration-500" src={G1}/>
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block hover:translate-y-4 hover:skew-y-3 transition duration-500" src={G7}/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block hover:translate-y-4 hover:skew-y-3 transition duration-500" src={G4}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block hover:translate-y-4 hover:skew-y-3 transition duration-500" src={G5}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block hover:translate-y-4 hover:skew-y-3 transition duration-500" src={G6}/>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Gallery

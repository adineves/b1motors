'use client'

import { useState } from 'react'

type CarGalleryProps = {
  images: string[]
  model: string
}

export default function CarGallery({ images, model }: CarGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images?.[0] || '')

  return (
    <div>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <img
          src={selectedImage}
          alt={model}
          className="h-[470px] w-full object-cover object-[center_30%] transition duration-300"
        />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3 md:grid-cols-4">
        {images?.map((image, index) => {
          const isActive = selectedImage === image

          return (
            <button
              key={index}
              type="button"
              onClick={() => setSelectedImage(image)}
              className={`overflow-hidden rounded-xl border transition ${
                isActive
                  ? 'border-red-500 shadow-[0_0_18px_rgba(220,38,38,0.18)]'
                  : 'border-white/10 hover:border-red-500/40'
              }`}
            >
              <img
                src={image}
                alt={`${model} ${index + 1}`}
                className="h-24 w-full object-cover object-[center_30%]"
              />
            </button>
          )
        })}
      </div>
    </div>
  )
}
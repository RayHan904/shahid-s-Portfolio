import React from "react"
import { FaFilm } from "react-icons/fa"
import { RiScissorsCutFill } from "react-icons/ri"
import { SiAdobeaftereffects } from "react-icons/si"

export default [
  {
    id: 1,
    icon: <RiScissorsCutFill className="service-icon" />,
    title: "Video Editing",
    text: `Professional edits(Interviews/real estate/marketing, health/food/clothing industry, YouTube and gaming). Mini commercials for all social platforms, bike/cars vlogs and montages.`,
  },
  {
    id: 2,
    icon: <FaFilm className="service-icon" />,
    title: "Cinematography",
    text: `A rolls and B rolls cinematography
    Food cinematics, car/bike cinematics, clothing cinematics. `,
  },
  {
    id: 3,
    icon: <SiAdobeaftereffects className="service-icon" />,
    title: "Motion Graphics",
    text: `Motion graphics for tech videos(specs/features engagement), text animations, your logo placement in the video.`,
  },
]

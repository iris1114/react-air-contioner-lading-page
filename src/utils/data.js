import heroBanner1 from "../images/hero/banner1.jpg";
import heroBanner2 from "../images/hero/banner2.jpg";

import serviceCard1 from "../images/service/card1.jpg";
import serviceCard2 from "../images/service/card2.jpg";
import serviceCard3 from "../images/service/card3.jpg";
import serviceCard4 from "../images/service/card4.jpg";
import serviceCard5 from "../images/service/card5.jpg";
import serviceCard6 from "../images/service/card6.jpg";
import serviceIcon from "../images/service/icon.png";

import testimonialImg1 from "../images/testimonials/people1.jpg";
import testimonialImg2 from "../images/testimonials/people2.jpg";

import blogCard1 from "../images/blog/blog1.jpg";
import blogCard2 from "../images/blog/blog2.jpg";
import blogCard3 from "../images/blog/blog3.jpg";

export const heroBannerList = [
  {
    id: 1,
    img: heroBanner1,
    title: "Beat the Heat In Hot Summer!",
    subtitle: "Cool solutions for your home",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    btn: ["Get Started", "Read more"],
  },
  {
    id: 2,
    img: heroBanner2,
    title: "More comfort with more intelligence",
    subtitle: "Cool solutions for your home",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    btn: ["Air Condition", "Read more"],
  },
];


export const serviceCardList = [
  {
    id: 1,
    img: serviceCard1,
    title: "Air Conditioner Maintenance",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod",
    icon: serviceIcon
  },
  {
    id: 2,
    img: serviceCard2,
    title: "Ductless Split AC System",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod",
    icon: serviceIcon
  },
  {
    id: 3,
    img: serviceCard3,
    title: "Air Conditioner Replacement",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod",
    icon: serviceIcon
  },
  {
    id: 4,
    img: serviceCard4,
    title: "Water Heater Repair & Replacement",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod",
    icon: serviceIcon
  },
  {
    id: 5,
    img: serviceCard5,
    title: "Air Conditioner Maintenance",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod",
    icon: serviceIcon
  },
  {
    id: 6,
    img: serviceCard6,
    title: "Commercial Furnace Maintenance",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod",
    icon: serviceIcon
  }
]


export const priceList = [
    {
      id: 1,
      name: "Silver Plan",
      desc: "It is a long established fact that a reader will be distracted.",
      price: 29.65,
      specs: [
        "Indoor Air Quality",
        "Heater Repair",
        "Boilers"
      ],
      popular: false
    },
    {
      id: 2,
      name: "Gold Plan",
      desc: "It is a long established fact that a reader will be distracted.",
      price: 50.76,
      specs: [
        "Indoor Air Quality",
        "Heater Repair",
        "Boilers",
        "Heat Pumps",
        "Furnace Maintenance"
      ],
      popular: true
    },
    {
      id: 3,
      name: "Diamond Plan",
      desc: "It is a long established fact that a reader will be distracted.",
      price: 85.67,
      specs: [
        "Indoor Air Quality",
        "Heater Repair",
        "Boilers",
        "Heat Pumps",
        "Furnace Maintenance",
        "Emergency HVAC Services"
      ],
      popular: false
    }
]

export const testimonialList = [
  {
    id:1,
    name: "Aash Aron",
    img: testimonialImg1,
    star: 4,
    date : "07 March",
    comment: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    id:2,
    name: "Tom Hardy",
    img: testimonialImg2,
    star: 5,
    date : "12 March",
    comment: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  }
]


export const blogCardList = [
  {
    id: 1,
    img: blogCard1,
    title: "How Air Conditioner make your home cool",
    desc: "It is a long established fact that a reader will be distracted by.",
    date: "24th March 2022"
  },
  {
    id: 2,
    img: blogCard2,
    title: "How Air Conditioner make your home cool",
    desc: "It is a long established fact that a reader will be distracted by.",
    date: "24th March 2022"
  },
  {
    id: 3,
    img: blogCard3,
    title: "How Air Conditioner make your home cool",
    desc: "It is a long established fact that a reader will be distracted by.",
    date: "24th March 2022"
  },

]
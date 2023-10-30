import { AiOutlineHome, AiTwotoneHome } from "react-icons/ai";
import {FaRegListAlt} from 'react-icons/fa'
import {IoIosListBox} from 'react-icons/io'

export const mainMenu = [
    {
       path:"/",
       title:'Anasayfa',
       icon:{
        active: (
          <AiOutlineHome className="w-6 h-6 " />
          ),
          passive: (
            <AiTwotoneHome className="w-6 h-6 " />
          )
       },
    },
    {
        path:"/category",
        title:'Tüm Kategoriler',
        icon:{
            active: (
              <FaRegListAlt className="w-6 h-6 "/>
              ),
              passive: (
                <IoIosListBox className="w-6 h-6 "/> 
              )
        }
    }
]
export const musicMenu = [
  {
    title: "Tüm Müzik Etkinlikleri",
    link: "/account-settings",
    activeClass: "font-extrabold text-blue-500",
  },
  {
    title: "Rock",
    link: "/account-settings",
    activeClass: "font-extrabold text-blue-500",
  },
  {
    title: "Pop",
    link: "/account-settings",
    activeClass: "font-extrabold text-blue-500",
  },
  {
    title: "Caz",
    link: "/account-settings",
    activeClass: "font-extrabold text-blue-500",
  },
  {
    title: "Klasik",
    link: "/account-settings",
    activeClass: "font-extrabold text-blue-500",
  },
  {
    title: "Alternatif",
    link: "/account-settings",
    activeClass: "font-extrabold text-blue-500",
  },
  {
    title: "Rap",
    link: "/account-settings",
    activeClass: "font-extrabold text-blue-500",
  }
]
export const sceneMenu = [
  {
    title: "Tüm Sahne Etkinlikleri",
    link: "/account-settings",
    activeClass: "font-extrabold text-blue-500",
  },
  {
    title: "Tiyatro",
    link: "/account-settings",
    activeClass: "font-extrabold text-blue-500",
  },
  {
    title: "Stand-up",
    link: "/account-settings",
    activeClass: "font-extrabold text-blue-500",
  },
  {
    title: "Gösteri",
    link: "/account-settings",
    activeClass: "font-extrabold text-blue-500",
  },
]

export const items = [
  {
  time: "13:00",
  title: "Dunkirk",
},
{
  time: "15:00",
  title: "The Matrix",
},
{
  time: "18:00",
  title: "The Lord of the Rings",
},
{
  time: "20:00",
  title: "The Godfather"
},
{
  time: "22:00",
  title: "Inception",
},
];
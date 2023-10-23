

export const mainMenu = [
    {
       path:"/",
       title:'Anasayfa',
       icon:{
        active: (
            <svg
            className=" text-white"
            width={24}
            height={24}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2zm5-2v-5h4v5zm-5-8.59 7-7 7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5z"></path>
          </svg>
          ),
          passive: (
            <svg
            className=" text-white/30"
            width={24}
            height={24}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2zm5-2v-5h4v5zm-5-8.59 7-7 7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5z"></path>
          </svg>
          )
       },
    },
    {
        path:"/lists",
        title:'Listeler',
        icon:{
            active: (
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width={24}
                  height={24}
                  className=" text-white"
                >
                  <path fill="currentColor" d="M18.5 2h-13C4.12 2 3 3.12 3 4.5v15C3 20.88 4.12 22 5.5 22h13c1.38 0 2.5-1.12 2.5-2.5v-15C21 3.12 19.88 2 18.5 2zM16 14H8v-2h8v2zm0-4H8V8h8v2z"></path>
                </svg>
              ),
              passive: (
                <svg
                viewBox="0 0 24 24"
                width={24}
                height={24}
                className=" text-white/30"

              >
                <path fill="currentColor" d="M18.5 2h-13C4.12 2 3 3.12 3 4.5v15C3 20.88 4.12 22 5.5 22h13c1.38 0 2.5-1.12 2.5-2.5v-15C21 3.12 19.88 2 18.5 2zM16 14H8v-2h8v2zm0-4H8V8h8v2z"></path>
              </svg>
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
  title: "13:00",
  cardTitle: "Dunkirk",
},
{
  title: "15:00",
  cardTitle: "The Matrix",
},
{
  title: "18:00",
  cardTitle: "The Lord of the Rings",
},
{
  title: "20:00",
  cardTitle: "The Godfather"
},
{
  title: "22:00",
  cardTitle: "Inception",
},
];
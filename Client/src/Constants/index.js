import { postPhoto, profileImage } from "../assets/images";
import { bookMarkIcon, galleryAddIcon, homeIcon, peopleIcon, wallpaperIcon } from "../assets/icons";

export const sidebarLinks = [
  {
    imgURL: homeIcon,
    route: "/",
    label: "Home",
  },
  {
    imgURL: wallpaperIcon,
    route: "/explore",
    label: "Explore",
  },
  {
    imgURL: peopleIcon,
    route: "/all-users",
    label: "People",
  },
  {
    imgURL: bookMarkIcon,
    route: "/saved",
    label: "Saved",
  },
  {
    imgURL: galleryAddIcon,
    route: "/create-post",
    label: "Create Post",
  },
];

export const chatThreads = [
  {
    profileImage: profileImage,
    userName: "Eric",
    lastMsg: "I am well...",
    userId: "1234"
  },
  {
    profileImage: profileImage,
    userName: "Lina",
    lastMsg: "Say hi to Mum for me...",
    userId: "2222"
  },
  {
    profileImage: profileImage,
    userName: "Arshley",
    lastMsg: "Hope school is well...",
    userId: "1111"
  },
  {
    profileImage: profileImage,
    userName: "Arshley",
    lastMsg: "Hope school is well..."
  },
  {
    profileImage: profileImage,
    userName: "Arshley",
    lastMsg: "Hope school is well..."
  },
  {
    profileImage: profileImage,
    userName: "Arshley",
    lastMsg: "Hope school is well..."
  },
  {
    profileImage: profileImage,
    userName: "Arshley",
    lastMsg: "Hope school is well..."
  },
  {
    profileImage: profileImage,
    userName: "Arshley",
    lastMsg: "Hope school is well..."
  },
  {
    profileImage: profileImage,
    userName: "Arshley",
    lastMsg: "Hope school is well..."
  },
]

export const convosFromMe = [
  {
    message: "Yo",
    time: "2:00pm",
    sender: "me"
  },
  {
    message: "Hi",
    time: "2:02pm",
    sender: "third-party"
  },
  {
    message: "Sup",
    time: "2:05pm",
    sender: "third-party"
  },
  {
    message: "Nun much",
    time: "2:15pm",
    sender: "me"
  },
  {
    message: "Cool",
    time: "2:30pm",
    sender: "third-party",
  }, {
    message: "Hi",
    time: "2:02pm",
    sender: "me",
  },
  {
    message: "Sup",
    time: "2:05pm",
    sender: "me"
  },

]

export const bottombarLinks = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/wallpaper.svg",
    route: "/explore",
    label: "Explore",
  },
  {
    imgURL: "/assets/icons/bookmark.svg",
    route: "/saved",
    label: "Saved",
  },
  {
    imgURL: "/assets/icons/gallery-add.svg",
    route: "/create-post",
    label: "Create",
  },
];

export const posts = [
  {
    userName: "Zazy",
    postPhoto: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg",
    profileImgae: profileImage,
    timeAndPlace: "3 hours ago - Japan",
    caption: "Nature",
    likes: "1"
  },
  {
    userName: "Aubrey",
    profileImgae: "https://neweralive.na/storage/images/2023/may/lloyd-sikeba.jpg",
    timeAndPlace: "1 hours ago - USA",
    postPhoto: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
    caption: "Nature",
    likes: "1"
  },
  {
    userName: "Bonnie",
    profileImgae: "https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg",
    timeAndPlace: "2 mins ago - Rwanda",
    postPhoto: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    caption: "Nature",
    likes: "1"
  },
  {
    userName: "Adeline",
    profileImgae: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
    timeAndPlace: "yesteray - Nigeria",
    postPhoto: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    caption: "Nature",
    likes: "1"
  },
  {
    userName: "Daphne",
    profileImgae: "https://hackspirit.com/wp-content/uploads/2021/06/Copy-of-Rustic-Female-Teen-Magazine-Cover.jpg",
    timeAndPlace: "2 days ago - England",
    postPhoto: "https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww",
    caption: "Nature",
    likes: "1"
  },
  {
    userName: "Isabel",
    profileImgae: "https://pbs.twimg.com/profile_images/1465102977312636929/oXKdq9aL_400x400.jpg",
    timeAndPlace: "July 4th - India",
    postPhoto: "https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg",
    caption: "Nature",
    likes: "1"
  },
  {
    userName: "Oliver",
    profileImgae: "https://kentuckycounselingcenter.com/wp-content/uploads/2022/01/thinking-man-gf9b9e7a8b_1920.png",
    timeAndPlace: "4 days ago - Scotland",
    postPhoto: "https://th.bing.com/th/id/OIG.b7fbyFnoRp_h0eDim7rl",
    caption: "Nature",
    likes: "1"
  },
  {
    userName: "Williams",
    profileImgae: "https://www.jordanharbinger.com/wp-content/uploads/2018/09/be-the-most-interesting.jpg",
    timeAndPlace: "just now- Cameroon",
    postPhoto: "https://media.istockphoto.com/id/1322220448/photo/abstract-digital-futuristic-eye.jpg?s=612x612&w=0&k=20&c=oAMmGJxyTTNW0XcttULhkp5IxfW9ZTaoVdVwI2KwK5s=",
    caption: "Sci-fi",
    likes: "1"
  },
  {
    userName: "Sophie",
    profileImgae: "https://img.huffingtonpost.com/asset/5c2d06271d00002c0231b4e4.jpeg?ops=scalefit_720_noupscale",
    timeAndPlace: "1 minute ago - Sweden",
    postPhoto: "https://cc-prod.scene7.com/is/image/CCProdAuthor/d-03-4?$pjpeg$&jpegSize=200&wid=720",
    caption: "Nature",
    likes: "1"
  }
];

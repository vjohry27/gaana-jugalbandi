import React, { useState, useEffect, useRef } from "react";

const songDatabase = {
  Hindi: [
    {
      title: "Kesariya",
      artist: "Pritam, Arijit Singh",
      duration: 268,
      cover: "/assets/covers/hindi1.jpg",
    },
    {
      title: "Tum Hi Ho",
      artist: "Arijit Singh",
      duration: 262,
      cover: "/assets/covers/hindi2.jpeg",
    },
    {
      title: "Deewani Mastani",
      artist: "Shreya Ghoshal",
      duration: 340,
      cover: "/assets/covers/hindi3.jpg",
    },
    {
      title: "Channa Mereya",
      artist: "Arijit Singh",
      duration: 289,
      cover: "/assets/covers/hindi4.jpg",
    },
    {
      title: "Apna Bana Le",
      artist: "Arijit Singh, Sachin-Jigar",
      duration: 264,
      cover: "/assets/covers/hindi5.jpg",
    },
    {
      title: "Agar Tum Saath Ho",
      artist: "Alka Yagnik, Arijit Singh",
      duration: 341,
      cover: "/assets/covers/hindi6.jpg",
    },
    {
      title: "Raataan Lambiyan",
      artist: "Tanishk Bagchi, Jubin Nautiyal",
      duration: 230,
      cover: "/assets/covers/hindi7.jpg",
    },
    {
      title: "Kabira",
      artist: "Tochi Raina, Rekha Bhardwaj",
      duration: 251,
      cover: "/assets/covers/hindi8.jpg",
    },
    {
      title: "Kal Ho Naa Ho",
      artist: "Sonu Nigam",
      duration: 322,
      cover: "/assets/covers/hindi9.png",
    },
    {
      title: "Janiye",
      artist: "Vishal Mishra",
      duration: 223,
      cover: "/assets/covers/hindi10.jpg",
    },
  ],
  Punjabi: [
    {
      title: "Lover",
      artist: "Diljit Dosanjh",
      duration: 191,
      cover: "/assets/covers/punjabi1.jpg",
    },
    {
      title: "Legend",
      artist: "Sidhu Moose Wala",
      duration: 184,
      cover: "/assets/covers/punjabi2.jpg",
    },
    {
      title: "Pasoori",
      artist: "Ali Sethi, Shae Gill",
      duration: 224,
      cover: "/assets/covers/punjabi3.jpg",
    },
    {
      title: "Brown Munde",
      artist: "AP Dhillon, Gurinder Gill",
      duration: 267,
      cover: "/assets/covers/punjabi4.jpg",
    },
    {
      title: "Excuses",
      artist: "AP Dhillon, Intense",
      duration: 176,
      cover: "/assets/covers/punjabi5.jpg",
    },
    {
      title: "Softly",
      artist: "Karan Aujla",
      duration: 153,
      cover: "/assets/covers/punjabi6.jpg",
    },
    {
      title: "White Brown Black",
      artist: "Avvy Sra, Karan Aujla",
      duration: 188,
      cover: "/assets/covers/punjabi7.jpg",
    },
    {
      title: "Elevated",
      artist: "Shubh",
      duration: 202,
      cover: "/assets/covers/punjabi8.jpg",
    },
    {
      title: "Mi Amor",
      artist: "Sharn",
      duration: 218,
      cover: "/assets/covers/punjabi9.jpg",
    },
    {
      title: "29 Choppers",
      artist: "Sidhu Moose Wala",
      duration: 243,
      cover: "/assets/covers/punjabi10.jpg",
    },
  ],
  Haryanvi: [
    {
      title: "Gypsy",
      artist: "G D Kaur",
      duration: 195,
      cover: "/assets/covers/haryanvi1.jpg",
    },
    {
      title: "52 Gaj Ka Daman",
      artist: "Renuka Panwar",
      duration: 245,
      cover: "/assets/covers/haryanvi2.jpg",
    },
    {
      title: "Moto",
      artist: "Diler Kharkiya",
      duration: 210,
      cover: "/assets/covers/haryanvi3.jpg",
    },
    {
      title: "Chatak Matak",
      artist: "Renuka Panwar",
      duration: 204,
      cover: "/assets/covers/haryanvi4.jpg",
    },
    {
      title: "Solid Body",
      artist: "Raju Punjabi",
      duration: 225,
      cover: "/assets/covers/haryanvi5.jpg",
    },
    {
      title: "Badli Badli Laage",
      artist: "Vicky Kajla",
      duration: 232,
      cover: "/assets/covers/haryanvi6.jpg",
    },
    {
      title: "Wish",
      artist: "Diler Kharkiya",
      duration: 188,
      cover: "/assets/covers/haryanvi7.jpg",
    },
    {
      title: "Loot Liya",
      artist: "Raju Punjabi",
      duration: 212,
      cover: "/assets/covers/haryanvi8.jpg",
    },
    {
      title: "Chand",
      artist: "Sandeep Surila",
      duration: 198,
      cover: "/assets/covers/haryanvi9.jpg",
    },
    {
      title: "Dada",
      artist: "Amit Saini Rohtaki",
      duration: 240,
      cover: "/assets/covers/haryanvi10.jpg",
    },
  ],
  Bhojpuri: [
    {
      title: "Lollipop Lagelu",
      artist: "Pawan Singh",
      duration: 255,
      cover: "/assets/covers/bhojpuri1.jpg",
    },
    {
      title: "Raja Raja Kareja Mein Samaja",
      artist: "Radhe Shyam",
      duration: 210,
      cover: "/assets/covers/bhojpuri2.jpg",
    },
    {
      title: "Kamariya Kare Lapa Lop",
      artist: "Pawan Singh",
      duration: 198,
      cover: "/assets/covers/bhojpuri3.jpg",
    },
    {
      title: "Ice Cream",
      artist: "Khesari Lal Yadav",
      duration: 220,
      cover: "/assets/covers/bhojpuri4.jpg",
    },
    {
      title: "Phulariyan",
      artist: "Ritesh Pandey",
      duration: 242,
      cover: "/assets/covers/bhojpuri5.jpg",
    },
    {
      title: "Jila Top Lagelu",
      artist: "Pawan Singh",
      duration: 205,
      cover: "/assets/covers/bhojpuri6.jpg",
    },
    {
      title: "Coolie No 1",
      artist: "Khesari Lal Yadav",
      duration: 235,
      cover: "/assets/covers/bhojpuri7.jpg",
    },
    {
      title: "Palang Sagwan Ke",
      artist: "Khesari Lal Yadav",
      duration: 250,
      cover: "/assets/covers/bhojpuri8.jpg",
    },
    {
      title: "Bhojpuriya Don",
      artist: "Manoj Tiwari",
      duration: 215,
      cover: "/assets/covers/bhojpuri9.jpg",
    },
    {
      title: "Setting Kara K Ja",
      artist: "Khesari Lal Yadav",
      duration: 189,
      cover: "/assets/covers/bhojpuri10.jpg",
    },
  ],
  English: [
    {
      title: "Blinding Lights",
      artist: "The Weeknd",
      duration: 200,
      cover: "/assets/covers/english1.jpg",
    },
    {
      title: "Shape of You",
      artist: "Ed Sheeran",
      duration: 233,
      cover: "/assets/covers/english2.png",
    },
    {
      title: "Stay",
      artist: "The Kid LAROI, Justin Bieber",
      duration: 141,
      cover: "/assets/covers/english3.jpg",
    },
    {
      title: "As It Was",
      artist: "Harry Styles",
      duration: 167,
      cover: "/assets/covers/english4.jpg",
    },
    {
      title: "Starboy",
      artist: "The Weeknd",
      duration: 230,
      cover: "/assets/covers/english5.jpg",
    },
    {
      title: "Flowers",
      artist: "Miley Cyrus",
      duration: 200,
      cover: "/assets/covers/english6.jpg",
    },
    {
      title: "Cruel Summer",
      artist: "Taylor Swift",
      duration: 178,
      cover: "/assets/covers/english7.jpg",
    },
    {
      title: "Perfect",
      artist: "Ed Sheeran",
      duration: 263,
      cover: "/assets/covers/english8.jpg",
    },
    {
      title: "Believer",
      artist: "Imagine Dragons",
      duration: 204,
      cover: "/assets/covers/english9.jpg",
    },
    {
      title: "Dynamite",
      artist: "BTS",
      duration: 199,
      cover: "/assets/covers/english10.jpg",
    },
  ],
  Bengali: [
    {
      title: "Bhalobashar Morshum",
      artist: "Shreya Ghoshal",
      duration: 278,
      cover: "/assets/covers/bengali1.jpg",
    },
    {
      title: "Tumi Jake Bhalobasho",
      artist: "Iman Chakraborty",
      duration: 295,
      cover: "/assets/covers/bengali2.jpg",
    },
    {
      title: "Amake Amar Moto Thakte Dao",
      artist: "Anupam Roy",
      duration: 248,
      cover: "/assets/covers/bengali3.jpg",
    },
    {
      title: "Boba Tunnel",
      artist: "Anupam Roy",
      duration: 232,
      cover: "/assets/covers/bengali4.jpg",
    },
    {
      title: "Tomake Chuye Dilam",
      artist: "Arijit Singh",
      duration: 254,
      cover: "/assets/covers/bengali5.jpg",
    },
    {
      title: "Rangabati",
      artist: "Sona Mohapatra",
      duration: 261,
      cover: "/assets/covers/bengali6.jpg",
    },
    {
      title: "Tor Mon Paray",
      artist: "Mahfuz Hack",
      duration: 210,
      cover: "/assets/covers/bengali7.jpg",
    },
    {
      title: "Eh Kichu Golpo",
      artist: "Shreya Ghoshal",
      duration: 244,
      cover: "/assets/covers/bengali8.jpg",
    },
    {
      title: "Ohona",
      artist: "Shayan Chowdhury Arnob",
      duration: 280,
      cover: "/assets/covers/bengali9.jpg",
    },
    {
      title: "Its Ok",
      artist: "Anjan Dutt",
      duration: 219,
      cover: "/assets/covers/bengali10.jpg",
    },
  ],
  Gujarati: [
    {
      title: "Khalasi",
      artist: "Aditya Gadhvi",
      duration: 212,
      cover: "/assets/covers/gujarati1.jpg",
    },
    {
      title: "Radhe Shyam",
      artist: "Sachin-Jigar",
      duration: 245,
      cover: "/assets/covers/gujarati2.jpg",
    },
    {
      title: "Vhalam Aavo Ne",
      artist: "Jigardan Gadhavi",
      duration: 312,
      cover: "/assets/covers/gujarati3.jpg",
    },
    {
      title: "Satrangi Re",
      artist: "Arijit Singh",
      duration: 259,
      cover: "/assets/covers/gujarati4.jpg",
    },
    {
      title: "Char Bangdi Vali Gadi",
      artist: "Kinjal Dave",
      duration: 220,
      cover: "/assets/covers/gujarati5.jpg",
    },
    {
      title: "Bhai Bhai",
      artist: "Arvind Vegda",
      duration: 195,
      cover: "/assets/covers/gujarati6.jpg",
    },
    {
      title: "Dhuni Re Dhakhavi",
      artist: "Geeta Rabari",
      duration: 241,
      cover: "/assets/covers/gujarati7.jpg",
    },
    {
      title: "Kehvu Ganu Ganu Che",
      artist: "Parthiv Gohil",
      duration: 288,
      cover: "/assets/covers/gujarati8.jpg",
    },
    {
      title: "Mehandi Te Vavvi",
      artist: "Aishwarya Majmudar",
      duration: 210,
      cover: "/assets/covers/gujarati9.jpg",
    },
    {
      title: "Osmman",
      artist: "Aditya Gadhvi",
      duration: 234,
      cover: "/assets/covers/gujarati10.jpg",
    },
  ],
  Kannada: [
    {
      title: "Singara Siriye",
      artist: "Vijay Prakash",
      duration: 282,
      cover: "/assets/covers/kannada1.jpg",
    },
    {
      title: "Ra Ra Rakkamma",
      artist: "Sunidhi Chauhan",
      duration: 215,
      cover: "/assets/covers/kannada2.jpg",
    },
    {
      title: "Tagaru Banthu Tagaru",
      artist: "Anthony Daasan",
      duration: 201,
      cover: "/assets/covers/kannada3.jpg",
    },
    {
      title: "Natasaarvabhouma",
      artist: "Puneeth Rajkumar",
      duration: 234,
      cover: "/assets/covers/kannada4.jpg",
    },
    {
      title: "Salaam Rocky Bhai",
      artist: "Vijay Prakash",
      duration: 243,
      cover: "/assets/covers/kannada5.jpg",
    },
    {
      title: "Belageddu",
      artist: "Vijay Prakash",
      duration: 222,
      cover: "/assets/covers/kannada6.jpg",
    },
    {
      title: "Neene Modalu",
      artist: "Shreya Ghoshal",
      duration: 211,
      cover: "/assets/covers/kannada7.jpg",
    },
    {
      title: "Open The Bottle",
      artist: "Vijay Prakash",
      duration: 256,
      cover: "/assets/covers/kannada8.jpg",
    },
    {
      title: "Karabu",
      artist: "Chandan Shetty",
      duration: 240,
      cover: "/assets/covers/kannada9.jpg",
    },
    {
      title: "Yo Yo",
      artist: "Chandan Shetty",
      duration: 198,
      cover: "/assets/covers/kannada10.jpg",
    },
  ],
  Malayalam: [
    {
      title: "Malare",
      artist: "Vijay Yesudas",
      duration: 311,
      cover: "/assets/covers/malayalam1.jpg",
    },
    {
      title: "Jeevamshamayi",
      artist: "K.S. Harisankar",
      duration: 302,
      cover: "/assets/covers/malayalam2.jpg",
    },
    {
      title: "Darshana",
      artist: "Hesham Abdul Wahab",
      duration: 235,
      cover: "/assets/covers/malayalam3.jpg",
    },
    {
      title: "Pavizha Mazha",
      artist: "K.S. Harisankar",
      duration: 288,
      cover: "/assets/covers/malayalam4.jpg",
    },
    {
      title: "Kadhale Kadhale",
      artist: "Shreya Ghoshal",
      duration: 245,
      cover: "/assets/covers/malayalam5.jpg",
    },
    {
      title: "Thaniye",
      artist: "Teenu Tellson",
      duration: 212,
      cover: "/assets/covers/malayalam6.jpg",
    },
    {
      title: "Akale",
      artist: "Kapil Kapilan",
      duration: 222,
      cover: "/assets/covers/malayalam7.jpg",
    },
    {
      title: "Appangal Embadum",
      artist: "Anna Katharina Valayil",
      duration: 189,
      cover: "/assets/covers/malayalam8.jpg",
    },
    {
      title: "Ethu Kari Raavilum",
      artist: "Haricharan",
      duration: 310,
      cover: "/assets/covers/malayalam9.jpg",
    },
    {
      title: "Lajjavathiye",
      artist: "Jassie Gift",
      duration: 243,
      cover: "/assets/covers/malayalam10.jpg",
    },
  ],
  Tamil: [
    {
      title: "Naattu Koothu",
      artist: "Rahul Sipligunj",
      duration: 215,
      cover: "/assets/covers/tamil1.jpg",
    },
    {
      title: "Arabic Kuthu",
      artist: "Anirudh Ravichander",
      duration: 280,
      cover: "/assets/covers/tamil2.jpg",
    },
    {
      title: "Rowdy Baby",
      artist: "Dhanush, Dhee",
      duration: 284,
      cover: "/assets/covers/tamil3.jpg",
    },
    {
      title: "Tum Tum",
      artist: "Sri Vardhini",
      duration: 221,
      cover: "/assets/covers/tamil4.jpg",
    },
    {
      title: "Kaavaalaa",
      artist: "Shilpa Rao, Anirudh",
      duration: 193,
      cover: "/assets/covers/tamil5.jpg",
    },
    {
      title: "Hukum",
      artist: "Anirudh Ravichander",
      duration: 208,
      cover: "/assets/covers/tamil6.jpg",
    },
    {
      title: "Vaathi Coming",
      artist: "Anirudh Ravichander",
      duration: 235,
      cover: "/assets/covers/tamil7.jpg",
    },
    {
      title: "Ranjithame",
      artist: "Vijay, Manasi",
      duration: 288,
      cover: "/assets/covers/tamil8.jpg",
    },
    {
      title: "Mezham",
      artist: "Anirudh Ravichander",
      duration: 210,
      cover: "/assets/covers/tamil9.jpg",
    },
    {
      title: "Marakkuma Nenjam",
      artist: "A.R. Rahman",
      duration: 258,
      cover: "/assets/covers/tamil10.jpg",
    },
  ],
};

const languageCharacters = {
  Hindi: "हि",
  Punjabi: "ਪੰ",
  Haryanvi: "हर",
  Bhojpuri: "भो",
  English: "En",
  Bengali: "বা",
  Gujarati: "ગુ",
  Kannada: "ಕ",
  Malayalam: "മ",
  Tamil: "த",
};

const featureCards = [
  {
    label: "Jugalbandi",
    image: "/assets/jugalbandi.png",
    bgClass: "bg-gaanaCardDark border-2 border-zinc-800",
    textClass: "text-white",
    imageClass: "w-16 h-16",
    badge: "NEW",
    clickable: true,
  },
  {
    label: "True Fan Charts",
    image: "/assets/truefan.png",
    bgClass: "bg-[#E91E63]",
    textClass: "text-white",
    imageClass: "w-8 h-8",
  },
  {
    label: "Music",
    image: "/assets/music.png",
    bgClass: "bg-[#7B1FA2]",
    textClass: "text-white",
    imageClass: "w-8 h-8",
  },
  {
    label: "Podcasts",
    image: "/assets/podcast.png",
    bgClass: "bg-[#009688]",
    textClass: "text-white",
    imageClass: "w-8 h-8",
  },
  {
    label: "Radio Mirchi",
    image: "/assets/radio.png",
    bgClass: "bg-[#EF6C00]",
    textClass: "text-white",
    imageClass: "w-8 h-8",
  },
  {
    label: "Profile",
    image: "/assets/profile.png",
    bgClass: "bg-[#1976D2]",
    textClass: "text-white",
    imageClass: "w-8 h-8",
  },
];

const useSmoothDraggableScroll = () => {
  const ref = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e) => {
    isDown.current = true;
    if (ref.current) {
      ref.current.classList.add("no-snap");
      startX.current = e.pageX - ref.current.offsetLeft;
      scrollLeft.current = ref.current.scrollLeft;
    }
  };

  const onMouseLeave = () => {
    if (isDown.current && ref.current) {
      ref.current.classList.remove("no-snap");
    }
    isDown.current = false;
  };

  const onMouseUp = () => {
    if (isDown.current && ref.current) {
      ref.current.classList.remove("no-snap");
    }
    isDown.current = false;
  };

  const onMouseMove = (e) => {
    if (!isDown.current || !ref.current) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    ref.current.scrollLeft = scrollLeft.current - walk;
  };

  return {
    ref,
    props: {
      onMouseDown,
      onMouseLeave,
      onMouseUp,
      onMouseMove,
      style: { userSelect: "none" },
    },
  };
};

export default function App() {
  const [greeting, setGreeting] = useState("Good Evening");
  const [screen, setScreen] = useState("home");
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [isOnboardingClosing, setIsOnboardingClosing] = useState(false);
  const [selectedLangs, setSelectedLangs] = useState(["Hindi", "Punjabi"]);
  const [sliderVal, setSliderVal] = useState(60);
  const [generatedPlaylist, setGeneratedPlaylist] = useState([]);

  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlayerExpanded, setIsPlayerExpanded] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isLoop, setIsLoop] = useState(false);
  const isLightMode = false;

  const madeForYouDrag = useSmoothDraggableScroll();
  const recentlyPlayedDrag = useSmoothDraggableScroll();
  const categoriesDrag = useSmoothDraggableScroll();

  useEffect(() => {
    const hrs = new Date().getHours();
    if (hrs < 12) setGreeting("Good Morning");
    else if (hrs < 17) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");
  }, []);

  useEffect(() => {
    let interval = null;
    if (isPlaying && currentSong) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= currentSong.duration) {
            if (isLoop) {
              return 0;
            } else {
              handleNextSong();
              return 0;
            }
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentSong, isShuffle, isLoop, generatedPlaylist]);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const handleLanguageToggle = (lang) => {
    if (selectedLangs.includes(lang)) {
      if (selectedLangs.length > 1) {
        setSelectedLangs(selectedLangs.filter((l) => l !== lang));
      }
    } else {
      if (selectedLangs.length < 2) {
        setSelectedLangs([...selectedLangs, lang]);
      } else {
        setSelectedLangs([selectedLangs[1], lang]);
      }
    }
  };

  const closeOnboarding = () => {
    setIsOnboardingClosing(true);
    setTimeout(() => {
      setShowOnboarding(false);
      setIsOnboardingClosing(false);
    }, 500);
  };

  const generateRecommendations = () => {
    setScreen("loading");
    setTimeout(() => {
      const count1 = Math.round((sliderVal / 100) * 10);
      const count2 = 10 - count1;

      const lang1Songs = [...songDatabase[selectedLangs[0]]];
      const lang2Songs = [...songDatabase[selectedLangs[1]]];

      const shuffled1 = lang1Songs
        .sort(() => 0.5 - Math.random())
        .slice(0, count1);
      const shuffled2 = lang2Songs
        .sort(() => 0.5 - Math.random())
        .slice(0, count2);

      const mixed = [];
      let i = 0,
        j = 0;
      while (i < shuffled1.length || j < shuffled2.length) {
        if (i < shuffled1.length)
          mixed.push({ ...shuffled1[i++], lang: selectedLangs[0] });
        if (j < shuffled2.length)
          mixed.push({ ...shuffled2[j++], lang: selectedLangs[1] });
      }

      setGeneratedPlaylist(mixed.slice(0, 10));
      setCurrentSong(null);
      setCurrentTime(0);
      setIsPlaying(false);
      setScreen("playlist");
    }, 3500);
  };

  const handleNextSong = () => {
    if (generatedPlaylist.length === 0) return;
    let nextIndex = 0;
    if (isShuffle) {
      nextIndex = Math.floor(Math.random() * generatedPlaylist.length);
    } else if (currentSong) {
      const currentIndex = generatedPlaylist.findIndex(
        (s) => s.title === currentSong.title,
      );
      nextIndex = (currentIndex + 1) % generatedPlaylist.length;
    }
    setCurrentSong(generatedPlaylist[nextIndex]);
    setCurrentTime(0);
    setIsPlaying(true);
  };

  const handlePrevSong = () => {
    if (generatedPlaylist.length === 0) return;
    let prevIndex = 0;
    if (isShuffle) {
      prevIndex = Math.floor(Math.random() * generatedPlaylist.length);
    } else if (currentSong) {
      const currentIndex = generatedPlaylist.findIndex(
        (s) => s.title === currentSong.title,
      );
      prevIndex =
        (currentIndex - 1 + generatedPlaylist.length) %
        generatedPlaylist.length;
    }
    setCurrentSong(generatedPlaylist[prevIndex]);
    setCurrentTime(0);
    setIsPlaying(true);
  };

  const handleScrub = (e) => {
    if (!currentSong) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, x / rect.width));
    setCurrentTime(Math.floor(percentage * currentSong.duration));
  };

  const totalMinutesCalculated = Math.round(
    generatedPlaylist.reduce((acc, song) => acc + song.duration, 0) / 60,
  );

  return (
    <div className="w-full min-h-screen bg-black flex justify-center items-center font-sans antialiased selection:bg-gaanaRed selection:text-white">
      <div
        className={`w-full max-w-[420px] h-[900px] ${
          isLightMode
            ? "bg-white text-zinc-900 border-zinc-200"
            : "bg-gaanaDark text-white border-zinc-800"
        } relative rounded-[40px] overflow-hidden flex flex-col shadow-2xl border transition-colors duration-300`}
      >
        {screen === "home" && (
          <div className="flex-1 flex flex-col overflow-y-auto pb-24 relative">
            <div
              className={`absolute top-0 left-0 right-0 h-[75%] bg-gradient-to-b ${
                isLightMode
                  ? "from-red-500 via-red-200/60 to-white"
                  : "from-red-600 via-red-900/50 to-gaanaDark"
              } pointer-events-none transition-colors duration-300`}
            />

            <header className="relative z-10 px-5 pt-8 flex justify-between items-center">
              <span
                className={`text-3xl font-black italic tracking-tighter ${
                  isLightMode ? "text-black" : "text-white"
                }`}
              >
                gaana
              </span>
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-full text-xs font-bold flex justify-center items-center border ${
                    isLightMode
                      ? "bg-zinc-100 border-zinc-300 text-zinc-600"
                      : "bg-zinc-800 border-zinc-700 text-gaanaTextGray"
                  }`}
                >
                  VJ
                </div>
                <button
                  type="button"
                  aria-label="Settings"
                  className={`w-8 h-8 rounded-full flex justify-center items-center transition-colors`}
                >
                  <svg
                    className="w-6 h-6 fill-none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M15 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7Z" />
                    <path d="M19.4 13a7.9 7.9 0 0 0 .1-2l2-1.2-2-3.4-2.3.8a7.6 7.6 0 0 0-1.8-1l-.3-2.4h-4l-.3 2.4a7.6 7.6 0 0 0-1.8 1l-2.3-.8-2 3.4 2 1.2a7.9 7.9 0 0 0 0 2l-2 1.2 2 3.4 2.3-.8a7.6 7.6 0 0 0 1.8 1l.3 2.4h4l.3-2.4a7.6 7.6 0 0 0 1.8-1l2.3.8 2-3.4-2-1.2Z" />
                  </svg>
                </button>
              </div>
            </header>

            <section className="relative z-10 px-5 mt-6">
              <h1
                className={`text-2xl font-bold tracking-tight ${
                  isLightMode ? "text-zinc-900" : "text-white"
                }`}
              >
                {greeting}
              </h1>
              <p
                className={`text-xs mt-1 ${
                  isLightMode ? "text-zinc-700" : "text-zinc-200/80"
                }`}
              >
                Music to get you started
              </p>
            </section>

            <section
              ref={categoriesDrag.ref}
              {...categoriesDrag.props}
              className="relative z-10 px-5 mt-6 overflow-x-auto whitespace-nowrap flex gap-3.5 py-2"
            >
              {featureCards.map((card) => (
                <div
                  key={card.label}
                  onClick={
                    card.clickable ? () => setShowOnboarding(true) : undefined
                  }
                  className={`inline-block w-28 h-28 ${card.bgClass} rounded-2xl relative flex-shrink-0 overflow-hidden transition-all duration-300 hover:-translate-y-1 active:scale-95 ${
                    card.clickable
                      ? "cursor-pointer animate-border-glow shadow-lg"
                      : "cursor-default"
                  }`}
                >
                  {card.badge && (
                    <span className="absolute top-2 right-2 bg-gaanaRed text-[9px] font-black tracking-wide text-white px-1.5 py-0.5 rounded-full shadow-md z-20">
                      {card.badge}
                    </span>
                  )}

                  <div className="absolute inset-0 flex flex-col items-center justify-center px-2 text-center">
                    <img
                      src={card.image}
                      alt={card.label}
                      className={`${card.imageClass} object-contain mb-2`}
                    />
                    <div
                      className={`text-sm font-bold tracking-tight leading-tight whitespace-normal ${card.textClass}`}
                    >
                      {card.label}
                    </div>
                  </div>
                </div>
              ))}
            </section>

            <section className="px-5 mt-8 relative z-10">
              <div className="flex justify-between items-baseline mb-4">
                <h2
                  className={`text-lg font-bold tracking-tight ${isLightMode ? "text-zinc-900" : "text-white"}`}
                >
                  Made for you
                </h2>
                <span
                  className={`text-xs font-medium cursor-default ${isLightMode ? "text-zinc-500" : "text-gaanaTextGray"}`}
                >
                  See all
                </span>
              </div>
              <div
                ref={madeForYouDrag.ref}
                {...madeForYouDrag.props}
                className="flex gap-4 overflow-x-auto pb-2"
              >
                <div className="w-36 flex-shrink-0">
                  <div className="w-36 h-36 rounded-2xl mb-2 relative overflow-hidden border border-zinc-700 group transition-all duration-300 hover:-translate-y-1">
                    <img
                      src="/assets/lofi-beats.jpg"
                      alt="Lo-fi Beats"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-12 z-10">
                      <div className="text-xs font-bold text-white">
                        Lo-fi Beats
                      </div>
                    </div>
                    <button className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-xl transition-transform active:scale-90 border border-zinc-200 z-10">
                      <svg
                        className="w-4 h-4 text-black fill-current ml-0.5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                  <div
                    className={`text-xs font-bold px-1 ${isLightMode ? "text-zinc-800" : "text-zinc-200"}`}
                  >
                    Lo-fi Beats
                  </div>
                </div>

                <div className="w-36 flex-shrink-0">
                  <div className="w-36 h-36 rounded-2xl mb-2 relative overflow-hidden border border-zinc-700 group transition-all duration-300 hover:-translate-y-1">
                    <img
                      src="/assets/party.jpg"
                      alt="Party Hits"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-12 z-10">
                      <div className="text-xs font-bold text-white">
                        Party Hits
                      </div>
                    </div>
                    <button className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-xl transition-transform active:scale-90 border border-zinc-200 z-10">
                      <svg
                        className="w-4 h-4 text-black fill-current ml-0.5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                  <div
                    className={`text-xs font-bold px-1 ${isLightMode ? "text-zinc-800" : "text-zinc-200"}`}
                  >
                    Party Hits
                  </div>
                </div>

                <div className="w-36 flex-shrink-0">
                  <div className="w-36 h-36 rounded-2xl mb-2 relative overflow-hidden border border-zinc-700 group transition-all duration-300 hover:-translate-y-1">
                    <img
                      src="/assets/arjit.jpg"
                      alt="Arijit Essentials"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-12 z-10">
                      <div className="text-xs font-bold text-white">
                        Arijit Essentials
                      </div>
                    </div>
                    <button className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-xl transition-transform active:scale-90 border border-zinc-200 z-10">
                      <svg
                        className="w-4 h-4 text-black fill-current ml-0.5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                  <div
                    className={`text-xs font-bold px-1 ${isLightMode ? "text-zinc-800" : "text-zinc-200"}`}
                  >
                    Arijit Essentials
                  </div>
                </div>
              </div>
            </section>

            <section className="px-5 mt-8 relative z-10">
              <div className="flex justify-between items-baseline mb-4">
                <h2
                  className={`text-lg font-bold tracking-tight ${isLightMode ? "text-zinc-900" : "text-white"}`}
                >
                  Recently played
                </h2>
                <span
                  className={`text-xs font-medium cursor-default ${isLightMode ? "text-zinc-500" : "text-gaanaTextGray"}`}
                >
                  See all
                </span>
              </div>
              <div
                ref={recentlyPlayedDrag.ref}
                {...recentlyPlayedDrag.props}
                className="flex gap-4 overflow-x-auto pb-2"
              >
                <div className="w-32 flex-shrink-0">
                  <div className="w-32 h-32 rounded-2xl mb-2 relative overflow-hidden border border-zinc-700 group transition-all duration-300 hover:-translate-y-1">
                    <img
                      src="/assets/hawayein.jpg"
                      alt="Azar Si"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-2 left-2 right-10 z-10">
                      <div className="text-xs font-bold truncate text-white">
                        Hawayein
                      </div>
                      <div className="text-[10px] truncate text-white/80">
                        Arijit Singh
                      </div>
                    </div>
                    <button className="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-white text-black flex items-center justify-center text-[10px] shadow-lg z-10">
                      <svg
                        className="w-4 h-4 text-black fill-current ml-0.5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                  <div
                    className={`text-xs font-bold truncate px-1 ${isLightMode ? "text-zinc-800" : "text-zinc-100"}`}
                  >
                    Hawayein
                  </div>
                  <div
                    className={`text-[10px] truncate px-1 ${isLightMode ? "text-zinc-500" : "text-gaanaTextGray"}`}
                  >
                    Arijit Singh
                  </div>
                </div>

                <div className="w-32 flex-shrink-0">
                  <div className="w-32 h-32 rounded-2xl mb-2 relative overflow-hidden border border-zinc-700 group transition-all duration-300 hover:-translate-y-1">
                    <img
                      src="/assets/kesariya.jpg"
                      alt="Kesariya"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-2 left-2 right-10 z-10">
                      <div className="text-xs font-bold truncate text-white">
                        Kesariya
                      </div>
                      <div className="text-[10px] truncate text-white/80">
                        Pritam
                      </div>
                    </div>
                    <button className="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-white text-black flex items-center justify-center text-[10px] shadow-lg z-10">
                      <svg
                        className="w-4 h-4 text-black fill-current ml-0.5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                  <div
                    className={`text-xs font-bold truncate px-1 ${isLightMode ? "text-zinc-800" : "text-zinc-100"}`}
                  >
                    Kesariya
                  </div>
                  <div
                    className={`text-[10px] truncate px-1 ${isLightMode ? "text-zinc-500" : "text-gaanaTextGray"}`}
                  >
                    Pritam
                  </div>
                </div>

                <div className="w-32 flex-shrink-0">
                  <div className="w-32 h-32 rounded-2xl mb-2 relative overflow-hidden border border-zinc-700 group transition-all duration-300 hover:-translate-y-1">
                    <img
                      src="/assets/heeriye.jpg"
                      alt="Heeriye"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-2 left-2 right-10 z-10">
                      <div className="text-xs font-bold truncate text-white">
                        Heeriye
                      </div>
                      <div className="text-[10px] truncate text-white/80">
                        Jasleen Royal
                      </div>
                    </div>
                    <button className="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-white text-black flex items-center justify-center text-[10px] shadow-lg z-10">
                      <svg
                        className="w-4 h-4 text-black fill-current ml-0.5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                  <div
                    className={`text-xs font-bold truncate px-1 ${isLightMode ? "text-zinc-800" : "text-zinc-100"}`}
                  >
                    Heeriye
                  </div>
                  <div
                    className={`text-[10px] truncate px-1 ${isLightMode ? "text-zinc-500" : "text-gaanaTextGray"}`}
                  >
                    Jasleen Royal
                  </div>
                </div>
              </div>
            </section>

            <nav
              className={`absolute bottom-0 left-0 right-0 h-20 ${
                isLightMode
                  ? "bg-zinc-100/95 border-zinc-200 text-zinc-800"
                  : "bg-zinc-900/95 border-zinc-800 text-white"
              } backdrop-blur-md border-t flex justify-around items-center px-6 z-20 transition-colors duration-300`}
            >
              <div className="flex flex-col items-center gap-1 text-gaanaRed cursor-pointer">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
                <span className="text-[10px] font-bold">Home</span>
              </div>
              <div
                className={`flex flex-col items-center gap-1 cursor-default ${isLightMode ? "text-zinc-400" : "text-gaanaTextGray"}`}
              >
                <svg
                  className="w-5 h-5 fill-none stroke-current"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
                <span className="text-[10px]">Search</span>
              </div>
              <div
                className={`flex flex-col items-center gap-1 cursor-default ${isLightMode ? "text-zinc-400" : "text-gaanaTextGray"}`}
              >
                <svg
                  className="w-5 h-5 fill-none stroke-current"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" />
                </svg>
                <span className="text-[10px]">Premium</span>
              </div>
            </nav>
          </div>
        )}

        {showOnboarding && (
          <div
            onClick={closeOnboarding}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm z-40 flex flex-col justify-end"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className={`rounded-t-[40px] p-6 text-center border-t max-h-[85%] overflow-y-auto ${
                isOnboardingClosing ? "animate-slide-down" : "animate-slide-up"
              } flex flex-col items-center shadow-2xl ${
                isLightMode
                  ? "bg-zinc-50 border-zinc-200"
                  : "bg-zinc-950 border-zinc-800/80"
              }`}
            >
              <div
                className={`w-12 h-1.5 rounded-full mb-6 ${isLightMode ? "bg-zinc-300" : "bg-zinc-800"}`}
              />

              <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-gaanaRed to-indigo-600 p-0.5 flex items-center justify-center shadow-neon-red mb-6 relative">
                <div className="w-full h-full bg-zinc-900 rounded-full flex items-center justify-center text-5xl">
                  <img
                    src="/assets/jugalbandi.png"
                    alt=""
                    className="w-20 h-20 ml-6 mt-6 object-cover absolute inset-0 error-fallback-hidden"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>
              </div>

              <h2
                className={`text-xl font-black tracking-tight px-4 leading-snug ${isLightMode ? "text-zinc-900" : "text-white"}`}
              >
                Introducing Jugalbandi:
                <br />
                Create musical duets
              </h2>

              <div
                className={`w-full border-t my-5 ${isLightMode ? "border-zinc-200" : "border-zinc-900"}`}
              />

              <div className="w-full space-y-4 px-3 text-left">
                <div className="flex items-start gap-3.5">
                  <div className="w-2 h-2 rounded-full bg-gaanaRed mt-1.5 flex-shrink-0 shadow-[0_0_6px_#E51A24]" />
                  <div>
                    <h4
                      className={`text-sm font-bold ${isLightMode ? "text-zinc-800" : "text-zinc-100"}`}
                    >
                      Musical duets with infinite magic.
                    </h4>
                    <p
                      className={`text-xs mt-0.5 ${isLightMode ? "text-zinc-500" : "text-gaanaTextGray"}`}
                    >
                      Slide to create your perfect language mix now!
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3.5">
                  <div className="w-2 h-2 rounded-full bg-gaanaRed mt-1.5 flex-shrink-0 shadow-[0_0_6px_#E51A24]" />
                  <div>
                    <h4
                      className={`text-sm font-bold ${isLightMode ? "text-zinc-800" : "text-zinc-100"}`}
                    >
                      Tap to mix your perfect playlist
                    </h4>
                    <p
                      className={`text-xs mt-0.5 ${isLightMode ? "text-zinc-500" : "text-gaanaTextGray"}`}
                    >
                      with two languages & one flawless vibe
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setShowOnboarding(false);
                  setScreen("mix-setup");
                }}
                className="w-full bg-gaanaRed hover:bg-red-600 text-white font-bold py-4 px-6 rounded-full mt-8 transition-all hover:shadow-neon-red active:scale-95 tracking-wide text-sm"
              >
                Get Started
              </button>
            </div>
          </div>
        )}

        {screen === "mix-setup" && (
          <div className="flex-1 flex flex-col bg-gaanaDark overflow-y-auto p-5 pb-8">
            <header className="flex items-center gap-3 pt-3 mb-6">
              <button
                onClick={() => setScreen("home")}
                className="text-2xl text-white font-bold p-1 hover:text-gaanaRed transition-colors"
              >
                ←
              </button>
              <span className="text-lg font-black text-gaanaRed tracking-wide">
                Jugalbandi
              </span>
            </header>

            <h2 className="text-xl font-bold tracking-tight text-white">
              Select Your Duo
            </h2>
            <p className="text-xs text-gaanaRed font-medium mt-1 mb-5">
              Choose any 2 music languages from your onboarding preferences.
            </p>

            <div className="grid grid-cols-2 gap-3.5 mb-6">
              {Object.keys(songDatabase).map((lang) => {
                const isSelected = selectedLangs.includes(lang);
                return (
                  <div
                    key={lang}
                    onClick={() => handleLanguageToggle(lang)}
                    className={`bg-gaanaCardDark rounded-2xl p-4 flex flex-col items-center justify-center relative cursor-pointer border-2 transition-all duration-300 hover:-translate-y-0.5 ${
                      isSelected
                        ? "border-gaanaRed shadow-3d-pop"
                        : "border-zinc-900"
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute top-2.5 right-2.5 w-4 h-4 rounded-full bg-gaanaRed flex items-center justify-center text-[9px] text-white font-bold shadow-md">
                        ✓
                      </div>
                    )}
                    <span className="text-2xl font-bold text-zinc-100 mb-1">
                      {languageCharacters[lang]}
                    </span>
                    <span className="text-[11px] text-gaanaTextGray font-semibold tracking-wide">
                      {lang}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="bg-gaanaCardDark rounded-2xl p-4 border border-zinc-800/40 mb-5 shadow-inner">
              <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-4">
                Set Your Jugalbandi
              </h3>

              {selectedLangs.length === 2 ? (
                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between items-center text-xs font-bold mb-2">
                      <span className="text-zinc-200">{selectedLangs[0]}</span>
                      <span className="text-gaanaRed">{sliderVal}%</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="90"
                      step="10"
                      value={sliderVal}
                      onChange={(e) => setSliderVal(Number(e.target.value))}
                      className="w-full accent-gaanaRed bg-zinc-800 h-1.5 rounded-lg cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center text-xs font-bold mb-2">
                      <span className="text-zinc-200">{selectedLangs[1]}</span>
                      <span className="text-gaanaRed">{100 - sliderVal}%</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="90"
                      step="10"
                      value={100 - sliderVal}
                      onChange={(e) =>
                        setSliderVal(100 - Number(e.target.value))
                      }
                      className="w-full accent-gaanaRed bg-zinc-800 h-1.5 rounded-lg cursor-pointer"
                    />
                  </div>
                </div>
              ) : (
                <p className="text-xs text-gaanaTextGray py-2 text-center">
                  Please select exactly 2 languages to configure ratios.
                </p>
              )}
            </div>

            <div className="bg-slate-950/50 border border-slate-900 rounded-xl p-3.5 flex gap-3 items-start mb-6">
              <span className="text-sm">ℹ️</span>
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                Discover your music feed in the specified ratio. To proceed, tap
                on apply mix.
              </p>
            </div>

            <div className="mt-auto space-y-3">
              <button
                onClick={generateRecommendations}
                disabled={selectedLangs.length !== 2}
                className="w-full bg-gaanaRed hover:bg-red-600 disabled:opacity-30 text-white font-bold py-4 rounded-full transition-all hover:shadow-neon-red active:scale-95 text-sm tracking-wide"
              >
                Apply Mix
              </button>
              <button
                onClick={() => setScreen("home")}
                className="w-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 font-bold py-3.5 rounded-full text-sm transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {screen === "loading" && (
          <div className="flex-1 bg-gaanaDark flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
            <div className="absolute w-72 h-72 rounded-full bg-gaanaRed/10 -top-10 -left-10 filter blur-3xl animate-float-mesh-1" />
            <div className="absolute w-72 h-72 rounded-full bg-indigo-600/10 -bottom-10 -right-10 filter blur-3xl animate-float-mesh-2" />

            <div className="relative w-44 h-44 flex items-center justify-center mb-8 z-10">
              <div className="absolute inset-0 border-2 border-dashed border-gaanaRed/60 rounded-full animate-rotate-matrix" />
              <div className="absolute w-36 h-36 border border-indigo-500/40 rounded-full animate-pulse-neon" />
              <div className="absolute w-26 h-26 bg-gradient-to-br from-gaanaRed/30 via-zinc-900 to-indigo-900/30 rounded-full flex items-center justify-center shadow-2xl">
                <svg
                  className="w-10 h-10 text-gaanaRed animate-pulse fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l2.79-2.79C10.09 18.64 11.03 18 12 18c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z" />
                </svg>
              </div>
            </div>
            <p className="text-sm font-medium tracking-wide text-zinc-200 px-6 leading-relaxed z-10 max-w-sm">
              Curating recommendations according to your Dual Language taste...
            </p>
          </div>
        )}

        {screen === "playlist" && (
          <div
            className={`flex-1 flex flex-col ${isLightMode ? "bg-white" : "bg-gaanaDark"} overflow-hidden relative h-full transition-colors duration-300`}
          >
            <header
              className={`flex items-center justify-between p-5 pt-6 border-b ${
                isLightMode ? "border-zinc-200" : "border-zinc-900"
              } flex-shrink-0`}
            >
              <button
                onClick={() => setScreen("mix-setup")}
                className={`text-2xl font-bold hover:text-gaanaRed transition-colors ${
                  isLightMode ? "text-zinc-800" : "text-white"
                }`}
              >
                ←
              </button>
              <span
                className={`text-sm font-bold tracking-tight ${
                  isLightMode ? "text-zinc-800" : "text-white"
                }`}
              >
                Gaana
              </span>
              <svg
                className={`w-5 h-5 ${isLightMode ? "text-zinc-600" : "text-zinc-300"}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </header>

            <div className="flex-1 overflow-y-auto pb-24 p-5">
              <div
                className={`rounded-2xl p-4 border mb-6 shadow-md transition-colors ${
                  isLightMode
                    ? "bg-zinc-50 border-zinc-200"
                    : "bg-gaanaCardDark border-zinc-800/60"
                }`}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-gaanaRed/10 border border-gaanaRed/40 text-gaanaRed text-[10px] font-black tracking-wider px-2.5 py-0.5 rounded-full uppercase shadow-sm">
                    ● Jugalbandi Is Set
                  </span>
                  <button
                    onClick={() => setScreen("mix-setup")}
                    className={`text-xs font-semibold hover:text-white transition-colors ${
                      isLightMode
                        ? "text-zinc-500 hover:text-zinc-800"
                        : "text-gaanaTextGray"
                    }`}
                  >
                    ✏️ Edit
                  </button>
                </div>
                <p
                  className={`text-xs mb-4 ${isLightMode ? "text-zinc-700" : "text-zinc-300"}`}
                >
                  Play to start{" "}
                  <span
                    className={`font-bold ${isLightMode ? "text-zinc-900" : "text-white"}`}
                  >
                    vibing
                  </span>{" "}
                  — your mix is ready.
                </p>

                <div
                  className={`flex justify-between items-center text-xs font-bold mb-2.5 ${
                    isLightMode ? "text-zinc-800" : "text-zinc-200"
                  }`}
                >
                  <div className="flex flex-col">
                    <span
                      className={`text-[10px] font-semibold mb-0.5 ${isLightMode ? "text-zinc-500" : "text-gaanaTextGray"}`}
                    >
                      {languageCharacters[selectedLangs[0]]} {selectedLangs[0]}
                    </span>
                    <span className="text-base font-black text-gaanaRed">
                      {sliderVal}%
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span
                      className={`text-[10px] font-semibold mb-0.5 ${isLightMode ? "text-zinc-500" : "text-gaanaTextGray"}`}
                    >
                      {languageCharacters[selectedLangs[1]]} {selectedLangs[1]}
                    </span>
                    <span
                      className={`text-base font-black ${isLightMode ? "text-zinc-400" : "text-zinc-400"}`}
                    >
                      {100 - sliderVal}%
                    </span>
                  </div>
                </div>

                <div
                  className={`w-full h-2 rounded-full overflow-hidden flex shadow-inner ${
                    isLightMode ? "bg-zinc-200" : "bg-zinc-800"
                  }`}
                >
                  <div
                    className="bg-gaanaRed h-full transition-all duration-500"
                    style={{ width: `${sliderVal}%` }}
                  />
                  <div
                    className="bg-zinc-600 h-full transition-all duration-500"
                    style={{ width: `${100 - sliderVal}%` }}
                  />
                </div>
              </div>

              <div className="flex justify-between items-center mb-5">
                <div>
                  <h2
                    className={`text-xl font-black tracking-tight ${isLightMode ? "text-zinc-900" : "text-white"}`}
                  >
                    {generatedPlaylist.length} Songs • {totalMinutesCalculated}{" "}
                    Mins
                  </h2>
                  <p className="text-xs text-gaanaRed font-bold mt-0.5 animate-pulse">
                    Your Auto playlist is curated!
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsShuffle(!isShuffle)}
                    className={`w-10 h-10 rounded-full border flex items-center justify-center shadow-md transition-transform active:scale-95 ${
                      isShuffle
                        ? "bg-gaanaRed/20 border-gaanaRed text-gaanaRed"
                        : isLightMode
                          ? "bg-zinc-100 border-zinc-300 text-zinc-700"
                          : "bg-zinc-800 border-zinc-700/60 text-zinc-200"
                    }`}
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => {
                      if (!currentSong && generatedPlaylist.length > 0) {
                        setCurrentSong(generatedPlaylist[0]);
                        setCurrentTime(0);
                        setIsPlaying(true);
                      } else {
                        setIsPlaying(!isPlaying);
                      }
                    }}
                    className="w-12 h-12 rounded-full bg-gaanaRed flex items-center justify-center text-white shadow-xl shadow-gaanaRed/20 transition-all active:scale-90"
                  >
                    {isPlaying ? (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                      </svg>
                    ) : (
                      <svg
                        className="w-4 h-4 fill-current ml-0.5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                {generatedPlaylist.map((song, idx) => {
                  const isCurrent =
                    currentSong && currentSong.title === song.title;
                  return (
                    <div
                      key={idx}
                      onClick={() => {
                        setCurrentSong(song);
                        setCurrentTime(0);
                        setIsPlaying(true);
                      }}
                      className={`flex items-center justify-between p-2 rounded-xl cursor-pointer transition-all border ${
                        isCurrent
                          ? isLightMode
                            ? "bg-zinc-100 border-zinc-300/80 shadow-sm"
                            : "bg-zinc-900 border-zinc-800/80 shadow-md"
                          : "border-transparent hover:bg-zinc-500/10"
                      }`}
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div
                          className={`w-11 h-11 rounded-xl flex-shrink-0 overflow-hidden border relative flex items-center justify-center ${
                            isLightMode
                              ? "bg-zinc-200 border-zinc-300"
                              : "bg-zinc-800 border-zinc-700/50"
                          }`}
                        >
                          <img
                            src={song.cover}
                            alt=""
                            className="w-full h-full object-cover absolute inset-0 error-fallback-hidden"
                            onError={(e) => {
                              e.target.style.display = "none";
                            }}
                          />
                          <span
                            className={`relative z-10 font-bold text-xs ${
                              isCurrent
                                ? "text-gaanaRed"
                                : isLightMode
                                  ? "text-zinc-600"
                                  : "text-zinc-400"
                            }`}
                          >
                            {song.lang.substring(0, 2)}
                          </span>
                        </div>
                        <div className="min-w-0">
                          <h4
                            className={`text-sm font-bold truncate ${
                              isCurrent
                                ? "text-gaanaRed"
                                : isLightMode
                                  ? "text-zinc-900"
                                  : "text-zinc-100"
                            }`}
                          >
                            {song.title}
                          </h4>
                          <p
                            className={`text-xs truncate mt-0.5 ${
                              isLightMode
                                ? "text-zinc-500"
                                : "text-gaanaTextGray"
                            }`}
                          >
                            {song.artist} •{" "}
                            <span className="text-zinc-500 font-semibold text-[10px]">
                              {song.lang}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-zinc-500 font-medium">
                          {formatTime(song.duration)}
                        </span>
                        <span className="text-zinc-500 text-sm font-black px-1">
                          ⋮
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              onClick={() => {
                if (currentSong) setIsPlayerExpanded(true);
              }}
              className={`absolute bottom-3 left-3 right-3 h-16 border backdrop-blur-md rounded-2xl flex flex-col justify-between p-1.5 shadow-2xl z-30 transition-all duration-300 ${
                isLightMode
                  ? "bg-zinc-100/95 border-zinc-300"
                  : "bg-zinc-900/95 border-zinc-800/80"
              } ${currentSong ? "cursor-pointer hover:opacity-95 active:scale-[0.99]" : "opacity-60 cursor-default"}`}
            >
              <div className="flex items-center justify-between px-2.5 mt-1">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 bg-gradient-to-br from-gaanaRed to-red-900 rounded-xl flex-shrink-0 overflow-hidden relative flex items-center justify-center text-sm font-bold shadow-md">
                    {currentSong ? (
                      <>
                        <img
                          src={currentSong.cover}
                          alt=""
                          className="w-full h-full object-cover absolute inset-0 error-fallback-hidden"
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                        <span className="relative z-10 text-white">
                          {currentSong.lang.substring(0, 2)}
                        </span>
                      </>
                    ) : (
                      <span className="text-white">🎛️</span>
                    )}
                  </div>
                  <div className="min-w-0">
                    <h5
                      className={`text-xs font-bold truncate ${isLightMode ? "text-zinc-900" : "text-white"}`}
                    >
                      {currentSong ? currentSong.title : "Select a song"}
                    </h5>
                    <p
                      className={`text-[10px] truncate mt-0.5 ${isLightMode ? "text-zinc-500" : "text-gaanaTextGray"}`}
                    >
                      {currentSong ? currentSong.artist : "Jugalbandi ready"}
                    </p>
                  </div>
                </div>
                <div
                  className="flex items-center gap-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={handlePrevSong}
                    disabled={!currentSong}
                    className={`${isLightMode ? "bg-zinc-200 text-zinc-800" : "bg-zinc-800 text-white"} w-8 h-8 rounded-full flex items-center justify-center disabled:opacity-30`}
                  >
                    <svg
                      className="w-3.5 h-3.5 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 19V5h2v14H6zm4.5-7L18 5v14l-7.5-7z" />
                    </svg>
                  </button>

                  <button
                    onClick={() => {
                      if (!currentSong && generatedPlaylist.length > 0) {
                        setCurrentSong(generatedPlaylist[0]);
                        setCurrentTime(0);
                        setIsPlaying(true);
                      } else {
                        setIsPlaying(!isPlaying);
                      }
                    }}
                    className={`${isLightMode ? "bg-zinc-200 text-zinc-800" : "bg-zinc-800 text-white"} w-8 h-8 rounded-full flex items-center justify-center disabled:opacity-30`}
                  >
                    {isPlaying ? (
                      <svg
                        className="w-3.5 h-3.5 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                      </svg>
                    ) : (
                      <svg
                        className="w-3.5 h-3.5 fill-current ml-0.5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </button>

                  <button
                    onClick={handleNextSong}
                    disabled={!currentSong}
                    className={`${isLightMode ? "bg-zinc-200 text-zinc-800" : "bg-zinc-800 text-white"} w-8 h-8 rounded-full flex items-center justify-center disabled:opacity-30`}
                  >
                    <svg
                      className="w-3.5 h-3.5 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16 6h2v12h-2zm-10 12l8.5-6L6 6z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div
                className={`w-full h-0.5 rounded-full overflow-hidden px-1 ${isLightMode ? "bg-zinc-300" : "bg-zinc-800"}`}
              >
                <div
                  className="bg-gaanaRed h-full transition-all duration-300"
                  style={{
                    width: currentSong
                      ? `${(currentTime / currentSong.duration) * 100}%`
                      : "0%",
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {isPlayerExpanded && currentSong && (
          <div
            className={`absolute inset-0 z-50 ${
              isLightMode ? "glass-panel-light" : "glass-panel-dark"
            } animate-slide-up flex flex-col justify-between p-6 overflow-hidden`}
          >
            <div className="absolute w-[350px] h-[350px] bg-gaanaRed/20 -top-20 -left-10 rounded-full filter blur-[50px] animate-float-mesh-1 pointer-events-none" />
            <div className="absolute w-[350px] h-[350px] bg-indigo-600/10 -bottom-20 -right-10 rounded-full filter blur-[50px] animate-float-mesh-2 pointer-events-none" />

            <header className="flex justify-between items-center z-10 relative mt-4">
              <div className="text-center w-full">
                <p
                  className={`text-[10px] uppercase font-black tracking-widest ${isLightMode ? "text-zinc-500" : "text-zinc-400"}`}
                >
                  Playing from Jugalbandi Mix
                </p>
                <p
                  className={`text-xs font-bold mt-0.5 ${isLightMode ? "text-zinc-800" : "text-zinc-200"}`}
                >
                  {currentSong.lang} Focus Duo
                </p>
              </div>
              <button
                onClick={() => setIsPlayerExpanded(false)}
                className={`absolute right-0 p-2 transition-colors rounded-full border shadow-lg ${
                  isLightMode
                    ? "text-zinc-700 bg-black/5 border-black/10"
                    : "text-zinc-300 bg-white/5 border-white/10"
                }`}
              >
                <svg
                  className="w-4 h-4 fill-none stroke-current"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </header>

            <div className="flex-1 flex flex-col items-center justify-center my-8 z-10 relative">
              <div
                className={`w-[280px] h-[280px] rounded-[32px] overflow-hidden relative group border shadow-3d-pop ${
                  isLightMode
                    ? "bg-zinc-200 border-black/10"
                    : "bg-gradient-to-br from-zinc-800 to-zinc-950 border-white/10"
                }`}
              >
                <img
                  src={currentSong.cover}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover error-fallback-hidden"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="inline-flex items-center bg-black/45 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-white border border-white/10 shadow-sm">
                    {currentSong.lang}
                  </span>
                </div>
              </div>

              <div className="w-full mt-8 text-center px-2">
                <h1
                  className={`text-2xl font-black tracking-tight ${isLightMode ? "text-zinc-900" : "text-white"}`}
                >
                  {currentSong.title}
                </h1>
                <p
                  className={`mt-1.5 text-sm ${isLightMode ? "text-zinc-600" : "text-gaanaTextGray"}`}
                >
                  {currentSong.artist}
                </p>
              </div>

              <div className="w-full mt-8">
                <div
                  className={`w-full h-1.5 rounded-full overflow-hidden ${
                    isLightMode ? "bg-zinc-200" : "bg-zinc-800"
                  }`}
                  onClick={handleScrub}
                >
                  <div
                    className="h-full bg-gaanaRed rounded-full"
                    style={{
                      width: currentSong
                        ? `${(currentTime / currentSong.duration) * 100}%`
                        : "0%",
                    }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-[10px] font-medium text-zinc-500">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(currentSong.duration)}</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-5 mt-8">
                <button
                  onClick={() => setIsLoop(!isLoop)}
                  className={`transition-colors ${
                    isLoop
                      ? "text-gaanaRed drop-shadow-[0_0_5px_#E51A24]"
                      : isLightMode
                        ? "text-zinc-500 hover:text-zinc-800"
                        : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.7 7.3a6 6 0 00-8.48 0L8 8.52V7H6v6h6v-2H8.41l1.22-1.22A4 4 0 1116 12h2a6 6 0 00-.3-4.7zM6.3 16.7a6 6 0 008.48 0L16 15.48V17h2v-6h-6v2h3.59l-1.22 1.22A4 4 0 016 12H4a6 6 0 002.3 4.7z" />
                  </svg>
                </button>

                <button
                  onClick={handlePrevSong}
                  className={`${isLightMode ? "bg-zinc-200 text-zinc-800" : "bg-zinc-800 text-white"} w-8 h-8 rounded-full flex items-center justify-center transition-colors shadow-sm`}
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M6 19V5h2v14H6zm4.5-7L18 5v14l-7.5-7z" />
                  </svg>
                </button>

                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 rounded-full bg-gaanaRed flex items-center justify-center text-white shadow-xl shadow-gaanaRed/20 transition-all active:scale-90"
                >
                  {isPlaying ? (
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 fill-current ml-0.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>

                <button
                  onClick={handleNextSong}
                  className={`${isLightMode ? "bg-zinc-200 text-zinc-800" : "bg-zinc-800 text-white"} w-8 h-8 rounded-full flex items-center justify-center transition-colors shadow-sm`}
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M16 6h2v12h-2zm-10 12l8.5-6L6 6z" />
                  </svg>
                </button>

                <button
                  onClick={() => setIsShuffle(!isShuffle)}
                  className={`transition-colors ${
                    isShuffle
                      ? "text-gaanaRed drop-shadow-[0_0_5px_#E51A24]"
                      : isLightMode
                        ? "text-zinc-500 hover:text-zinc-800"
                        : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z" />
                  </svg>
                </button>
              </div>
            </div>

            <footer
              className={`flex justify-between text-xs px-4 mb-4 z-10 relative ${
                isLightMode ? "text-zinc-500" : "text-zinc-400"
              }`}
            >
              <svg
                className="w-5 h-5 opacity-60"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13zM12 18.5v-13"
                />
              </svg>
              <svg
                className="w-5 h-5 opacity-60"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z"
                />
              </svg>
            </footer>
          </div>
        )}
      </div>
    </div>
  );
}

function makePercentSafe(val) {
  if (isNaN(val) || val < 0.5) return 0.5;
  return val;
}

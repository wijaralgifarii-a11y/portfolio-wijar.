import { useState, useEffect } from 'react'

import {
  ChevronLeft,
  ChevronRight,
  Home,
  Mail,
} from 'lucide-react'

const slides = [
  {
    title: 'Introduction',
    subtitle: 'Welcome to My Portfolio',
    type: 'cover',
  },
  {
    title: 'About Me',
    subtitle: 'Get to know me',
    type: 'about',
  },
  {
    title: 'My Skills',
    subtitle: 'What I can do',
    type: 'skills',
  },
  {
    title: '',
    subtitle: '',
    type: 'projects',
  },
  {
    type: 'gallery',
  },
  {
    title: '',
    subtitle: '',
    type: 'videos',
  },
  {
  title: 'Organizations & Activities',
  subtitle: 'My Organizational Journey',
  type: 'activities',
 },
  {
    title: 'Contact Me',
    subtitle: "Let's connect",
    type: 'contact',
  },
]


function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [activityFilter, setActivityFilter] = useState('all')
  const videos = [
  {
    title: 'Video cinematic 17 agustus desa kebuyutan',
    src: '/video/activity.mp4',
  },
  {
    title: 'Video Kegiatan pmm batch 4',
    src: '/video/tapis%20berseri%20pmm%204.mov',
  },
  {
    title: 'Video animasi 3D pixar AI',
    src: 'public/video/animasi ai.mov',
  },
  {
    title: 'video animasi 3D pixar ai',
    src: 'public/video/video animasi 3D pixar.mp4',
  },
  {
    title: 'KALEIDOSKOP PMM 4 UTI',
    src: '/public/video/KALEIDOSKOP PMM 4 UTI.mov',
  },
  {
    title: 'berita',
    src: 'public/video/berita.mp4',
  },
   {
    title: 'video/presentasi alat deyeksi kebocoran gas berbasis IoT',
    src: 'public/video/presentasi alat deyeksi kebocoran gas.mp4',
  },
   {
    title: 'Video profil sekolah berbasis ai',
    src: 'public/video/video profil sekolah.mp4',
  },
   {
    title: 'promosi parfume',
    src: 'public/video/parfume.mp4',
  },
]
  const nextSlide = () => {
    setCurrentSlide((prev) =>
      Math.min(prev + 1, slides.length - 1)
    )
  }

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      Math.max(prev - 1, 0)
    )
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') nextSlide()
      if (event.key === 'ArrowLeft') prevSlide()
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const slide = slides[currentSlide]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 text-slate-800 p-4 md:p-8">
      {/* HEADER */}
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-xl font-bold">
          MY PORTFOLIO.
        </h1>

        <span className="text-sm text-slate-400">
          PRESENTATION MODE
        </span>
      </header>

      {/* SLIDE */}
      <section className="max-w-6xl mx-auto min-h-[65vh]
       bg-white/90 backdrop-blur-sm
      rounded-[2rem] p-8 md:p-16
      flex flex-col justify-center
      border border-white
      shadow-xl shadow-blue-100/50
      transition-all duration-500">

        <div key={currentSlide} className="animate-fade-up"></div>
        {slide.type !== 'cover' && (
  <>
    <p className="text-blue-500 uppercase tracking-widest
      text-sm font-semibold mb-4">
      {slide.subtitle}
    </p>

    <h2 className="text-4xl md:text-6xl font-bold mb-8 text-slate-800">
      {slide.title}
    </h2>
  </>
)}

       
{slide.type === 'cover' && (
  <div className="grid md:grid-cols-2 items-center gap-10 md:gap-14">

    {/* BAGIAN KIRI: PERKENALAN */}
    <div className="animate-fade-up">

      <span className="inline-flex items-center gap-2
        bg-blue-50 text-blue-600 px-4 py-2
        rounded-full text-sm font-semibold mb-6">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        Welcome to my personal space
      </span>

      <p className="text-slate-500 font-medium text-lg mb-2">
        Hello, I'm
      </p>

      <h1 className="text-5xl md:text-6xl lg:text-7xl
        font-extrabold tracking-tight leading-tight text-slate-800">
        Wijar
        <span className="block bg-gradient-to-r from-blue-500
          via-violet-500 to-purple-500 bg-clip-text text-transparent">
          Algifari.
        </span>
      </h1>

      <h2 className="text-xl md:text-2xl font-semibold
        text-slate-600 mt-5">
        Creative Mind & Web Developer
      </h2>

      <p className="text-slate-500 leading-relaxed mt-5 max-w-lg">
        Selamat datang di portfolio pribadi saya.
        Saya tertarik dengan teknologi, pengembangan website,
        dan kreativitas digital. Di sini kamu bisa mengenal
        perjalanan, kemampuan, serta karya yang telah saya buat.
      </p>

      {/* TOMBOL */}
      <div className="flex flex-wrap gap-4 mt-8">

        <button
          onClick={() => setCurrentSlide(1)}
          className="px-7 py-3 rounded-full text-white font-semibold
          bg-gradient-to-r from-blue-500 to-violet-500
          shadow-lg shadow-blue-200
          hover:scale-105 hover:shadow-xl
          active:scale-95 transition-all duration-300"
        >
          Explore My Portfolio →
        </button>

        <button
          onClick={() => setCurrentSlide(slides.length - 1)}
          className="px-7 py-3 rounded-full font-semibold
          text-slate-700 bg-slate-100
          hover:bg-slate-200 hover:scale-105
          transition-all duration-300"
        >
          Contact Me
        </button>

      </div>

      <p className="text-sm text-slate-400 mt-8">
        Discover my skills · Projects · Experiences
      </p>

    </div>

    {/* BAGIAN KANAN: FOTO PROFIL */}
    <div className="relative flex justify-center items-center py-8">

      {/* LINGKARAN DEKORASI */}
      <div className="absolute w-64 h-64 md:w-80 md:h-80
        rounded-full bg-gradient-to-br from-blue-200
        via-violet-200 to-purple-100 blur-2xl opacity-70" />

      <div className="absolute w-64 h-64 md:w-80 md:h-80
        rounded-full border border-blue-200" />

      {/* FOTO */}
      <div className="relative z-10 animate-float
        p-2 rounded-[2rem]
        bg-gradient-to-br from-blue-400 via-violet-400 to-purple-400
        shadow-2xl shadow-blue-200">

        <img
          src="/images/photowijar.jpeg"
          alt="Wijar Algifari"
          className="w-64 h-72 md:w-80 md:h-96
          object-cover rounded-[1.7rem]"
        />

      </div>

      {/* LABEL DEKORATIF */}
      <div className="absolute z-20 bottom-5 left-0 md:left-2
        bg-white rounded-2xl shadow-xl p-4
        border border-slate-100 animate-fade-up">

        <p className="text-xs text-slate-400">
          PERSONAL PORTFOLIO
        </p>

        <p className="font-bold text-slate-800">
          Wijar Algifari
        </p>

      </div>

      <div className="absolute top-5 right-5
        w-12 h-12 rounded-2xl bg-purple-100
        flex items-center justify-center text-2xl
        animate-float">
        ✦
      </div>

    </div>

  </div>
)}

{slide.type === 'about' && (
  <div className="space-y-8">

    {/* SUMMARY */}
    <div className="relative overflow-hidden rounded-3xl
      bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600
      p-6 md:p-8 text-white shadow-xl shadow-blue-200
      animate-fade-up">

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-8 h-[2px] bg-blue-200"></span>
          <p className="text-blue-100 text-xs font-bold uppercase tracking-[0.2em]">
            About Me
          </p>
        </div>

        <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
          Professional Summary
        </h3>

        <p className="text-sm md:text-base text-blue-50 leading-7 max-w-5xl">
          Sarjana Ilmu Komputer dengan pengalaman di bidang content creation,
          videography, video editing, visual design, dan content publishing
          melalui KKM, Program Pertukaran Mahasiswa Merdeka, serta Media Bisnis
          Banten. Terampil menggunakan CapCut dan Canva untuk produksi konten
          visual. Memiliki pengalaman pengembangan aplikasi web dan mobile
          serta Kerja Praktik di bidang Purchasing dengan kemampuan
          administrasi, pengelolaan data, dokumentasi, dan Microsoft Office,
          serta pengalaman dalam unloading dan distribusi. Memiliki kemampuan
          analisis, problem solving, komunikasi, dan adaptasi yang baik.
        </p>
      </div>

      {/* DECORATION */}
      <div className="absolute -right-16 -top-16 w-56 h-56
        rounded-full bg-white/10"></div>
      <div className="absolute -right-5 -bottom-24 w-48 h-48
        rounded-full bg-white/10"></div>
    </div>
    {/* EDUCATION */}
    <div className="bg-gradient-to-br from-indigo-50 via-white to-blue-50
      rounded-3xl p-6 md:p-7 border border-indigo-100
      shadow-sm hover:shadow-lg transition-all duration-300
      animate-fade-up">

      <div className="flex items-center gap-4 mb-5">
        <div className="w-14 h-14 rounded-2xl
          bg-gradient-to-br from-indigo-500 to-blue-600
          flex items-center justify-center text-white text-2xl
          shadow-lg shadow-indigo-200">
          🎓
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-500">
            Academic Background
          </p>
          <h3 className="text-2xl font-extrabold text-slate-800">
            Education
          </h3>
        </div>
      </div>

      <div className="flex flex-col md:flex-row
        md:items-center md:justify-between gap-4">

        <div>
          <h4 className="text-lg font-extrabold text-slate-800">
            Universitas Bina Bangsa
          </h4>

          <p className="text-sm font-semibold text-indigo-600 mt-1">
            S1 – Ilmu Komputer
          </p>

          <p className="text-sm text-slate-500 mt-2">
            Bachelor of Computer Science
          </p>
        </div>

        <div className="flex items-center gap-3
          bg-white rounded-2xl border border-indigo-100
          px-5 py-4 shadow-sm w-fit">

          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              GPA / IPK
            </p>

            <p className="text-3xl font-extrabold text-indigo-600">
              3.66
            </p>
          </div>

          <div className="w-10 h-10 rounded-full bg-indigo-50
            flex items-center justify-center text-indigo-600 text-xl">
            ★
          </div>
        </div>

      </div>
    </div>
    {/* WORK EXPERIENCE */}
    <div className="space-y-6">

      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-2xl bg-blue-100
          flex items-center justify-center text-blue-600 text-xl">
          💼
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-blue-500">
            Career Journey
          </p>
          <h3 className="text-2xl font-extrabold text-slate-800">
            Work Experience
          </h3>
        </div>
      </div>

      {/* TIMELINE */}
      <div className="relative pl-6 md:pl-8 space-y-6">

        {/* TIMELINE LINE */}
        <div className="absolute left-[7px] md:left-[11px] top-3 bottom-5
          w-[2px] bg-gradient-to-b from-blue-400 via-violet-400 to-emerald-400">
        </div>

        {/* EXPERIENCE 1 */}
        <div className="relative group">

          <div className="absolute -left-6 md:-left-8 top-6
            w-4 h-4 rounded-full bg-blue-500 border-4
            border-blue-100 shadow-md z-10
            group-hover:scale-125 transition-transform">
          </div>

          <div className="bg-white rounded-2xl p-5 md:p-6
            border border-slate-100 shadow-sm
            hover:shadow-lg hover:-translate-y-1
            transition-all duration-300">

            <div className="flex flex-col md:flex-row
              md:items-start md:justify-between gap-3">

              <div>
                <span className="inline-block px-3 py-1 rounded-full
                  bg-blue-50 text-blue-600 text-xs font-bold mb-3">
                  Partime
                </span>

                <h4 className="text-lg font-extrabold text-slate-800">
                  Media Bisnis Banten
                </h4>

                <p className="text-sm font-semibold text-blue-600 mt-1">
                  Media Partner
                </p>
              </div>

              <span className="text-xs font-semibold text-slate-500
                bg-slate-100 px-3 py-2 rounded-lg w-fit">
                Juni 2026 – Sekarang
              </span>
            </div>

            <ul className="mt-5 space-y-3 text-sm text-slate-600">

              {[
                'Mengelola dan memantau alur kerja publikasi berita harian agar berjalan tepat waktu.',
                'Melakukan monitoring informasi dan aktivitas pada feed serta kolom komentar.',
                'Memastikan kelengkapan dan konsistensi informasi sebelum dipublikasikan.',
                'Membuat dan mengelola materi administrasi publikasi seperti data, informasi, dan kebutuhan konten.'
              ].map((item, index) => (
                <li key={index} className="flex gap-3 leading-6">
                  <span className="text-blue-500 font-bold mt-0.5">✦</span>
                  <span>{item}</span>
                </li>
              ))}

            </ul>
          </div>
        </div>

        {/* EXPERIENCE 2 */}
        <div className="relative group">

          <div className="absolute -left-6 md:-left-8 top-6
            w-4 h-4 rounded-full bg-violet-500 border-4
            border-violet-100 shadow-md z-10
            group-hover:scale-125 transition-transform">
          </div>

          <div className="bg-white rounded-2xl p-5 md:p-6
            border border-slate-100 shadow-sm
            hover:shadow-lg hover:-translate-y-1
            transition-all duration-300">

            <div className="flex flex-col md:flex-row
              md:items-start md:justify-between gap-3">

              <div>
                <span className="inline-block px-3 py-1 rounded-full
                  bg-violet-50 text-violet-600 text-xs font-bold mb-3">
                  Internship
                </span>

                <h4 className="text-lg font-extrabold text-slate-800">
                  PT Dekade Prioritas (Multi Group)
                </h4>

                <p className="text-sm font-semibold text-violet-600 mt-1">
                  Purchasing Intern
                </p>
              </div>

              <span className="text-xs font-semibold text-slate-500
                bg-slate-100 px-3 py-2 rounded-lg w-fit">
                Januari – Februari 2026
              </span>
            </div>

            <ul className="mt-5 space-y-3 text-sm text-slate-600">

              {[
                'Membantu administrasi dan pengelolaan dokumen purchasing.',
                'Melakukan input dan pengecekan data terkait kebutuhan purchasing.',
                'Membantu pengelolaan informasi dan dokumentasi pembelian.',
                'Mendukung koordinasi dengan pihak terkait dalam proses administrasi.'
              ].map((item, index) => (
                <li key={index} className="flex gap-3 leading-6">
                  <span className="text-violet-500 font-bold mt-0.5">✦</span>
                  <span>{item}</span>
                </li>
              ))}

            </ul>
          </div>
        </div>

        {/* EXPERIENCE 3 */}
        <div className="relative group">

          <div className="absolute -left-6 md:-left-8 top-6
            w-4 h-4 rounded-full bg-emerald-500 border-4
            border-emerald-100 shadow-md z-10
            group-hover:scale-125 transition-transform">
          </div>

          <div className="bg-white rounded-2xl p-5 md:p-6
            border border-slate-100 shadow-sm
            hover:shadow-lg hover:-translate-y-1
            transition-all duration-300">

            <div className="flex flex-col md:flex-row
              md:items-start md:justify-between gap-3">

              <div>
                <span className="inline-block px-3 py-1 rounded-full
                  bg-emerald-50 text-emerald-600 text-xs font-bold mb-3">
                  Work Experience
                </span>

                <h4 className="text-lg font-extrabold text-slate-800">
                  PT Nippon Indosari Corpindo
                </h4>

                <p className="text-sm font-semibold text-emerald-600 mt-1">
                  Unloading Distribusi
                </p>
              </div>

              <span className="text-xs font-semibold text-slate-500
                bg-slate-100 px-3 py-2 rounded-lg w-fit">
                Maret 2021 – Agustus 2022
              </span>
            </div>

            <ul className="mt-5 space-y-3 text-sm text-slate-600">

              {[
                'Melakukan pencatatan data stok produk secara manual dan digital untuk memastikan akurasi data inventory.',
                'Membuat laporan distribusi harian untuk mendukung operasional gudang dan pengiriman.',
                'Melakukan pengecekan delivery note serta permintaan pelanggan sebelum proses pengiriman.',
                'Melakukan stock opname secara berkala untuk memastikan kesesuaian antara data sistem dan stok fisik.'
              ].map((item, index) => (
                <li key={index} className="flex gap-3 leading-6">
                  <span className="text-emerald-500 font-bold mt-0.5">✦</span>
                  <span>{item}</span>
                </li>
              ))}

            </ul>
          </div>
        </div>

      </div>
    </div>

    {/* CLOSING */}
    <div className="text-center py-4">
      <p className="text-sm text-slate-500">
        Building experience, learning new things, and growing every day.
      </p>
    </div>

  </div>
)}

{slide.type === 'skills' && (
  <div className="space-y-8">

    {/* HEADER */}
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
        <p className="text-blue-500 font-bold uppercase tracking-[0.2em] text-sm">
          What I Can Do
        </p>

        <h3 className="text-3xl md:text-4xl font-extrabold text-slate-800 mt-2">
          My Technical Skills
          <span className="text-blue-500">.</span>
        </h3>

        <p className="text-slate-500 mt-3 max-w-xl">
          A collection of technologies, programming languages, and tools
          that I explore and use to build digital solutions.
        </p>
      </div>

      <div className="flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-3 rounded-2xl w-fit">
        <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
        <span className="text-sm font-semibold text-blue-700">
          Always Learning
        </span>
      </div>
    </div>

    {/* SKILL CATEGORIES */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

      {/* PROGRAMMING */}
      <div className="group relative overflow-hidden rounded-3xl p-6
        bg-gradient-to-br from-orange-50 to-rose-50
        border border-orange-100
        hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-100
        transition-all duration-300">

        <div className="flex items-center gap-4 mb-5">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-rose-500
            flex items-center justify-center text-white text-2xl shadow-lg shadow-orange-200">
            &lt;/&gt;
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-orange-500">
              Category 01
            </p>
            <h4 className="text-xl font-extrabold text-slate-800">
              Programming
            </h4>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {['HTML', 'CSS', 'JavaScript', 'PHP', 'Python'].map((item) => (
            <span key={item}
              className="px-4 py-2 rounded-xl bg-white/80 border border-orange-100
              text-sm font-semibold text-slate-700
              hover:bg-orange-500 hover:text-white hover:border-orange-500
              transition-all duration-200 cursor-default">
              {item}
            </span>
          ))}
        </div>

        <div className="absolute -right-10 -bottom-10 w-32 h-32 rounded-full
          bg-orange-200/30 group-hover:scale-150 transition-transform duration-500" />
      </div>

      {/* FRAMEWORK */}
      <div className="group relative overflow-hidden rounded-3xl p-6
        bg-gradient-to-br from-cyan-50 to-blue-50
        border border-cyan-100
        hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100
        transition-all duration-300">

        <div className="flex items-center gap-4 mb-5">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600
            flex items-center justify-center text-white text-2xl shadow-lg shadow-blue-200">
            ⚡
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-500">
              Category 02
            </p>
            <h4 className="text-xl font-extrabold text-slate-800">
              Framework Programming
            </h4>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {['React.js', 'Laravel', 'Tailwind CSS', 'Express.js', 'Django'].map((item) => (
            <span key={item}
              className="px-4 py-2 rounded-xl bg-white/80 border border-cyan-100
              text-sm font-semibold text-slate-700
              hover:bg-blue-500 hover:text-white hover:border-blue-500
              transition-all duration-200 cursor-default">
              {item}
            </span>
          ))}
        </div>

        <div className="absolute -right-10 -bottom-10 w-32 h-32 rounded-full
          bg-blue-200/30 group-hover:scale-150 transition-transform duration-500" />
      </div>

      {/* DATABASE */}
      <div className="group relative overflow-hidden rounded-3xl p-6
        bg-gradient-to-br from-violet-50 to-purple-50
        border border-purple-100
        hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100
        transition-all duration-300">

        <div className="flex items-center gap-4 mb-5">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600
            flex items-center justify-center text-white text-2xl shadow-lg shadow-purple-200">
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-purple-500">
              Category 03
            </p>
            <h4 className="text-xl font-extrabold text-slate-800">
              Database
            </h4>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {['MySQL'].map((item) => (
            <span key={item}
              className="px-4 py-2 rounded-xl bg-white/80 border border-purple-100
              text-sm font-semibold text-slate-700
              hover:bg-purple-500 hover:text-white hover:border-purple-500
              transition-all duration-200 cursor-default">
              {item}
            </span>
          ))}
        </div>

        <div className="absolute -right-10 -bottom-10 w-32 h-32 rounded-full
          bg-purple-200/30 group-hover:scale-150 transition-transform duration-500" />
      </div>

      {/* IOT */}
      <div className="group relative overflow-hidden rounded-3xl p-6
        bg-gradient-to-br from-emerald-50 to-teal-50
        border border-emerald-100
        hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-100
        transition-all duration-300">

        <div className="flex items-center gap-4 mb-5">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600
            flex items-center justify-center text-white text-2xl shadow-lg shadow-emerald-200">
            ⚙
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">
              Category 04
            </p>
            <h4 className="text-xl font-extrabold text-slate-800">
              Internet of Things
            </h4>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {['Arduino', 'IoT System'].map((item) => (
            <span key={item}
              className="px-4 py-2 rounded-xl bg-white/80 border border-emerald-100
              text-sm font-semibold text-slate-700
              hover:bg-emerald-500 hover:text-white hover:border-emerald-500
              transition-all duration-200 cursor-default">
              {item}
            </span>
          ))}
        </div>

        <div className="absolute -right-10 -bottom-10 w-32 h-32 rounded-full
          bg-emerald-200/30 group-hover:scale-150 transition-transform duration-500" />
      </div>

      {/* OTHER */}
      <div className="group relative overflow-hidden rounded-3xl p-6
        bg-gradient-to-br from-amber-50 to-yellow-50
        border border-amber-100 md:col-span-2
        hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-100
        transition-all duration-300">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500
              flex items-center justify-center text-white text-2xl shadow-lg shadow-amber-200">
              ✦
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-amber-600">
                Category 05
              </p>
              <h4 className="text-xl font-extrabold text-slate-800">
                Other Skills
              </h4>
              <p className="text-sm text-slate-500 mt-1">
                Productivity and office tools
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="px-5 py-3 rounded-xl bg-white/80 border border-amber-100
              text-sm font-bold text-slate-700
              hover:bg-amber-500 hover:text-white hover:border-amber-500
              transition-all duration-200 cursor-default">
              Microsoft Office
            </span>
          </div>

        </div>

        <div className="absolute -right-10 -bottom-10 w-32 h-32 rounded-full
          bg-amber-200/30 group-hover:scale-150 transition-transform duration-500" />
      </div>

    </div>

    {/* BOTTOM NOTE */}
    <div className="relative overflow-hidden rounded-2xl p-5
      bg-gradient-to-r from-blue-50 via-violet-50 to-purple-50
      border border-blue-100 flex flex-col sm:flex-row
      sm:items-center justify-between gap-3">

      <div>
        <h4 className="font-bold text-slate-800">
          Always Learning, Always Growing ✦
        </h4>
        <p className="text-sm text-slate-500 mt-1">
          I keep improving my skills and exploring new technologies.
        </p>
      </div>

      <span className="text-blue-600 font-semibold text-sm">
        Keep Exploring →
      </span>

    </div>

  </div>
)}
{slide.type === 'projects' && (
  <div className="space-y-7">

    {/* HEADER */}
    <div>
      <p className="text-blue-500 text-sm font-bold uppercase tracking-widest">
        My Selected Works
      </p>

      <h3 className="text-3xl font-extrabold text-slate-800 mt-2">
        Featured Projects.
      </h3>

      <p className="text-slate-500 mt-2">
        Beberapa website dan aplikasi yang telah saya kembangkan.
      </p>
    </div>

    {/* PROJECT CARDS */}
    <div className="grid md:grid-cols-2 gap-6">

      {[
        {
          number: '01',
          title: 'Website Booking MUA',
          description: 'Website booking jasa Makeup Artist dengan desain modern, responsif, dan pengalaman pengguna yang mudah.',
          image: 'src/assets/mua.png',
          tech: ['React', 'JavaScript', 'Tailwind CSS'],
          color: 'from-blue-400 to-cyan-400',
          url: 'https://sar-mua.wijaralgifari.workers.dev/',
        },
        {
          number: '02',
          title: 'Website Portal Organisasi SPN',
          description: 'Portal organisasi PSP SPN PT Nikomas Gemilang menggunakan arsitektur full-stack dan database PostgreSQL.',
          image: 'src/assets/spn.png',
          tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
          color: 'from-purple-400 to-pink-400',
          url: 'https://spn-nikomas-fullstack.vercel.app/',
        },
        {
          number: '03',
          title: 'Website tokokita',
          description: 'platform pembelian online dengan fitur payment external bank',
          image: 'src/assets/tokokita.png',
          tech: ['PHP', 'laravel', 'JavaScript','mysql'],
          color: 'from-orange-400 to-amber-400',
          url: 'https://contoh-website-3.com',
        },
        {
          number: '04',
          title: 'Website toko bekaskita',
          description: 'Platform web jual barang bekas dengan mudah dan aman',
          image: 'src/assets/bekaskita.png',
          tech: ['JavaScript','phyton',' Django','SQLite'],
          color: 'from-emerald-400 to-teal-400',
          url: 'https://contoh-website-4.com',
        },
         {
          number: '05',
          title: 'deteksi kebocoran gas IoT',
          description: 'alat pendeteksi kebocoran gas berbasis Internet of Things yang dapat dikontrol dengan menggunakan smartphone',
          image: 'public/images/WhatsApp Image 2026-11-06 at 01.56.15.jpeg',
          tech: ['c++'],
          color: 'from-emerald-400 to-teal-400',
          url: 'https://drive.google.com/file/d/1IFF_6bHCLUwA4tAuALLuJNbhJubH4JO5/view',
        },
      ].map((project) => (

        <div
          key={project.number}
          className="group overflow-hidden bg-white
          rounded-3xl border border-slate-100
          shadow-lg hover:-translate-y-2
          hover:shadow-2xl transition-all duration-300"
        >

          {/* PROJECT IMAGE */}
          <div className="relative h-52 overflow-hidden bg-slate-100">

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top
              group-hover:scale-105 transition-transform duration-700"
            />

            <div className="absolute top-4 left-4
              bg-white/90 backdrop-blur-sm
              rounded-full px-4 py-2
              text-xs font-bold text-slate-800">
              PROJECT {project.number}
            </div>

          </div>

          {/* PROJECT INFORMATION */}
          <div className="relative p-6">

            <div className={`absolute top-0 left-0
              w-full h-1 bg-gradient-to-r ${project.color}`} />

            <h3 className="text-xl font-bold text-slate-800">
              {project.title}
            </h3>

            <p className="text-slate-500 text-sm
              leading-relaxed mt-3">
              {project.description}
            </p>

            {/* TECHNOLOGY */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="text-xs font-semibold
                  bg-blue-50 text-blue-600
                  px-3 py-2 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* BUTTON */}
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2
              mt-6 text-blue-600 font-bold
              hover:gap-4 transition-all duration-300"
            >
              Explore Project
              <span>→</span>
            </a>

          </div>
        </div>

      ))}

    </div>
  </div>
)}


{slide.type === 'gallery' && (
  <div className="space-y-8">

    {/* GALLERY HEADER */}
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
        <p className="text-blue-500 uppercase tracking-widest
          text-sm font-bold">
          
        </p>

        <h3 className="text-3xl md:text-4xl font-extrabold
          text-slate-800 mt-2">
          sertifikat
        </h3>

        <p className="text-slate-500 mt-3">
        sertifikat pelatihan dan kegiatan
        </p>
      </div>
    </div>

   
{/* PHOTO GALLERY */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
  gap-5 items-start">

  {[
    {
      image: 'sertifikat junior webdeveloper.jpeg',
      title: 'sertifikat Junior web developer',
      category: 'BNSP',
      number: '01',
    },
    {
      image: 'sertifikat backend.jpeg',
      title: 'Sertifikat backend developer',
      category: 'BNSP',
      number: '02',
    },
     {
      image: 'intermediate junior web developer.jpeg',
      title: 'sertifikkat intermediate junior web developer',
      category: 'komdigi',
      number: '04',
    },
    {
      image: 'fundamental juniro web developer.jpeg',
      title: 'fundamental junior web developer',
      category: 'komdigi',
      number: '05',
    },
    {
      image: 'kecerdasan artificial no code.jpeg',
      title: 'membuat website dengan gemini cli',
      category: 'komdigi',
      number: '06',
    },
     {
      image: 'pengenalan data science.jpeg',
      title: 'mengenal data science diberbagai sektor',
      category: 'komdigi',
      number: '07',
    },
    
    {
      image: 'pmm 4.jpeg',
      title: 'pertukaran mahasiswa merdeka batch 4 di sumatera',
      category: 'kemendikbudristek',
      number: '08',
    },
    {
      image: 'sdm.jpeg',
      title: 'kelas belajar ilmu SDM',
      category: 'PT. kelas personalia indonesia',
      number: '09',
    },
  ].map((photo, index) => (

    <div
      key={photo.image}
      className="group relative w-full overflow-hidden
      rounded-2xl bg-white border border-slate-100
      shadow-md hover:shadow-xl hover:-translate-y-2
      transition-all duration-500"
      style={{
        animation: `fadeUp 0.7s ease-out ${index * 0.15}s both`,
      }}
    >

      {/* UKURAN FOTO SERAGAM */}
      <div className="relative w-full h-64 overflow-hidden">

        <img
          src={`/images/${photo.image}`}
          alt={photo.title}
          className="w-full h-full object-cover
          group-hover:scale-110 transition-transform duration-700"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0
          bg-gradient-to-t from-slate-950/80
          via-transparent to-transparent" />

        {/* NOMOR FOTO */}
        <span className="absolute top-4 left-4
          bg-white/95 text-slate-800
          text-xs font-bold px-4 py-2 rounded-full">
          PHOTO {photo.number}
        </span>

        {/* INFORMASI FOTO */}
        <div className="absolute bottom-0 left-0 right-0 p-5">

          <p className="text-blue-200 text-xs
            font-semibold uppercase tracking-widest">
            {photo.category}
          </p>

          <h4 className="text-white text-xl font-bold mt-2">
            {photo.title}
          </h4>

          <p className="text-slate-200 text-sm mt-1
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300">
            A moment worth remembering ✦
          </p>

        </div>
      </div>

    </div>
  ))}

</div>

    {/* BOTTOM MESSAGE */}
    <div className="flex flex-col sm:flex-row
      justify-between items-center gap-3
      bg-gradient-to-r from-blue-50 via-violet-50
      to-purple-50 border border-blue-100
      rounded-2xl p-5">

      <div>
        <h4 className="font-bold text-slate-800">
          Every Picture Tells a Story ✦
        </h4>

        <p className="text-sm text-slate-500 mt-1">
          Capturing moments, creating memories.
        </p>
      </div>

      <span className="text-blue-600 font-semibold text-sm">
        My Activities →
      </span>

    </div>

  </div>
)}


{slide.type === 'videos' && (
  <div className="space-y-8">

    {/* HEADER VIDEO */}
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
      <div>
        <p className="text-blue-500 font-semibold text-sm uppercase tracking-widest">
          My Memories
        </p>
        <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mt-2">
          Moments & Activities
        </h3>
        <p className="text-slate-500 mt-2">
          Kumpulan dokumentasi kegiatan dan pengalaman saya.
        </p>
      </div>

      <span className="text-sm text-slate-500 bg-blue-50 px-4 py-2 rounded-full">
        {videos.length} Video Collection
      </span>
    </div>

    {/* GRID VIDEO */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

      {videos.map((video, index) => (
        <button
          key={`${video.src}-${index}`}
          type="button"
          onClick={() => setSelectedVideo(video)}
          className="group text-left overflow-hidden rounded-2xl
          bg-white border border-slate-200 shadow-md
          hover:-translate-y-2 hover:shadow-xl
          hover:border-blue-300 transition-all duration-300"
        >

          {/* THUMBNAIL */}
          <div className="relative h-44 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">

            <video
              src={video.src}
              muted
              preload="metadata"
              className="w-full h-full object-cover
              group-hover:scale-105 transition-transform duration-500"
            />

            {/* PLAY BUTTON */}
            <div className="absolute inset-0 flex items-center justify-center
              bg-slate-900/10 group-hover:bg-slate-900/30 transition">

              <div className="w-14 h-14 rounded-full bg-white/90
                flex items-center justify-center shadow-lg
                group-hover:scale-110 transition-transform">
                <span className="text-blue-600 text-2xl ml-1">▶</span>
              </div>
            </div>

            <span className="absolute top-3 left-3 bg-white/90
              text-blue-600 text-xs font-bold px-3 py-1 rounded-full">
              VIDEO {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          {/* VIDEO INFORMATION */}
          <div className="p-5">
            <h3 className="font-bold text-slate-800 text-base">
              {video.title}
            </h3>

            <div className="flex items-center justify-between mt-4">
              <span className="text-sm text-slate-500">
                Dokumentasi kegiatan
              </span>

              <span className="text-blue-500 text-sm font-semibold
                group-hover:translate-x-1 transition-transform">
                Tonton →
              </span>
            </div>
          </div>

        </button>
      ))}

    </div>

    {/* POPUP VIDEO */}
    {selectedVideo && (
      <div
        className="fixed inset-0 z-50 bg-slate-950/90
        backdrop-blur-sm flex items-center justify-center p-4"
        onClick={() => setSelectedVideo(null)}
      >
        <div
          className="w-full max-w-4xl bg-slate-900 rounded-3xl
          overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >

          <div className="flex justify-between items-center p-5">
            <h3 className="text-white font-bold">
              {selectedVideo.title}
            </h3>

            <button
              onClick={() => setSelectedVideo(null)}
              className="text-white bg-white/10 hover:bg-white/20
              rounded-full px-4 py-2 transition"
            >
              ✕ Tutup
            </button>
          </div>

          <video
            key={selectedVideo.src}
            src={selectedVideo.src}
            controls
            autoPlay
            playsInline
            className="w-full max-h-[70vh] bg-black"
          />

        </div>
      </div>
    )}

  </div>
)}

{slide.type === 'activities' && (
  <div className="space-y-8">

    {/* INTRO */}
    <div className="relative overflow-hidden rounded-3xl
      bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600
      p-7 md:p-9 text-white shadow-xl animate-fade-up">

      <div className="relative z-10">
        <span className="text-xs font-bold uppercase
          tracking-[0.25em] text-blue-100">
          Beyond the Classroom
        </span>

        <h3 className="text-2xl md:text-4xl font-extrabold mt-3">
          Organizations & Activities.
        </h3>

        <p className="text-blue-100 text-sm md:text-base
          leading-relaxed mt-3 max-w-2xl">
          Dokumentasi perjalanan, pengalaman organisasi,
          kegiatan sosial, kolaborasi, dan berbagai aktivitas
          yang menjadi bagian dari proses pengembangan diri saya.
        </p>
      </div>

      <div className="absolute -right-12 -top-16
        w-56 h-56 rounded-full bg-white/10" />
      <div className="absolute right-20 -bottom-24
        w-48 h-48 rounded-full bg-white/10" />
    </div>

    {/* CATEGORY FILTER / LABEL */}
    {/* INTERACTIVE CATEGORY FILTER */}
<div className="flex flex-wrap items-center gap-3">
  {[
    { id: 'all', label: 'All Experiences' },
    { id: 'organization', label: 'Organization' },
    { id: 'activity', label: 'Activities' },
  ].map((filter) => (
    <button
      key={filter.id}
      type="button"
      onClick={() => setActivityFilter(filter.id)}
      className={`px-5 py-3 rounded-full text-sm font-bold
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-md
        ${
          activityFilter === filter.id
            ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
            : 'bg-white text-slate-500 border border-slate-200 hover:border-blue-300 hover:text-blue-600'
        }`}
    >
      {filter.label}
      {activityFilter === filter.id && (
        <span className="ml-2">✓</span>
      )}
    </button>
  ))}

</div>

    {/* ORGANIZATION & ACTIVITY CARDS */}
    <div className="grid grid-cols-1 sm:grid-cols-2
      lg:grid-cols-3 gap-6">

      {[
        {
          number: '01',
          type: 'organization',
          category: 'Organization',
          title: 'pelantikan',
          description: 'pelantikan pengurus karang taruna kecamatan tirtayasa kab. serang',
          image: 'public/images/WhatsApp Image 2026-11-06 at 01.06.33 (2).jpeg',
          color: 'from-blue-500 to-cyan-500',
        },
        {
        number: '02',
        type: 'organization',
        category: 'organization',
        title: 'panitia acara isra miraj ',
        description: 'acara isra miraj di desa kebuyutan di selenggarakan oleh organisasi forum pemuda kemanisan',
        image: 'public/images/WhatsApp Image 2026-11-06 at 01.06.33.jpeg',
        color: 'from-violet-500 to-purple-500',
        },
        {
          number: '03',
          type: 'activities',
          category: 'Activity',
          title: 'tanara clean up',
          description:
            'kegiatan bersih bersama volunteer ditanara dengan program tanara clean up yang di selenggarakan oleh pt. chandra asri',
          image: 'public/images/WhatsApp Image 2026-11-06 at 01.06.35 (1).jpeg',
          color: 'from-emerald-500 to-teal-500',
        },
         {
          number: '04',
          type: 'activities',
          category: 'Activity',
          title: 'jawara run 5k',
          description:
            'panitia jawara run 5k provinsi banten',
          image: 'public/images/WhatsApp Image 2026-11-06 at 01.08.40.jpeg',
          color: 'from-emerald-500 to-teal-500',
        },
        
        {
          number: '05',
          type: 'activities',
          category: 'Activity',
          title: 'duta young preneur banten',
          description:
            'finalis 10 besar sebagai duta youngpreneur provinsi banten',
          image: 'public/images/WhatsApp Image 2026-11-06 at 01.28.56.jpeg',
          color: 'from-emerald-500 to-teal-500',
        },
        {
          number: '06',
          type: 'organization',
          category: 'organization',
          title: 'zetizen banten',
          description:
            'kegiatan kunjungan acara hut kab. serang',
          image: 'public/images/WhatsApp Image 2026-11-06 at 01.39.07.jpeg',
          color: 'from-emerald-500 to-teal-500',
        },
      ]
       .filter((item) =>
        activityFilter === 'all' ||
        item.type === activityFilter
        )
        .map((item, index) => (

        <article
          key={item.number}
          className="group relative overflow-hidden
            bg-white rounded-3xl border border-slate-100
            shadow-md hover:shadow-2xl
            hover:-translate-y-2 transition-all duration-500
            animate-fade-up"
          style={{ animationDelay: `${index * 120}ms` }}
        >

          {/* IMAGE */}
          <div className="relative h-56 overflow-hidden
            bg-gradient-to-br from-slate-100 to-blue-100">

            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="w-full h-full object-cover
                group-hover:scale-110
                transition-transform duration-700"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />

            {/* IMAGE OVERLAY */}
            <div className="absolute inset-0
              bg-gradient-to-t from-slate-950/70
              via-transparent to-transparent" />

            {/* NUMBER */}
            <span className="absolute top-4 left-4
              px-3 py-2 rounded-full
              bg-white/90 backdrop-blur-sm
              text-slate-800 text-xs font-bold">
              EXPERIENCE {item.number}
            </span>

            {/* CATEGORY */}
            <span className="absolute bottom-4 left-4
              px-3 py-2 rounded-full
              bg-blue-600/90 text-white
              text-xs font-semibold backdrop-blur-sm">
              {item.category}
            </span>
          </div>

          {/* CARD CONTENT */}
          <div className="relative p-6">

            <div className={`absolute top-0 left-0 w-full h-1
              bg-gradient-to-r ${item.color}`} />

            <h4 className="text-xl font-extrabold
              text-slate-800 group-hover:text-blue-600
              transition-colors duration-300">
              {item.title}
            </h4>

            <p className="text-sm text-slate-500
              leading-7 mt-3">
              {item.description}
            </p>

            <div className="flex items-center justify-between
              mt-5 pt-4 border-t border-slate-100">

              <span className="text-xs font-semibold
                text-slate-400 uppercase tracking-wider">
                Personal Experience
              </span>

              <span className="text-blue-500
                group-hover:translate-x-1
                transition-transform">
                ✦
              </span>
            </div>
          </div>
        </article>
      ))}

    </div>

    {/* CLOSING */}
    <div className="rounded-2xl p-6
      bg-gradient-to-r from-blue-50
      via-indigo-50 to-purple-50
      border border-blue-100
      flex flex-col sm:flex-row
      sm:items-center justify-between gap-4
      animate-fade-up">

      <div>
        <h4 className="font-extrabold text-slate-800">
          Experiences Build Character ✦
        </h4>

        <p className="text-sm text-slate-500 mt-1">
          Every activity is an opportunity to learn,
          contribute, and grow.
        </p>
      </div>

      <span className="text-sm font-bold text-blue-600">
        Keep Growing →
      </span>
    </div>

  </div>
)}
   
{slide.type === 'contact' && (
  <div className="grid md:grid-cols-2 gap-8 items-stretch">

    {/* BAGIAN KIRI */}
    <div className="relative overflow-hidden rounded-3xl
      bg-gradient-to-br from-blue-500 via-blue-600 to-violet-600
      p-8 md:p-10 text-white shadow-xl shadow-blue-200">

      {/* DEKORASI */}
      <div className="absolute -right-12 -top-12 w-48 h-48
        rounded-full bg-white/10" />

      <div className="absolute -right-5 -bottom-16 w-52 h-52
        rounded-full border-[25px] border-white/10" />

      <div className="relative z-10">
        <span className="inline-block bg-white/20 px-4 py-2
          rounded-full text-sm mb-8">
          ✦ Let's Connect
        </span>

        <h3 className="text-3xl md:text-4xl font-bold leading-tight">
          Let's Work
          <br />
          Together!
        </h3>

        <p className="text-blue-100 mt-5 leading-relaxed">
          Terima kasih telah mengunjungi portofolio saya.
          Saya terbuka untuk berdiskusi, berbagi ide,
          dan menjalin koneksi baru.
        </p>

        <div className="mt-10">
          <p className="text-sm text-blue-100">
            THANK YOU FOR VISITING
          </p>
          <p className="font-bold text-xl mt-1">
            Wijar Algifari.
          </p>
        </div>
      </div>
    </div>

    {/* BAGIAN KANAN */}
    <div className="bg-white rounded-3xl border border-slate-100
      shadow-lg p-8 md:p-10 flex flex-col justify-center">

      <p className="text-blue-500 font-semibold uppercase
        tracking-widest text-sm">
        Get In Touch
      </p>

      <h3 className="text-2xl font-bold text-slate-800 mt-3">
        Contact Information
      </h3>

      <p className="text-slate-500 mt-3 mb-8">
        Kamu bisa menghubungi saya melalui beberapa platform berikut.
      </p>

      {/* EMAIL */}
      <a
        href="mailto:wijaralgifari@gmail.com"
        className="flex items-center gap-4 p-4 rounded-2xl
        bg-blue-50 hover:bg-blue-100
        border border-blue-100 transition-all
        hover:-translate-y-1"
      >
        <div className="w-12 h-12 rounded-xl bg-blue-500
          flex items-center justify-center text-white">
          <Mail size={22} />
        </div>

        <div>
          <p className="font-bold text-slate-800">Email</p>
          <p className="text-sm text-slate-500">
            Hubungi saya melalui email
          </p>
        </div>

        <span className="ml-auto text-blue-500">↗</span>
      </a>

      {/* INSTAGRAM */}
      <a
        href="https://www.instagram.com/wiiz.zarr?cplk=MWlpeWp0eXB0ZTZqZQ%3D%3D&utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 p-4 rounded-2xl
        bg-pink-50 hover:bg-pink-100
        border border-pink-100 transition-all
        hover:-translate-y-1 mt-4"
      >
        <div className="w-12 h-12 rounded-xl bg-pink-500
          flex items-center justify-center text-white font-bold text-xl">
          IG
        </div>

        <div>
          <p className="font-bold text-slate-800">Instagram</p>
          <p className="text-sm text-slate-500">
            Follow my journey
          </p>
        </div>

        <span className="ml-auto text-pink-500">↗</span>
      </a>

      {/* LINKEDIN */}
      <a
        href="https://www.linkedin.com/in/wijar-algifari-840661258?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 p-4 rounded-2xl
        bg-indigo-50 hover:bg-indigo-100
        border border-indigo-100 transition-all
        hover:-translate-y-1 mt-4"
      >
        <div className="w-12 h-12 rounded-xl bg-indigo-500
          flex items-center justify-center text-white font-bold text-xl">
          in
        </div>

        <div>
          <p className="font-bold text-slate-800">LinkedIn</p>
          <p className="text-sm text-slate-500">
            Let's connect professionally
          </p>
        </div>

        <span className="ml-auto text-indigo-500">↗</span>
      </a>

    </div>
  </div>
)}

      </section>

      {/* NAVIGATION */}
      <footer className="max-w-6xl mx-auto mt-6">

        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-slate-400">
            Slide {currentSlide + 1} / {slides.length}
          </span>

          <span className="text-sm text-slate-400">
            Use ← → to navigate
          </span>
        </div>

        {/* PROGRESS BAR */}
        <div className="h-1 bg-slate-800 rounded-full mb-6">
          <div
            className="h-1 bg-blue-500 rounded-full transition-all"
            style={{
              width: `${((currentSlide + 1) / slides.length) * 100}%`
            }}
          />
        </div>

        <div className="flex justify-between items-center">

          <button
            onClick={() => setCurrentSlide(0)}
            className="flex items-center gap-2 text-slate-400
            hover:text-white"
          >
            <Home size={18} />
            <span>Home</span>
          </button>

          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="p-3 rounded-xl bg-slate-800
              hover:bg-slate-700 disabled:opacity-30"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="p-3 rounded-xl bg-blue-600
              hover:bg-blue-500 disabled:opacity-30"
            >
              <ChevronRight />
            </button>
          </div>

        </div>
      </footer>

    </main>
  )
}

export default App

export default function VideoHero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video/hero.mp4"
      ></video>
      <div className="absolute inset-0 bg-gradient-to-br from-[#f9f4ef]/50 to-[#cfd8f9]/50 mix-blend-lighten backdrop-blur-sm"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-5xl font-serif text-neutral-900 drop-shadow-sm">Smarter Decisions, Beautifully Delivered</h1>
        <p className="mt-4 text-lg text-neutral-700">Built on intelligence, awareness, and action.</p>
      </div>
    </div>
  );
}
const carouselImages = [
  "/features/Posts1.png",
  "/features/ComposeLayer.png",
  "/features/Blogs1.png",
  "/features/Blogs2.png",
  "/features/Groups1.png",
  "/features/Groups2.png",
  "/features/chatroom1.png",
  "/features/Notifications.png",
  "/features/Profile.png",
  "/features/adminactions.png",
];

const doubled = [...carouselImages, ...carouselImages];

export default function HeroCarousel() {
  return (
    <div className="carousel-section" aria-hidden="true">
      <div className="carousel-track">
        {doubled.map((src, i) => (
          <div key={i} className="carousel-slide">
            <img src={src} alt="" className="carousel-slide-img" />
          </div>
        ))}
      </div>
    </div>
  );
}

const MEMBERS = [
  {
    name: "John Doe",
    major: "Computer Science",
    graduation: "2025",
    picture:
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/45/45034c9c01c6178c96a5c6fc047f5ef659fc2a60.jpg",
    link: "https://cal.com",
  },
  {
    name: "John Doe",
    major: "Computer Science",
    graduation: "2025",
    picture:
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/45/45034c9c01c6178c96a5c6fc047f5ef659fc2a60.jpg",
    link: "https://cal.com",
  },
  {
    name: "John Doe",
    major: "Computer Science",
    graduation: "2025",
    picture:
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/45/45034c9c01c6178c96a5c6fc047f5ef659fc2a60.jpg",
    link: "https://cal.com",
  },
  {
    name: "John Doe",
    major: "Computer Science",
    graduation: "2025",
    picture:
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/45/45034c9c01c6178c96a5c6fc047f5ef659fc2a60.jpg",
    link: "https://cal.com",
  },
  {
    name: "John Doe",
    major: "Computer Science",
    graduation: "2025",
    picture:
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/45/45034c9c01c6178c96a5c6fc047f5ef659fc2a60.jpg",
    link: "https://cal.com",
  },
  {
    name: "John Doe",
    major: "Computer Science",
    graduation: "2025",
    picture:
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/45/45034c9c01c6178c96a5c6fc047f5ef659fc2a60.jpg",
    link: "https://cal.com",
  },
  {
    name: "John Doe",
    major: "Computer Science",
    graduation: "2025",
    picture:
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/45/45034c9c01c6178c96a5c6fc047f5ef659fc2a60.jpg",
    link: "https://cal.com",
  },
];

const OnboardStepTwo = () => {
  return (
    <div className="">
      {MEMBERS.map(({ name, major, graduation, picture }) => (
        <div key={name} className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-blue-500">img</div>
            <div className="">
              <p className="">{name}</p>
              <p className="flex items-center">
                {major} &bullet; {graduation}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OnboardStepTwo;

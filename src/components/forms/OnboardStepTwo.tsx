import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";

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
      <ScrollArea className="h-[20rem] w-full rounded-lg border border-border">
        <div className="">
          {MEMBERS.map(({ name, major, graduation, picture }) => (
            <div
              key={name}
              className="flex items-center justify-between border-b border-border p-3 last:border-0"
            >
              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 rounded-full bg-blue-500"></div>
                <div className="">
                  <p className="font-medium">{name}</p>
                  <p className="flex items-center text-sm text-muted-foreground">
                    {major} &bull; {graduation}
                  </p>
                </div>
              </div>
              <Button type="button" variant="outline" size="sm">
                Select
              </Button>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default OnboardStepTwo;

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function Hero() {
    return (
        <>
        <BackgroundBeamsWithCollision className="w-screen">
      <div className="pt-20 max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Home</h1>
        <p className="text-gray-700">Welcome to my portfolio!</p>
      </div>
      </BackgroundBeamsWithCollision>
      </>
    );
  }
  
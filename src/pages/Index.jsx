import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Utensils, Landmark, Camera } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-100 to-red-200">
      <header className="bg-red-600 text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2">Discover China</h1>
          <p className="text-xl">A Journey Through the Middle Kingdom</p>
        </div>
      </header>

      <main className="container mx-auto py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-center">Welcome to China</h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            China, with its rich history spanning over 5,000 years, is a land of diverse landscapes,
            ancient traditions, and modern marvels. From the Great Wall to the bustling streets of
            Shanghai, China offers a unique blend of the old and the new.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { title: "Geography", icon: MapPin, description: "Vast landscapes from mountains to deserts" },
            { title: "Cuisine", icon: Utensils, description: "Diverse flavors from 8 culinary traditions" },
            { title: "History", icon: Landmark, description: "5,000 years of rich cultural heritage" },
            { title: "Attractions", icon: Camera, description: "World-famous sights and hidden gems" },
          ].map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <item.icon className="mr-2" />
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-6">Plan Your Chinese Adventure</h2>
          <Button size="lg" className="bg-red-600 hover:bg-red-700">
            Explore More
          </Button>
        </section>
      </main>

      <footer className="bg-red-800 text-white py-6 mt-12">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Discover China. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

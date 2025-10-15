import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Search, Heart, MapPin, Star } from "lucide-react";
import { BottomNav } from "@/components/BottomNav";

const Explore = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const occasionFilters = [
    { id: "wedding", label: "💍 Wedding", emoji: "💍" },
    { id: "casual", label: "👕 Casual", emoji: "👕" },
    { id: "formal", label: "👔 Formal/Office", emoji: "👔" },
    { id: "party", label: "🎉 Party/Night Out", emoji: "🎉" },
    { id: "festival", label: "🎊 Festival/Traditional", emoji: "🎊" },
    { id: "vacation", label: "🏖️ Vacation/Beach", emoji: "🏖️" },
    { id: "date", label: "💕 Date Night", emoji: "💕" },
    { id: "college", label: "🎓 College/Everyday", emoji: "🎓" },
  ];

  const clothingTypeFilters = [
    { id: "dresses", label: "👗 Dresses" },
    { id: "tops", label: "👚 Tops & Shirts" },
    { id: "pants", label: "👖 Pants & Skirts" },
    { id: "ethnic", label: "🥻 Ethnic Wear" },
    { id: "outerwear", label: "🧥 Outerwear" },
    { id: "footwear", label: "👠 Footwear" },
    { id: "accessories", label: "👜 Accessories" },
  ];

  const styleFilters = [
    { id: "streetwear", label: "🛹 Streetwear" },
    { id: "minimal", label: "⚪ Minimal" },
    { id: "boho", label: "🌸 Boho" },
    { id: "glam", label: "✨ Glam" },
    { id: "vintage", label: "📻 Vintage" },
    { id: "y2k", label: "💿 Y2K" },
    { id: "luxury", label: "💎 Luxury" },
  ];

  const mockItems = [
    {
      id: 1,
      title: "Elegant Black Evening Gown",
      owner: "Sarah M.",
      price: 350,
      location: "Manhattan, NY",
      rating: 4.9,
      reviews: 23,
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQF58t0nuWMZGihWSI8DfS42Sb6TSKGokaBfzn1gqlTgRv-dXLopA666ja6bbpo_y8LMYM10CIEJwuOTlV5UHiUBsc3aLgeSOFV1JjRetNH",
      tags: ["Evening", "Formal"],
    },
    {
      id: 2,
      title: "Vintage Floral Summer Dress",
      owner: "Emma L.",
      price: 150,
      location: "Brooklyn, NY",
      rating: 4.8,
      reviews: 15,
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS9cnTtNZVtbsYnqssiIBKf1VxblfdKxNU43FiCtDkhlhWtPBy2_1gzrW27xY6QQzOX6yoqzAEpY0DxuLqqBnlJLOMGsbVcbbF9mF1uAw",
      tags: ["Casual", "Vintage"],
    },
    {
      id: 3,
      title: "Designer Wedding Guest Dress",
      owner: "Jessica K.",
      price: 499,
      location: "Queens, NY",
      rating: 5.0,
      reviews: 31,
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRhC9YhmpN5kj4H1W4fNyVOD2v_txLRqfsmj4u9tS6554cF4qXu0vjlOC8zURBMCeZfsqxUGauHJ28KD8l7g8i_8KQ4nH_z0m6YnD8WRAUCNDIgdd_V5GtxIjNl4wrP9St9njDH_A&usqp=CAc",
      tags: ["Wedding", "Luxury"],
    },
    {
      id: 4,
      title: "Boho Maxi Dress",
      owner: "Maya R.",
      price: 299,
      location: "Manhattan, NY",
      rating: 4.7,
      reviews: 18,
      image: "https://4.imimg.com/data4/HG/GM/MY-271218/indian-bohemian-dresses.png",
      tags: ["Boho", "Festival"],
    },
  ];

  const toggleFilter = (filterId: string) => {
    setSelectedFilters(prev =>
      prev.includes(filterId)
        ? prev.filter(f => f !== filterId)
        : [...prev, filterId]
    );
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Search Bar */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-lg border-b border-border px-4 py-3 safe-top">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <Input
            placeholder="Search outfits, vibes, or accessories"
            className="pl-10 h-12 rounded-full bg-muted/50 border-0 text-base"
          />
        </div>
      </div>

      {/* Filter Strips */}
      <div className="border-b border-border bg-background/80 backdrop-blur">
        {/* Occasion Filters */}
        <div className="px-4 py-3">
          <ScrollArea className="w-full">
            <div className="flex gap-2 pb-2">
              {occasionFilters.map((filter) => (
                <Badge
                  key={filter.id}
                  variant={selectedFilters.includes(filter.id) ? "default" : "secondary"}
                  className={`cursor-pointer whitespace-nowrap px-4 py-2 rounded-full transition-all ${
                    selectedFilters.includes(filter.id) 
                      ? "bg-primary text-primary-foreground shadow-md" 
                      : "hover:bg-muted"
                  }`}
                  onClick={() => toggleFilter(filter.id)}
                >
                  {filter.label}
                </Badge>
              ))}
            </div>
            <ScrollBar orientation="horizontal" className="invisible" />
          </ScrollArea>
        </div>

        {/* Clothing Type Filters */}
        <div className="px-4 py-3 border-t border-border/50">
          <ScrollArea className="w-full">
            <div className="flex gap-2 pb-2">
              {clothingTypeFilters.map((filter) => (
                <Badge
                  key={filter.id}
                  variant={selectedFilters.includes(filter.id) ? "default" : "outline"}
                  className={`cursor-pointer whitespace-nowrap px-4 py-2 rounded-full transition-all ${
                    selectedFilters.includes(filter.id) 
                      ? "bg-primary text-primary-foreground shadow-md" 
                      : "hover:bg-muted"
                  }`}
                  onClick={() => toggleFilter(filter.id)}
                >
                  {filter.label}
                </Badge>
              ))}
            </div>
            <ScrollBar orientation="horizontal" className="invisible" />
          </ScrollArea>
        </div>

        {/* Style Filters */}
        <div className="px-4 py-3 border-t border-border/50">
          <ScrollArea className="w-full">
            <div className="flex gap-2 pb-2">
              {styleFilters.map((filter) => (
                <Badge
                  key={filter.id}
                  variant={selectedFilters.includes(filter.id) ? "default" : "outline"}
                  className={`cursor-pointer whitespace-nowrap px-3 py-2 rounded-full transition-all ${
                    selectedFilters.includes(filter.id) 
                      ? "bg-primary text-primary-foreground shadow-md" 
                      : "hover:bg-muted"
                  }`}
                  onClick={() => toggleFilter(filter.id)}
                >
                  {filter.label}
                </Badge>
              ))}
            </div>
            <ScrollBar orientation="horizontal" className="invisible" />
          </ScrollArea>
        </div>
      </div>

      {/* Items Grid */}
      <div className="px-4 py-4">
        <div className="grid grid-cols-2 gap-3">
          {mockItems.map((item) => (
            <Card 
              key={item.id} 
              className="group cursor-pointer border-0 shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden"
            >
              <div className="relative">
                <div className="aspect-[3/4] bg-muted overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <Button
                  size="sm"
                  variant="secondary"
                  className="absolute top-2 right-2 w-8 h-8 p-0 opacity-90 hover:opacity-100 rounded-full shadow-md"
                >
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-sm text-foreground mb-1 line-clamp-2">
                  {item.title}
                </h3>
                <div className="flex items-center text-xs text-muted-foreground mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  <span className="truncate">{item.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs">
                    <Star className="w-3 h-3 text-gold fill-current mr-1" />
                    <span className="text-foreground font-medium">{item.rating}</span>
                  </div>
                  <span className="font-bold text-sm text-foreground">₹{item.price}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Explore;

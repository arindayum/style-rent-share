import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, Star, Trash2 } from "lucide-react";
import { BottomNav } from "@/components/BottomNav";
import { ItemDetail } from "@/components/ItemDetail";
import { RentalFlow } from "@/components/RentalFlow";

const Wishlist = () => {
  const [currentView, setCurrentView] = useState<'wishlist' | 'item-detail'>('wishlist');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [showRentalFlow, setShowRentalFlow] = useState(false);

  const savedItems = [
    {
      id: 1,
      title: "Elegant Black Evening Gown",
      ownerName: "Sarah M.",
      price: 350,
      location: "Manhattan, NY",
      rating: 4.9,
      reviews: 23,
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQF58t0nuWMZGihWSI8DfS42Sb6TSKGokaBfzn1gqlTgRv-dXLopA666ja6bbpo_y8LMYM10CIEJwuOTlV5UHiUBsc3aLgeSOFV1JjRetNH",
      savedDate: "2 days ago",
      images: ["https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQF58t0nuWMZGihWSI8DfS42Sb6TSKGokaBfzn1gqlTgRv-dXLopA666ja6bbpo_y8LMYM10CIEJwuOTlV5UHiUBsc3aLgeSOFV1JjRetNH"],
      description: "Stunning designer evening gown perfect for formal events.",
      size: "M",
      condition: "Excellent",
      category: "Evening Wear",
      owner: {
        id: "owner-1",
        name: "Sarah M.",
        avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100",
        rating: 4.9,
        reviewCount: 23,
        responseTime: "2 hours"
      },
      availability: "Available",
      averageRating: 4.8,
      totalReviews: 15
    },
    {
      id: 2,
      title: "Designer Wedding Guest Dress",
      ownerName: "Jessica K.",
      price: 499,
      location: "Queens, NY",
      rating: 5.0,
      reviews: 31,
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRhC9YhmpN5kj4H1W4fNyVOD2v_txLRqfsmj4u9tS6554cF4qXu0vjlOC8zURBMCeZfsqxUGauHJ28KD8l7g8i_8KQ4nH_z0m6YnD8WRAUCNDIgdd_V5GtxIjNl4wrP9St9njDH_A&usqp=CAc",
      savedDate: "1 week ago",
      images: ["https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRhC9YhmpN5kj4H1W4fNyVOD2v_txLRqfsmj4u9tS6554cF4qXu0vjlOC8zURBMCeZfsqxUGauHJ28KD8l7g8i_8KQ4nH_z0m6YnD8WRAUCNDIgdd_V5GtxIjNl4wrP9St9njDH_A&usqp=CAc"],
      description: "Designer dress perfect for weddings.",
      size: "L",
      condition: "Excellent",
      category: "Formal Wear",
      owner: {
        id: "owner-2",
        name: "Jessica K.",
        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
        rating: 5.0,
        reviewCount: 31,
        responseTime: "1 hour"
      },
      availability: "Available",
      averageRating: 5.0,
      totalReviews: 31
    },
  ];

  const handleItemClick = (item: any) => {
    setSelectedItem(item);
    setCurrentView('item-detail');
  };

  const handleRentItem = () => {
    setShowRentalFlow(true);
  };

  const handleRentalSubmit = (request: any) => {
    console.log('Rental request:', request);
    setShowRentalFlow(false);
    alert('Rental request sent successfully!');
  };

  if (currentView === 'item-detail' && selectedItem) {
    return (
      <div className="min-h-screen bg-background pb-20">
        <ItemDetail
          item={selectedItem}
          onBack={() => setCurrentView('wishlist')}
          onRent={handleRentItem}
          onMessage={() => alert('Messaging feature coming soon!')}
          onViewProfile={() => alert('Profile view coming soon!')}
        />
        {showRentalFlow && (
          <RentalFlow
            item={{
              id: selectedItem.id,
              title: selectedItem.title,
              price: selectedItem.price,
              image: selectedItem.image,
              owner: selectedItem.owner.name
            }}
            onClose={() => setShowRentalFlow(false)}
            onSubmit={handleRentalSubmit}
          />
        )}
        <BottomNav />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-lg border-b border-border px-4 py-4 safe-top">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Wishlist</h1>
            <p className="text-sm text-muted-foreground">{savedItems.length} saved items</p>
          </div>
          <Heart className="w-6 h-6 text-primary fill-current" />
        </div>
      </div>

      {/* Saved Items */}
      <div className="px-4 py-4">
        {savedItems.length > 0 ? (
          <div className="space-y-3">
            {savedItems.map((item) => (
              <Card 
                key={item.id} 
                className="overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer"
                onClick={() => handleItemClick(item)}
              >
                <div className="flex gap-3 p-3">
                  <div className="relative">
                    <div className="w-24 h-32 bg-muted overflow-hidden rounded-lg">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h3 className="font-semibold text-foreground mb-1 line-clamp-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center text-xs text-muted-foreground mb-2">
                      <MapPin className="w-3 h-3 mr-1" />
                      {item.location}
                    </div>
                    <div className="flex items-center text-xs mb-2">
                      <Star className="w-3 h-3 text-gold fill-current mr-1" />
                      <span className="text-foreground font-medium">{item.rating}</span>
                      <span className="text-muted-foreground ml-1">({item.reviews})</span>
                    </div>
                    <Badge variant="secondary" className="w-fit text-xs mb-2">
                      Saved {item.savedDate}
                    </Badge>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="font-bold text-foreground">₹{item.price}/day</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 px-2 text-destructive hover:text-destructive hover:bg-destructive/10"
                        onClick={(e) => {
                          e.stopPropagation();
                          alert('Remove from wishlist');
                        }}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <Heart className="w-16 h-16 text-muted-foreground/30 mb-4" />
            <h2 className="text-xl font-semibold text-foreground mb-2">No saved items yet</h2>
            <p className="text-muted-foreground">Start exploring and save your favorites!</p>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
};

export default Wishlist;

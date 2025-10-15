




import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Edit3, 
  Trash2, 
  Eye, 
  Calendar, 
  DollarSign, 
  Star, 
  Upload, 
  Grid3X3, 
  List 
} from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";
import { BottomNav } from "@/components/BottomNav";

const Closet = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filter, setFilter] = useState<'all' | 'available' | 'rented' | 'unavailable'>('all');

  const mockItems = [
    {
      id: 1,
      title: "Elegant Black Evening Gown",
      price: 350,
      status: "available",
      totalRentals: 12,
      rating: 4.9,
      earnings: 2185,
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQF58t0nuWMZGihWSI8DfS42Sb6TSKGokaBfzn1gqlTgRv-dXLopA666ja6bbpo_y8LMYM10CIEJwuOTlV5UHiUBsc3aLgeSOFV1JjRetNH",
      dateAdded: "2024-01-15",
      lastRented: "2024-03-10"
    },
    {
      id: 2,
      title: "Vintage Floral Summer Dress",
      price: 150,
      status: "rented",
      totalRentals: 8,
      rating: 4.8,
      earnings: 1200,
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS9cnTtNZVtbsYnqssiIBKf1VxblfdKxNU43FiCtDkhlhWtPBy2_1gzrW27xY6QQzOX6yoqzAEpY0DxuLqqBnlJLOMGsbVcbbF9mF1uAw",
      dateAdded: "2024-02-01",
      lastRented: "2024-03-20"
    },
    {
      id: 3,
      title: "Designer Wedding Guest Dress",
      price: 499,
      status: "unavailable",
      totalRentals: 15,
      rating: 5.0,
      earnings: 7485,
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRhC9YhmpN5kj4H1W4fNyVOD2v_txLRqfsmj4u9tS6554cF4qXu0vjlOC8zURBMCeZfsqxUGauHJ28KD8l7g8i_8KQ4nH_z0m6YnD8WRAUCNDIgdd_V5GtxIjNl4wrP9St9njDH_A&usqp=CAc",
      dateAdded: "2023-12-10",
      lastRented: "2024-03-18"
    },
    {
      id: 4,
      title: "Boho Maxi Dress",
      price: 299,
      status: "available",
      totalRentals: 5,
      rating: 4.7,
      earnings: 1495,
      image: "https://4.imimg.com/data4/HG/GM/MY-271218/indian-bohemian-dresses.png",
      dateAdded: "2024-02-20",
      lastRented: "2024-03-05"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-500';
      case 'rented': return 'bg-yellow-500';
      case 'unavailable': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const filteredItems = mockItems.filter(item => filter === 'all' || item.status === filter );
  const totalEarnings = mockItems.reduce((sum, item) => sum + item.earnings, 0);
  const totalItems = mockItems.length;
  const availableItems = mockItems.filter(item => item.status === 'available').length;
  const avgRating = (mockItems.reduce((sum, item) => sum + item.rating, 0) / totalItems).toFixed(1);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-lg border-b border-border px-4 py-4 safe-top">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h1 className="text-2xl font-bold text-foreground">My Closet</h1>
            <p className="text-sm text-muted-foreground">{totalItems} items</p>
          </div>
          <Button size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Add Item
          </Button>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center space-x-2">
          <Button variant={viewMode === 'grid' ? 'default' : 'outline'} size="sm" onClick={() => setViewMode('grid')}>
            <Grid3X3 className="w-4 h-4" />
          </Button>
          <Button variant={viewMode === 'list' ? 'default' : 'outline'} size="sm" onClick={() => setViewMode('list')}>
            <List className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="px-4 py-4">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <Card className="p-3 bg-card shadow-sm rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Items</p>
                <p className="text-2xl font-bold text-foreground">{totalItems}</p>
              </div>
              <Upload className="w-6 h-6 text-primary" />
            </div>
          </Card>

          <Card className="p-3 bg-card shadow-sm rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Available</p>
                <p className="text-2xl font-bold text-foreground">{availableItems}</p>
              </div>
              <Calendar className="w-6 h-6 text-success" />
            </div>
          </Card>

          <Card className="p-3 bg-card shadow-sm rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Earnings</p>
                <p className="text-2xl font-bold text-foreground">₹{totalEarnings}</p>
              </div>
              <DollarSign className="w-6 h-6 text-gold" />
            </div>
          </Card>

          <Card className="p-3 bg-card shadow-sm rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Rating</p>
                <p className="text-2xl font-bold text-foreground">{avgRating}</p>
              </div>
              <Star className="w-6 h-6 text-gold" />
            </div>
          </Card>
        </div>

        {/* Filters */}
        <div className="mb-4">
          <ScrollArea className="w-full">
            <div className="flex gap-2 pb-2">
              <Badge variant={filter === 'all' ? 'default' : 'outline'} className="cursor-pointer whitespace-nowrap px-4 py-2 rounded-full" onClick={() => setFilter('all')}>All Items</Badge>
              <Badge variant={filter === 'available' ? 'default' : 'outline'} className="cursor-pointer whitespace-nowrap px-4 py-2 rounded-full" onClick={() => setFilter('available')}>Available</Badge>
              <Badge variant={filter === 'rented' ? 'default' : 'outline'} className="cursor-pointer whitespace-nowrap px-4 py-2 rounded-full" onClick={() => setFilter('rented')}>Rented</Badge>
              <Badge variant={filter === 'unavailable' ? 'default' : 'outline'} className="cursor-pointer whitespace-nowrap px-4 py-2 rounded-full" onClick={() => setFilter('unavailable')}>Unavailable</Badge>
            </div>
            <ScrollBar orientation="horizontal" className="invisible" />
          </ScrollArea>
        </div>

        {/* Items Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-2 gap-3">
            {filteredItems.map(item => (
              <Card key={item.id} className="group bg-white shadow rounded overflow-hidden hover:shadow-lg transition">
                <div className="relative">
                  <img src={item.image} alt={item.title} className="w-full h-64 object-cover"/>
                  <Badge className={`absolute top-3 left-3 px-2 py-1 text-white rounded ${getStatusColor(item.status)}`}>
                    {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                  </Badge>
                  <div className="absolute top-3 right-3 flex space-x-1 opacity-0 group-hover:opacity-100 transition">
                    <Button size="sm" variant="secondary"><Eye className="w-4 h-4"/></Button>
                    <Button size="sm" variant="secondary"><Edit3 className="w-4 h-4"/></Button>
                    <Button size="sm" variant="destructive"><Trash2 className="w-4 h-4"/></Button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                    <div>Price: ₹{item.price}/day</div>
                    <div>Earned: ₹{item.earnings}</div>
                    <div>Rentals: {item.totalRentals}</div>
                    <div className="flex items-center"><Star className="w-3 h-3 text-yellow-500 mr-1"/> {item.rating}</div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex-1 flex items-center justify-center"><Edit3 className="w-3 h-3 mr-1"/>Edit</Button>
                    <Button size="sm" className="flex-1 flex items-center justify-center"><Eye className="w-3 h-3 mr-1"/>View</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredItems.map(item => (
              <Card key={item.id} className="p-4 flex items-center bg-white shadow rounded hover:shadow-lg transition">
                <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded"/>
                <div className="flex-1 ml-4">
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>
                  <div className="text-sm text-gray-500 mt-1">Added: {new Date(item.dateAdded).toLocaleDateString()} | Last Rented: {new Date(item.lastRented).toLocaleDateString()}</div>
                  <div className="flex items-center space-x-4 mt-2 text-sm">
                    <div>Earnings: ₹{item.earnings}</div>
                    <div className="flex items-center"><Star className="w-4 h-4 text-yellow-500 mr-1"/> {item.rating}</div>
                  </div>
                </div>
                <Badge className={`ml-4 px-2 py-1 text-white rounded ${getStatusColor(item.status)}`}>
                  {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                </Badge>
                <div className="flex flex-col ml-4 space-y-1">
                  <Button size="sm" variant="outline"><Edit3 className="w-4 h-4"/></Button>
                  <Button size="sm" variant="outline"><Eye className="w-4 h-4"/></Button>
                  <Button size="sm" variant="destructive"><Trash2 className="w-4 h-4"/></Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
      <BottomNav />
    </div>
  );
};

export default Closet;

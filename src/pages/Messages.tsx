import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MessageCircle, Search } from "lucide-react";
import { BottomNav } from "@/components/BottomNav";

const Messages = () => {
  const conversations = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
      lastMessage: "The dress is available for those dates!",
      time: "2m ago",
      unread: 2,
      online: true,
    },
    {
      id: 2,
      name: "Emma Thompson",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100",
      lastMessage: "Thanks for renting! Hope you loved it 💕",
      time: "1h ago",
      unread: 0,
      online: false,
    },
    {
      id: 3,
      name: "Maya Rodriguez",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100",
      lastMessage: "When can I pick up the outfit?",
      time: "3h ago",
      unread: 1,
      online: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-lg border-b border-border px-4 py-4 safe-top">
        <h1 className="text-2xl font-bold text-foreground mb-3">Messages</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search conversations..."
            className="pl-10 h-10 rounded-full bg-muted/50 border-0"
          />
        </div>
      </div>

      {/* Conversations */}
      <div className="px-4 py-2">
        {conversations.length > 0 ? (
          <div className="space-y-2">
            {conversations.map((conversation) => (
              <Card 
                key={conversation.id} 
                className="cursor-pointer border-0 shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden"
              >
                <div className="flex items-center gap-3 p-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-muted overflow-hidden">
                      <img 
                        src={conversation.avatar} 
                        alt={conversation.name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    {conversation.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-success border-2 border-background rounded-full" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-foreground truncate">
                        {conversation.name}
                      </h3>
                      <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                        {conversation.time}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground truncate">
                        {conversation.lastMessage}
                      </p>
                      {conversation.unread > 0 && (
                        <Badge 
                          variant="default" 
                          className="ml-2 h-5 min-w-[20px] rounded-full px-1.5 flex items-center justify-center"
                        >
                          {conversation.unread}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <MessageCircle className="w-16 h-16 text-muted-foreground/30 mb-4" />
            <h2 className="text-xl font-semibold text-foreground mb-2">No messages yet</h2>
            <p className="text-muted-foreground">Start renting or lending to chat with others!</p>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
};

export default Messages;

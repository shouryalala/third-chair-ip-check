import { User, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AppHeader = () => {
  return (
    <header className="bg-brand-teal text-white px-6 py-4 shadow-lg">
      <div className="flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-3">
          <div className="text-2xl font-bold tracking-wide">
            <span className="italic">Third</span> Chair
          </div>
        </div>

        {/* Right side navigation */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <Settings className="h-5 w-5" />
          </Button>
          
          <div className="flex items-center space-x-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="" alt="The Orchard" />
              <AvatarFallback className="bg-white/20 text-white text-sm">
                TO
              </AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">The Orchard</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
import { useState } from 'react'
import { Home, User, Pencil, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import './header.css'

const Header: React.FC = () => {
  return (
  
      
      <header className="header">
                
                <div className='headercontent'>
                    <Button variant="ghost" size="icon" className="header-button">
                        <Home className="h-6 w-6" />
                    </Button>
                    <div className="logo-container">
                        <img src="/logowhite.png" alt="logo" className="logo" />
                    </div>
                    <Button variant="ghost" size="icon" className="header-button">
                        <User className="h-6 w-6" />
                    </Button>
                    </div>
               
            </header>
    
    
  );
};

export default Header;
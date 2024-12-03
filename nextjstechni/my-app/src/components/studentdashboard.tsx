'use client'

import { useState } from 'react'
import { Home, User, Pencil, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import './teacher-view.css'
import SubjectProgress from "@/components/ui/subject-progress";

interface Student {
  name: string
  points: number
  maxPoints: number
  percentage: number
}




const StudentDashboard = () => {


    const data = {
        subject: "Mathematics",
        totalPoints: 85,
        maxPoints: 100,
        pointEntries: [
          { id: "1", source: "Quiz", date: "2023-05-15", pointsEarned: 18, totalPoints: 20 },
          { id: "2", source: "Homework", date: "2023-05-10", pointsEarned: 27, totalPoints: 30 },
          { id: "3", source: "Test", date: "2023-05-05", pointsEarned: 40, totalPoints: 50 },
          { id: "4", source: "Quiz", date: "2023-05-05", pointsEarned: 22, totalPoints: 50 },
          { id: "5", source: "Test", date: "2023-05-05", pointsEarned: 1, totalPoints: 50 },
          { id: "6", source: "Homework", date: "2023-05-05", pointsEarned: 50, totalPoints: 50 },
          { id: "7", source: "Test", date: "2023-05-05", pointsEarned: 18, totalPoints: 50 },
        ],
      };


    return (
        <div className="min-h-screen bg-white">
            <header className="header">
                <div className="header-content">
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
            <main className="main-content">
                <h1 className="title">Oceny</h1>


                <div className="containergrades">
                <SubjectProgress {...data} />
                
                
                </div>

            </main>
        </div>
    );
};

export default StudentDashboard;



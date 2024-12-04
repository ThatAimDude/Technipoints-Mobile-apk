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
import '../TeacherDashboard/teacher-view.css'
import SubjectProgress from "@/components/ui/subject-progress";
import HeaderTop from "@/components/ui/header"

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
          { id: "1", source: "Quiz", date: "2023-05-15", pointsEarned: 70, totalPoints: 20 },
          { id: "2", source: "Homework", date: "2023-05-10", pointsEarned: 29, totalPoints: 30 },
          { id: "3", source: "Test", date: "2023-05-05", pointsEarned: 20, totalPoints: 50 },
          { id: "4", source: "Quiz", date: "2023-05-05", pointsEarned: 12, totalPoints: 50 },
          { id: "5", source: "Test", date: "2023-05-05", pointsEarned: 1, totalPoints: 50 },
          { id: "6", source: "Homework", date: "2023-05-05", pointsEarned: 3, totalPoints: 50 },
          { id: "7", source: "Test", date: "2023-05-05", pointsEarned: 4, totalPoints: 50 },
        ],
      };


      const data1 = {
        subject: "Mathematics",
        totalPoints: 85,
        maxPoints: 100,
        pointEntries: [
          { id: "1", source: "Quiz", date: "2023-05-15", pointsEarned: 12, totalPoints: 20 },
          { id: "2", source: "Homework", date: "2023-05-10", pointsEarned: 19, totalPoints: 30 },
          { id: "3", source: "Test", date: "2023-05-05", pointsEarned: 16, totalPoints: 50 },
          { id: "4", source: "Quiz", date: "2023-05-05", pointsEarned: 15, totalPoints: 50 },
          { id: "5", source: "Test", date: "2023-05-05", pointsEarned: 20, totalPoints: 50 },
          { id: "6", source: "Homework", date: "2023-05-05", pointsEarned: 30, totalPoints: 50 },
          { id: "7", source: "Test", date: "2023-05-05", pointsEarned: 4, totalPoints: 50 },
        ],
      };

      const data2 = {
        subject: "Mathematics",
        totalPoints: 85,
        maxPoints: 100,
        pointEntries: [
          { id: "1", source: "Quiz", date: "2023-05-15", pointsEarned: 7, totalPoints: 20 },
          { id: "2", source: "Homework", date: "2023-05-10", pointsEarned: 26, totalPoints: 30 },
          { id: "3", source: "Test", date: "2023-05-05", pointsEarned: 50, totalPoints: 50 },
          { id: "4", source: "Quiz", date: "2023-05-05", pointsEarned: 24, totalPoints: 50 },
          { id: "5", source: "Test", date: "2023-05-05", pointsEarned: 12, totalPoints: 50 },
          { id: "6", source: "Homework", date: "2023-05-05", pointsEarned: 3, totalPoints: 50 },
          { id: "7", source: "Test", date: "2023-05-05", pointsEarned: 4, totalPoints: 50 },
        ],
      };


    return (
        <div className="min-h-screen bg-white">
            <HeaderTop/>
            <main className="main-content">
                <h1 className="title">Oceny</h1>


                <div className="containergrades">
              <SubjectProgress {...data} />
              <SubjectProgress {...data1} />
              <SubjectProgress {...data2} />
              <SubjectProgress {...data} />
              <SubjectProgress {...data2} />
              <SubjectProgress {...data} />
              <SubjectProgress {...data2} />
              <SubjectProgress {...data1} />
              <SubjectProgress {...data} />
              <SubjectProgress {...data1} />
              <SubjectProgress {...data} />
              <SubjectProgress {...data1} />
              <SubjectProgress {...data2} />
              <SubjectProgress {...data} />
               
                
                
                </div>

            </main>
        </div>
    );
};

export default StudentDashboard;



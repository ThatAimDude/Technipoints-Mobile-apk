'use client'

import { useState } from 'react'
import { Home, User, Pencil, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import './teacher-view.css'
import HeaderTop from "@/components/ui/header"
import Footer from "@/components/ui/footer"

interface Student {
  name: string
  points: number
  maxPoints: number
  percentage: number
}

export default function TeacherView() {
  const [students, setStudents] = useState<Student[]>([
    { name: "Mateusz Kowal", points: 154, maxPoints: 200, percentage: 72 },
    { name: "Mateusz Kowal", points: 154, maxPoints: 200, percentage: 72 },
    { name: "Mateusz Kowal", points: 154, maxPoints: 200, percentage: 72 },
    { name: "Mateusz Kowal", points: 154, maxPoints: 200, percentage: 72 },
    { name: "Mateusz Kowal", points: 154, maxPoints: 200, percentage: 72 },
    { name: "Mateusz Kowal", points: 154, maxPoints: 200, percentage: 72 },
  ])


  return (
    <div>
    <div className="min-h-screen bg-white">


           <HeaderTop />
      <main className="main-content">

   
        <h1 className="title">Oceny</h1>
        
        <div className="table-container">
          <table className="table">
            <thead>
              <tr className="table-header">
                <th className="table-cell">NAZWA</th>
                <th className="table-cell">PUNKTY</th>
                <th className="table-cell">ILOSC ZDOBYTYCH</th>
                <th className="table-cell">WYNIK</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index} className="table-row">
                  <td className="table-cell">{student.name}</td>
                  <td className="table-cell">
                    <div className="points-container">
                      <div className="point-square cyan" />
                      <div className="point-square blue" />
                      <div className="point-square yellow" />
                      <div className="point-square pink" />
                      <div className="point-square purple" />
                      <DropdownMenu>
                          <Button size="icon" variant="outline" className="ml-2">
                            <Pencil className="h-4 w-4" />
                          </Button>
                      </DropdownMenu>
                    </div>
                  </td>
                  <td className="table-cell">
                    <div className="progress-container">
                      <div>
                        <div>{student.points}pt</div>
                        <div className="progress-text">z {student.maxPoints}pt</div>
                      </div>
                      <Progress 
                        value={student.percentage} 
                        className="progress-bar" 
                      />
                    </div>
                  </td>
                  <td className="table-cell result">{student.percentage}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    
    </div>  
        <Footer /> </div>
  )
}


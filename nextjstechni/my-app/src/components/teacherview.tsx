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

  const addGrade = (index: number, newPoints: number) => {
    setStudents(prevStudents => {
      const updatedStudents = [...prevStudents]
      const student = updatedStudents[index]
      student.points += newPoints
      student.percentage = Math.round((student.points / student.maxPoints) * 100)
      return updatedStudents
    })
  }

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
                        <DropdownMenuTrigger asChild>
                          <Button size="icon" variant="outline" className="ml-2">
                            <Pencil className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>
                            <form onSubmit={(e) => {
                              e.preventDefault()
                              const form = e.target as HTMLFormElement
                              const points = parseInt(form.points.value)
                              if (!isNaN(points)) {
                                addGrade(index, points)
                                form.reset()
                              }
                            }} className="flex items-center space-x-2">
                              <Input 
                                type="number" 
                                name="points"
                                placeholder="Points" 
                                className="w-20"
                              />
                              <Button type="submit" size="sm">Add</Button>
                            </form>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
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
  )
}


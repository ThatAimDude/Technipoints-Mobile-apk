'use client'

import { useState } from 'react'
import { Progress } from "@/components/ui/progress"
import './subject-progress.css'


interface PointEntry {
  id: string
  source: 'Quiz' | 'Test' | 'Homework'
  date: string
  pointsEarned: number
  totalPoints: number
}

interface SubjectProgressProps {
  subject: string
  totalPoints: number
  maxPoints: number
  pointEntries: PointEntry[]
}

export default function SubjectProgress({ subject, totalPoints, maxPoints, pointEntries }: SubjectProgressProps) {
  const [openItems, setOpenItems] = useState<string[]>([])
  const [hoveredItem, setHoveredItem] = useState<string | null>(null) // Define hoveredItem state

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  const progressPercentage = (totalPoints / maxPoints) * 100

  const colorClasses = ['color1', 'color2', 'color3', 'color4', 'color5']

  return (
    <div className="container">
      <h2 className="text-2xl">{subject}</h2>
      <div className="mb-6">
        <Progress value={progressPercentage} className="h-4" />
        <p className="text-sm">
          Total Points: {totalPoints} / {maxPoints}
        </p>
      </div>
      <div className="flex">
        {pointEntries.map((entry) => {
          const colorClass = colorClasses[entry.pointsEarned % colorClasses.length]; 

          return (
            <div key={entry.id} 
              className="relative" 
              onMouseEnter={() => setHoveredItem(entry.id)} // Set hovered item on hover
              onMouseLeave={() => setHoveredItem(null)} // Clear hovered item on mouse leave
            >
              <div>
                <span className={`grades ${colorClass}`}>{entry.pointsEarned}</span>
              </div>
              {hoveredItem === entry.id && ( // Render dropdown if item is hovered
                <div className="dropdown">
                  <p className="font-semibold">{entry.source}</p>
                  <p>Date: {entry.date}</p>
                  <p>
                    Points: {entry.pointsEarned} / {entry.totalPoints}
                  </p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
    

)
}

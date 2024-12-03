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

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  const progressPercentage = (totalPoints / maxPoints) * 100

  const colorClasses = ['color1', 'color2', 'color3', 'color4', 'color5']

  return (
    <div className="container">
      <h2 className="text-2xl font-bold mb-4">{subject}</h2>
      <div className="mb-6">
        <Progress value={progressPercentage} className="h-4 bg-gray-200"  />
        <p className="text-sm text-gray-600 mt-2">
          Total Points: {totalPoints} / {maxPoints}
        </p>
      </div>
      <div className="flex flex-wrap gap-1">
        {pointEntries.map((entry) => {
          const colorClass = colorClasses[entry.pointsEarned % colorClasses.length]; 

          return (
            <div key={entry.id} className="relative">
              <div onClick={() => toggleItem(entry.id)}>
                <span className={`grades ${colorClass}`}>{entry.pointsEarned}</span>
              </div>
              {openItems.includes(entry.id) && (
                <div className="dropdown">
                  <p className="font-semibold">{entry.source}</p>
                  <p>Date: {entry.date}</p>
                  <p>Points: {entry.pointsEarned} / {entry.totalPoints}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

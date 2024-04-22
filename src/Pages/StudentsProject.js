import React from 'react'
import students from './StudentData'
import StudentCard from './StudentCard'
const StudentsProject = () => {
  

  return (
    <div className='center gap-10 mt-40 w-3/5 m-auto '>
        {students.map((student,index) => <StudentCard student={student} delay={index * 0.1}/>)}
    </div>
  )
}

export default StudentsProject
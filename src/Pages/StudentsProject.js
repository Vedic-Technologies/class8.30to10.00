import React from 'react'
import students from './StudentData'
import StudentCard from './StudentCard'
const StudentsProject = () => {
  

  return (
    <div className='center gap-10 mt-40 w-3/5 m-auto '>
        {students.map((student) => <StudentCard student={student}/>)}
    </div>
  )
}

export default StudentsProject
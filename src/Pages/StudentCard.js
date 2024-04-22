import { motion } from 'framer-motion';

const StudentCard = ({ student, delay }) => {
  return (
    <motion.div 
      className="h-[550px] p-3 max-w-md rounded overflow-hidden shadow-lg my-4 border-2 bg-white"
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{ delay: delay, type: 'spring', stiffness: 120 }}
      whileHover={{ scale: 1.05 }}
    >
      <img className="w-full rounded" src={student.studentPicture} alt={student.studentName} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{student.studentName}</div>
        <p className="text-gray-700 text-base">
          <strong>Student ID:</strong> {student.studentId}<br />
          <strong>Roll Number:</strong> {student.rollNum}<br />
          <strong>Semester:</strong> {student.sem}<br />
          <strong>Phone Number:</strong> {student.phoneNumber}<br />          
        </p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
          View GitHub
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          View Projects
        </button>
      </div>
    </motion.div>
  );
}

export default StudentCard;

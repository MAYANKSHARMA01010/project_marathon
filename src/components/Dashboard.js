import { useState } from "react";

function Dashboard() {
    const [students, setStudents] = useState(
        [{
          rollNumber: 123,
          name: "newton",
          email: "newton@gmail.com"
        },{
          rollNumber: 124,
          name: "aakash",
          email: "aakash@gmail.com"
        }, {
            rollNumber: 125,
            name: "anish",
            email: "anish@gmail.com"
        }]
    )
    return (
        <>
          <div className="container">
            <div className="header">
              <h3 style={{flex: 0.33, textAlign: "center"}}>Enrollment Number</h3>
              <h3 style={{flex: 0.33, textAlign: "center"}}>Name</h3>
              <h3 style={{flex: 0.33, textAlign: "center"}}>Email</h3>
            </div>
            {students.map((student) =>  <div className="student">
              <h3 style={{flex: 0.25, textAlign: "center", backgroundColor: "grey"}}>{student.rollNumber}</h3>
              <h3 style={{flex: 0.25, textAlign: "center", backgroundColor: "violet"}}>{student.name}</h3>
              <h3 style={{flex: 0.25, textAlign: "center", backgroundColor: "green"}}>{student.email}</h3>
            </div>)}
          </div>
        </>
    )
}

export default Dashboard;
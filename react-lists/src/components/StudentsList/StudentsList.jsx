const StudentsList = () => {

    const students = ['Marc', 'Lucy', 'Anna']

    return (
        students.map((eachStudent, index) => {
            return <h1 key={index}>{eachStudent}</h1>
        })
    )
}

export default StudentsList
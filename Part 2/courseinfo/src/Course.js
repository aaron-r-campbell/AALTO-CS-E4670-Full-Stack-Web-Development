const Part = ({ name,exercises }) => {
    return (
        <p>{name} {exercises}</p>
    )
}

const Content = ({ parts }) => {
    let total = parts.map(part => part.exercises).reduce((s, p) => s + p, 0)
    return (
        <div>
            {parts.map(part => <Part key={part.id} {...part} />)}
            <strong>total of {total} exercises</strong>
        </div>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <h1> {course.name} </h1>
            <Content parts={course.parts} />
        </div>
    )
}

export default Course
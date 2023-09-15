import MainHeader from './MainHeader'
import SecondHeader from './SecondHeader'
import Part from './Part'
import Total from './Total'

const Course = ({courses}) => {

    const total = courses[0].parts.reduce((total, part) => {
        return total + part.exercises
    },0)
    
    const total2 = courses[1].parts.reduce((total, part) => {
        return total + part.exercises
    },0)

    return (    
    
        <div>
            <MainHeader name="Web Development Curriculum" />
            <SecondHeader key={courses[0].id} name={courses[0].name} />
                {courses[0].parts.map(part => 
                  <Part key={part.id} parts={part.name} exercises={part.exercises} />
                )}
                <Total text={`total of ${total} exercises`}  />
            <SecondHeader key={courses[1].id} name={courses[1].name} />
                 {courses[1].parts.map(part => 
                    <Part key={part.id} parts={part.name} exercises={part.exercises} />
                 )}    
                <Total text={`total of ${total2} exercises`}  />
        </div>
    )
}

export default Course
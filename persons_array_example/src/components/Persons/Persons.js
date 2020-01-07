import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.users.map((user, index) => {
    return <Person
        name={user.name}
        age={user.age}
        key={user.id}
        clicked={() => props.clicked(index)}
        changed={(event) => props.changed(event, user.id)} />
});

export default persons;
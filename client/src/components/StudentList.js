import React, {Component} from 'react';
import { Button, Image, List } from 'semantic-ui-react';
import { Container } from 'semantic-ui-react';

import StudentListItem from './StudentListItem';

class StudentList extends Component {

    render (){
        return (
            <StudentListItem />
        )
    }
};

export default StudentList;
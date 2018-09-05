import React , {Component} from 'react';
import { Button, Image, List } from 'semantic-ui-react';
import { Container } from 'semantic-ui-react'

class StudentListItem extends Component {
    render (){
        return (
            <div>
                <Container>
                <List divided verticalAlign='middle'>
                <List.Item>
                <List.Content floated='right'>
                    <Button basic color='green'>Check-In</Button>
                </List.Content>
                <Image avatar src={require('../images/pablo.png')} />
                <List.Content>Pablo</List.Content>
            </List.Item>
            <List.Item>
                <List.Content floated='right'>
                    <Button>Check-In</Button>
                </List.Content>
                <Image avatar src={require('../images/greg.png')} />
                <List.Content>Greg</List.Content>
            </List.Item>
            <List.Item>
                <List.Content floated='right'>
                    <Button>Check-In</Button>
                </List.Content>
                <Image avatar src={require('../images/samurai.png')} />
                <List.Content>Kevin</List.Content>
            </List.Item>
            <List.Item>
                <List.Content floated='right'>
                    <Button basic color='green'>Check-In</Button>
                </List.Content>
                <Image avatar src={require('../images/samurai.png')} />
                <List.Content>Thomas</List.Content>
            </List.Item>
            <List.Item>
                <List.Content floated='right'>
                    <Button basic color='green'>Check-In</Button>
                </List.Content>
                <Image avatar src={require('../images/bernadette.png')} />
                <List.Content>Bernadette</List.Content>
            </List.Item>
            <List.Item>
                <List.Content floated='right'>
                    <Button basic color='green'>Check-In</Button>
                </List.Content>
                <Image avatar src={require('../images/faustina.png')} />
                <List.Content>Faustina</List.Content>
            </List.Item>
            <List.Item>
                <List.Content floated='right'>
                    <Button>Check-In</Button>
                </List.Content>
                <Image avatar src={require('../images/plotine.png')} />
                <List.Content>Plotina</List.Content>
            </List.Item>
            </List>
            </Container>
            </div>
            
        )
    }
}

export default StudentListItem
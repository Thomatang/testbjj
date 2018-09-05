import React , {Component} from 'react';
import { Responsive, Button, Container, Image, List } from 'semantic-ui-react';

class ClassRoom extends Component {
    render (){
        return (
            <div>
                <Container>
                    <List>
                        <List.Item>
                            <List.Content floated='right'>
                                <Responsive as={Button} content='Check-Out' minWidth={768} basic color='black'/>
                            </List.Content>
                            <Image avatar src={require('../images/pablo.png')} />
                            <List.Content>
                            <List.Header as='a'>Pablo</List.Header>
                            <List.Description>Loves skateboarding and teaching BJJ</List.Description>
                        </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Content floated='right'>
                                <Responsive as={Button} content='Check-Out' minWidth={768} basic color='black'/>
                            </List.Content>
                            <Image avatar src={require('../images/samurai.png')} />
                            <List.Content>
                            <List.Header as='a'>Thomas</List.Header>
                            <List.Description>vegan software engineer</List.Description>
                        </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Content floated='right'>
                                <Responsive as={Button} content='Check-Out' minWidth={768} basic color='black'/>
                            </List.Content>
                            <Image avatar src={require('../images/bernadette.png')} />
                            <List.Content>
                            <List.Header as='a'>Faustina</List.Header>
                            <List.Description>Can be seen travelling around the world and playing guitar</List.Description>
                        </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Content floated='right'>
                                <Responsive as={Button} content='Check-Out' minWidth={768} basic color='black'/>
                            </List.Content>
                            <Image avatar src={require('../images/faustina.png')} />
                            <List.Content>
                            <List.Header as='a'>Bernadette</List.Header>
                            <List.Description>Enjoys litterature and the company of her friends.</List.Description>
                        </List.Content>
                        </List.Item>
                        <Container>
                            <List.Item className='flexCenterButton'>
                                <Button basic color='red'>End Class</Button>
                            </List.Item>
                        </Container>
                    </List>
            </Container>
            </div>
            
        )
    }
}

export default ClassRoom
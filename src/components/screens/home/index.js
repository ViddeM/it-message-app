import React, { Component } from 'react'
import { HomeContainer } from './styles'
import { Header } from '../../views/header'
import { Footer } from '../../views/footer'
import { Body } from '../../views/body'

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            totalCount: 2000,
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    render () {
        return (
            <HomeContainer>
                <Header />
                <Body 
                    count={this.state.count}
                    totalCount={this.state.totalCount}
                    onInputChange={this.onInputChange} 
                />
                <Footer />
            </HomeContainer>
        );
    };

    onInputChange(event) {
        this.setState({
            count: event.target.value.length
        });
    }
}

export default HomeScreen;
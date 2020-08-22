import React, { Component } from 'react';
import CardList from '../Cardlist/Cardlist';
import SearchBox from '../SearchBox/SearchBox';
import Scroll from '../Scroll/Scroll';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Header from '../Header/Header';
import './MainPage.css';

class MainPage extends Component {
    componentDidMount() {
        this.props.onRequestRobots();
    }

    filterRobots = () => {
        const { robots, searchField } = this.props;
        console.log(robots);
        return robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
    }

    render() {
        const { onSearchChange, isPending } = this.props

        return (
            <div className='tc'>
                <Header />
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    { isPending ? <h1>Loading...</h1> :
                        <ErrorBoundary>
                            <CardList robots={this.filterRobots()} />
                        </ErrorBoundary>
                    }
                </Scroll>
            </div>
        );
        }
    }

export default MainPage;
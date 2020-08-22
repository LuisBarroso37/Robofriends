import React, { Component } from 'react';
import CardList from '../Cardlist/Cardlist';
import SearchBox from '../SearchBox/SearchBox';
import Scroll from '../Scroll/Scroll';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Header from '../Header/Header';
import './MainPage.css';
import { Props, IRobot } from '../../interfaces';

class MainPage extends Component<Props, {}> {
    componentDidMount(): void {
        this.props.onRequestRobots();
    }

    filterRobots = () : Array<IRobot> => {
        const { robots, searchField } = this.props;
        
        return robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
    }

    render(): JSX.Element {
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
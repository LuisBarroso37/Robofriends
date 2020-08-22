import React, { Component } from 'react';
import MainPage from '../components/MainPage/MainPage';
import { setSearchField, requestRobots } from '../actions/actions';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { IStateProps, IStateRobots, IStateSearch, Props } from '../interfaces';

const mapStateToProps = (state: {searchRobots: IStateSearch, requestRobots: IStateRobots}) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending
    }
};

const mapDispatchToProps = (dispatch: ThunkDispatch<IStateProps, Error, AnyAction>) => {
    return {
        onSearchChange: (event: React.ChangeEvent<HTMLInputElement>)  => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
};

class App extends Component<IStateProps> {
    render(): JSX.Element {
       return <MainPage {...this.props as Props}/>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
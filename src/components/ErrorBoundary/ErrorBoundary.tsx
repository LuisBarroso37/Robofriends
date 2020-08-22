import React, { Component } from 'react';
import { IStateErrorBoundary } from '../../interfaces';

class ErrorBoundary extends Component<{}, IStateErrorBoundary> {
    constructor(props: never) {
        super(props);
        this.state = {
            hasError: false
        }
    };

    componentDidCatch(error: Error | null, info: object) {
        this.setState({
            hasError: true
        });
    };

    render() {
        if (this.state.hasError) {
            return <h1>Oooops. That is not good</h1>
        }

        return this.props.children
    };
};

export default ErrorBoundary;
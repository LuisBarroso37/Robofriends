import * as React from "react";

// App.tsx, reducers.tsx
export interface IStateSearch {
    searchField: string
};

// Card.tsx, Cardlist.tsx, App.tsx
export interface IRobot {
    id: number,
    name: string,
    email: string
};

// reducers.tsx
export interface IStateRobots {
    isPending: boolean,
    robots: Array<IRobot>,
    error?: string
};

// App.tsx
export type IStateProps = IStateRobots & IStateSearch;


// SearchBox.tsx
export interface ISearchBoxProps {
    searchChange(event: React.SyntheticEvent<HTMLInputElement>): void 
}

//
export interface IDispatchProps {
    onSearchChange: (event: React.SyntheticEvent<HTMLInputElement>) => void,
    onRequestRobots: () => Array<IRobot>
};

// App.tsx
export type Props = IStateProps & IDispatchProps;

// Scroll.tsx
export type ScrollProps = {
    children?: JSX.Element
};

// ErrorBoundary.tsx
export interface IStateErrorBoundary {
    hasError: boolean
};
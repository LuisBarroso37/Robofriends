import { 
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from '../constants/constants';

import * as actions from '../actions/actions';
import * as reducers from '../reducers/reducers';

describe('searchRobots', () => {
    const initialStateSearch = {
        searchField: ''
    };
    
    it('should return the initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual(initialStateSearch);
    });

    it('should handle CHANGE_SEARCHFIELD', () => {
        expect(reducers.searchRobots(initialStateSearch, actions.setSearchField('abc')))
        .toEqual({searchField: 'abc'});
    });
});

describe('requestRobots', () => {
    const initialStateRobots = {
        isPending: false,
        robots: [],
        error: ''
    };

    it('should return the initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
    });

    it('should handle REQUEST_ROBOTS_PENDING', () => {
        expect(reducers.requestRobots(initialStateRobots, {type: REQUEST_ROBOTS_PENDING}))
        .toEqual({
            isPending: true,
            robots: [],
            error: ''
        });
    });

    it('should handle REQUEST_ROBOTS_SUCCESS', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_SUCCESS, 
            payload: [{
                id: '123',
                name: 'test',
                email: 'test@gmail.com'
            }]
        }))
        .toEqual({
            isPending: false,
            robots: [{
                id: '123',
                name: 'test',
                email: 'test@gmail.com'
            }],
            error: ''
        });
    });

    it('should handle REQUEST_ROBOTS_FAILED', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_FAILED, 
            payload: 'error'
        }))
        .toEqual({
            isPending: false,
            robots: [],
            error: 'error'
        });
    });
});
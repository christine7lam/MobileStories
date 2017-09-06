/**
 * Copyright 2017 AT&T, Inc.
 *
 * @flow
 */

'use strict';

import * as types from '../actions/types'
import createReducer from '../lib/createReducer'

const initialState = {
    category: {
        index: 0,
        title: 'On Now'
    },
    story: {
        index: 0,
        content: '',
        size: 0
    }
};

export const browseStories = createReducer(initialState, {
    [types.SET_STORY](state, action) {
        let newState = {...state}
        newState.story.content = action.story;
        newState.story.index = action.index;
        newState.story.index = action.index;
        return newState;
    },
});
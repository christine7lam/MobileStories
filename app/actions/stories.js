/**
 * Copyright 2017 AT&T, Inc.
 *
 * @flow
 */

'use strict';

import * as types from './types'
import Stories from '../data/Stories'

export function setStory(category = 'On Now', index) {
    let stories = Stories.stories;
    let storiesPerCat = stories[category];
    let coverImgURL = storiesPerCat.coverImgURL;
    let getStory = storiesPerCat.gallery[0][index];

    return {
        type: types.SET_STORY,
        coverImgURL: coverImgURL,
        story: getStory
    }
}
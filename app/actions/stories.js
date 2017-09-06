/**
 * Copyright 2017 AT&T, Inc.
 *
 * @flow
 */

'use strict';

import * as types from './types'
import Stories from '../data/Stories'


/**
 *
 * @param category
 * @param index
 * @returns {{type, coverImgURL: string, story: *}}
 */
export function setStory(category = 'On Now', index) {
    let stories = Stories.stories;
    let storiesPerCat = stories[category];
    let coverImgURL = storiesPerCat.coverImgURL;
    let gallery = storiesPerCat.gallery;
    if (index < gallery.length -1) {
        index++;
    }
    let getStory = storiesPerCat.gallery[index];

    return {
        type: types.SET_STORY,
        coverImgURL: coverImgURL,
        index,
        story: getStory
    }
}

export function setStoryIndex(index) {
    return {
        type: types.SET_INDEX,
        index
    }
}
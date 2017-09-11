/**
 * Copyright 2017 AT&T, Inc.
 *
 * @flow
 */

'use strict';

import * as types from './types'
import Stories from '../data/onNow'


/**
 *
 * @param category
 * @param index
 * @returns {{type, coverImgURL: string, story: *}}
 */
export function setStory(categoryIndex, index) {
    let stories = Stories.stories;
    let category = Stories.categories[categoryIndex];
    let storiesPerCat = stories[category];
    let coverImgURL = storiesPerCat.coverImgURL;
    let gallery = storiesPerCat.gallery;


    if (index < gallery.length -1) {
        index++;
    } else {
        if (categoryIndex < Stories.categories.length - 1) {
            categoryIndex++;
            index = 0;
            setStory(categoryIndex, index);
        }
    }
    let getStory = storiesPerCat.gallery[index];

    return {
        type: types.SET_STORY,
        coverImgURL,
        categoryIndex,
        index,
        story: getStory
    }
}

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
export function setStory(categoryIndex, index) {
    let stories = Stories.stories;
    let category = Stories.categories[categoryIndex];
    let storiesPerCat = stories[category];
    let coverImgURL = storiesPerCat.coverImgURL;
    let gallery = storiesPerCat.gallery;


    if (index < gallery.length -1) {
        index++;
    } else {
        if (categoryIndex < 3) {
            categoryIndex++;
            index = 0;
            setStory(categoryIndex, index);
        }
    }
    let getStory = storiesPerCat.gallery[index];
    //alert(JSON.stringify(getStory));

    return {
        type: types.SET_STORY,
        coverImgURL: coverImgURL,
        categoryIndex,
        index,
        story: getStory
    }
}

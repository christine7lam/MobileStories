/**
 * Copyright 2017 AT&T, Inc.
 *
 * @flow
 */

'use strict';

module.exports = {
    islands: ["Locals", "Favorites", "General", "Sports", "Kids", "Premiums", "News", "Music", "Spanish", "Category"],
    channelIslands: {
        "Locals": {
            channels: ["KCBS", "KNBC", "KTLA", "KABC", "KCAL", "KTTV"],
            startChannelIndex: 1,
            endChannelIndex: 99
        },
        "Favorites": {
            channels: ["espn", "usa", "nfl", "nbc", "fox","amc", "nbc", "tnt", "cnn", "disney", "fox","amc"],
            startChannelIndex: 100,
            endChannelIndex: 199
        },
        "General": {
            channels: ["FOX", "FX", "ABC", "NBC", "WB","FOX", "FX", "ABC", "NBC", "WB"],
            startChannelIndex: 200,
            endChannelIndex: 299
        }
    }
};

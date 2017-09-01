/**
 * Copyright 2017 AT&T, Inc.
 *
 * @flow
 */

'use strict';

import * as RecipeActions from './recipes'
import * as NavigationActions from './navigation'
import * as StoryActions from './stories'

export const ActionCreators = Object.assign({},
  RecipeActions,
  NavigationActions,
  StoryActions
);

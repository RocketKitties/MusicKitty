/******************************************************************************\
|                                                                              |
|                               sort-menu-view.js                              |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This is a view for displaying sort dropdown menus.                    |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com        |
\******************************************************************************/

import SortMenuView from '../../../../../../views/apps/common/header-bar/menu-bar/menus/sort-menu-view.js';

export default SortMenuView.extend({

	//
	// attributes
	//

	events: {
		'click .sort-by a': 'onClickSortBy',
		'click .sort-order a': 'onClickSortOrder'
	},

	//
	// querying methods
	//

	selected: function() {
		let preferences = this.parent.app.preferences;
		let sortKind = preferences.get('sort_kind');
		let sortOrder = preferences.get('sort_order');

		return {
			'sort-by-title': sortKind == 'title',
			'sort-by-priority': sortKind == 'priority',
			'sort-by-kind': sortKind == 'kind',
			'sort-by-create-date': sortKind == 'create_date',
			'sort-by-modify-date': sortKind == 'modify_date',
			'sort-by-due-date': sortKind == 'due_date',
			'sort-increasing': sortOrder == 'increasing',
			'sort-decreasing': sortOrder == 'decreasing'
		};
	}
});
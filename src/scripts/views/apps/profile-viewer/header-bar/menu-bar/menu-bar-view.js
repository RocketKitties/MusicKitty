/******************************************************************************\
|                                                                              |
|                               menu-bar-view.js                               |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This defines a view used for showing an app's menu bar.               |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com        |
\******************************************************************************/

import MenuBarView from '../../../../../views/apps/desktop/header-bar/menu-bar/menu-bar-view.js';
import FileMenuView from '../../../../../views/apps/profile-viewer/header-bar/menu-bar/menus/file-menu-view.js';
import EditMenuView from '../../../../../views/apps/profile-viewer/header-bar/menu-bar/menus/edit-menu-view.js';
import ViewMenuView from '../../../../../views/apps/profile-viewer/header-bar/menu-bar/menus/view-menu-view.js';
import ShareMenuView from '../../../../../views/apps/profile-viewer/header-bar/menu-bar/menus/share-menu-view.js';
import HelpMenuView from '../../../../../views/apps/profile-viewer/header-bar/menu-bar/menus/help-menu-view.js';

export default MenuBarView.extend({

	//
	// rendering methods
	//

	onRender: function() {

		// call superclass method
		//
		MenuBarView.prototype.onRender.call(this);

		// show dropdown menus
		//
		this.showChildView('file', new FileMenuView());
		this.showChildView('edit', new EditMenuView());
		this.showChildView('view', new ViewMenuView());
		this.showChildView('share', new ShareMenuView());
		this.showChildView('help', new HelpMenuView());

		// hide edit dropdown if not current user
		//
		this.setMenuHidden('edit', !this.parent.app.model.is(application.session.user));
	}
});
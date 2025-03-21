/******************************************************************************\
|                                                                              |
|                               chat-tile-view.js                              |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This defines a tile item view of a chat.                              |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com        |
\******************************************************************************/

import TileView from '../../../../../../views/items/tiles/tile-view.js';

export default TileView.extend({

	//
	// attributes
	//

	template: template(`
		<div class="tile">
			<div class="icon">
				<% if (url) { %>
				<div class="thumbnail" style="background-image:url(<%= url %>)" >
					<img style="display:none" src="<%= url %>" onerror="this.classList.add('lost')" />
					<i class="placeholder far fa-user"></i>
				</div>
				<% } else { %>
				<i class="fa fa-user"></i>
				<% } %>
			</div>
		
			<div class="name" spellcheck="false"><%= name %></div>
			<div class="badges"></div>
		</div>
		
		<div class="specifics">
			<span class="details"><%= details %></span>
		</div>
	`),

	//
	// getting methods
	//

	getThumbnailUrl: function(member) {
		if (member) {
			return member.getProfilePhotoUrl({
				min_size: Math.floor(this.thumbnailSize * (window.devicePixelRatio || 1))
			});		
		}
	},

	//
	// rendering methods
	//

	templateContext: function() {
		let member = this.model.getUser();
		return {
			url: this.getThumbnailUrl(member),
			name: this.getName(member),
			is_online: member && member.isOnline(),
			is_active: member && member.isActive(),
			details: this.getDetails()
		};
	}
});
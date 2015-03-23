(function () {
'use strict';

	angular
	.module('arsenicWineApp')
	.factory('mainService' , [mainService]);

	function mainService() {

		//define variables
		var exports = {
		    getWines: getWines
		};

		return exports;

		function getWines(){

			var wineList = [
				'Acronym (GR8RW Red Blend)',
				'Almaden (Heritage White Zinfandel, Heritage Moscato, Heritage Chardonnay, Mountain Burgundy, Mountain Rhine, Mountain Chablis)',
				'Arrow Creek (Coastal Series Cabernet Sauvignon)',
				'Bandit (Pinot Grigio, Chardonnay, Cabernet Sauvignon)',
				'Bay Bridge (Chardonnay)',
				'Beringer (White Merlot, White Zinfandel, Red Moscato, Refreshingly Sweet Moscato)',
				'Charles Shaw aka "Two Buck Chuck" (White Zinfandel)',
				'Colores Del Sol (Malbec)',
				'Glen Ellen by Concannon (Glen Ellen Reserve Pinot Grigio, Glen Ellen Reserve Merlot)',
				'Concannon (Selected Vineyards Pinot Noir)',
				'Cook\'s (Spumante)',
				'Corbett Canyon (Pinot Grigio, Cabernet Sauvignon)',
				'Cupcake (Malbec)',
				'Fetzer (Moscato, Pinot Grigio)',
				'Fisheye (Pinot Grigio)',
				'Flipflop (Pinot Grigio, Moscato, Cabernet Sauvignon)',
				'Foxhorn (White Zinfandel)',
				'Franzia (Vintner Select White Grenache, Vintner Select White Zinfandel, Vintner Select White Merlot, Vintner Select Burgundy)',
				'Hawkstone (Cabernet Sauvignon)',
				'HRM Rex Goliath (Moscato)',
				'Korbel (Sweet Rose Sparkling Wine, Extra Dry Sparkling Wine)',
				'Menage A Trois (Pinot Grigo, Moscato, White Blend, Chardonnay, Rose, Cabernet Sauvignon, California Red Wine)',
				'Mogen David (Concord, Blackberry Wine)',
				'Oak Leaf (White Zinfandel)',
				'Pomelo (Sauvignon Blanc)',
				'R Collection By Raymond (Chardonnay)',
				'Richards Wild Irish Rose (Red Wine)',
				'Seaglass (Sauvignon Blanc)',
				'Simply Naked (Moscato)',
				'Smoking Loon (Viognier)',
				'Sutter Home (Sauvignon Blanc, Gerwurztraminer, Pink Moscato, Pinot Grigio, Moscato, Chenin Blanc, Sweet Red, Riesling, White Merlot, Merlot, White Zinfandel)',
			];

			return wineList;
		}

	}
})();

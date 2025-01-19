$(function () {
	"use strict";
	$(document).ready(function () {
	  $('#basic-datatables').DataTable({
		retrieve: true,  // Ensures DataTable is not reinitialized
		paging: true,    // Enables pagination
		searching: true, // Enables the search bar
		info: true,      // Shows info about the entries (e.g., "Showing 1 to 10 of 57 entries")
		stateSave: true  // Saves the table state (pagination, filters)
	  });
	});
  });
  
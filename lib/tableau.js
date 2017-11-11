$(document).ready( function () {
	$('#test_table').DataTable({
		select: true
	});
	$('#test').DataTable({
		select: true,
		"ajax": "lib/get_data.php"
	});
});
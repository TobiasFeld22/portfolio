$(function () {
	$("#navbar-industries").load("includes/navbar.html");
});

function loadSTL() {
	console.log("Loading stl's");
	var stl_viewer = new StlViewer(document.getElementById("stl_cont"), {
		models: [{ id: 0, filename: "../files/complete_cactus.stl" }],
		auto_rotate: true,
		cameray: -3,
		cameraX: -1,
	});
}

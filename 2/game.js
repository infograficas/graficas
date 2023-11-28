window.addEventListener('DOMContentLoaded', function() {
    var canvas = document.getElementById('renderCanvas');

    var engine = new BABYLON.Engine(canvas, true);
    var scene = new BABYLON.Scene(engine);

    var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 4, 5, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    var box = BABYLON.MeshBuilder.CreateBox("box", {}, scene);

    window.addEventListener('resize', function() {
        engine.resize();
    });

    engine.runRenderLoop(function() {
        scene.render();
        box.rotation.y += 0.01;
    });
});

if (app.documents.length > 0) {
    var doc = app.activeDocument;

    var fileName = doc.name;

    var fileNameWithoutExtension = fileName.split('.')[0];

    var textLayer = doc.artLayers.getByName('NomeDaCamada');

    if (textLayer != null && textLayer.kind == LayerKind.TEXT) {
        textLayer.textItem.contents = fileNameWithoutExtension;

        doc.activeLayer = doc.artLayers[0];
        doc.activeLayer = textLayer;
        doc.activeLayer = doc.artLayers[0];
    } else {
        alert("Camada de texto 'NomeDaCamada' não encontrada.");
    }
} else {
    alert("Nenhum documento aberto no Photoshop.");
}
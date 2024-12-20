function areaOfFigures(input) {

    let figure = input[0];
    let figureSize = input[1];
    let figureSize2 = input[2];
    area = 0;


    if (figure === 'square') {
        area = figureSize * figureSize
        console.log(area.toFixed(3))

    } else if (figure === 'rectangle') {
        area = figureSize * figureSize2
        console.log(area.toFixed(3))

    } else if (figure === 'circle') {
        area = Math.PI * figureSize * figureSize
        console.log(area.toFixed(3))

    } else if (figure === 'triangle') {
        area = 0.5 * figureSize * figureSize2
        console.log(area.toFixed(3))
    }
}


areaOfFigures(['triangle', '4.5', '20'])
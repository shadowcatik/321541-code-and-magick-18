'use strict';

window.renderStatistics = function (ctx, names, times) {

  ctx.save();
  ctx.beginPath();
  ctx.moveTo(100, 10);
  ctx.lineTo(520, 10);
  ctx.lineTo(520, 280);
  ctx.lineTo(100, 280);
  ctx.closePath();
  ctx.fillStyle = '#ffffff';
  ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  ctx.shadowOffsetY = 10;
  ctx.shadowOffsetX = 10;
  ctx.fill();
  ctx.restore();

  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'black';
  ctx.fillText('Ура вы победили!', 150, 40);
  ctx.fillText('Список результатов:', 150, 60);
  ctx.textBaseline = 'hanging';

  var histoHeight = 150;
  var histoWidth = 0;
  var colWidth = 40;
  var colMargin = 50;
  var max = 1;

  for (var i = 0; i < times.length; i++) {
    var maxTime = times[i];

    if (maxTime > max) {
      max = maxTime;
    }
  }

  for (var j = 0; j < times.length; j++) {
    var name = names[j];
    var time = times[j];
    var height = time / max * histoHeight;

    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + Math.floor((Math.random() * 100) + 1) + '%, ' + Math.floor((Math.random() * 100) + 2) + '%)';
    }

    histoWidth += colMargin + colWidth;

    ctx.fillRect(histoWidth + 80, histoHeight + 80, colWidth, -height);
    ctx.fillText(name, histoWidth + 80, histoHeight + 90);
    ctx.fillText(Math.floor(time), histoWidth + 80, histoHeight - height + 80);
  }
};

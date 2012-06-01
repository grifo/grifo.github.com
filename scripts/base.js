(function() {
  var canvas, createCanvas, getDocHeight;

  getDocHeight = function() {
    var D;
    D = document;
    return Math.max(Math.max(D.body.scrollHeight, D.documentElement.scrollHeight), Math.max(D.body.offsetHeight, D.documentElement.offsetHeight), Math.max(D.body.clientHeight, D.documentElement.clientHeight));
  };

  canvas = null;

  if (canvas.getContext && canvas.addEventListener && window.innerWidth > 1440) {
    createCanvas();
  }

  createCanvas = function() {
    var attr, ctx, pos, running, val, _ref;
    canvas = document.createElement('canvas');
    canvas.width = window.innerWidth - 1200;
    canvas.height = getDocHeight() + 100;
    _ref = {
      display: 'block',
      position: 'absolute',
      top: 0,
      right: 0
    };
    for (attr in _ref) {
      val = _ref[attr];
      canvas.style[attr] = val;
    }
    document.body.appendChild(canvas);
    ctx = canvas.getContext('2d');
    ctx.fillStyle = '#543';
    ctx.globalAlpha = 0.1;
    ctx.globalCompositeOperation = 'lighter';
    pos = [0, 0];
    running = true;
    canvas.addEventListener('mousemove', function(e) {
      return pos = [e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop];
    });
    canvas.addEventListener('mouseover', function(e) {
      return running = true;
    });
    canvas.addEventListener('mouseout', function(e) {
      return running = false;
    });
    return setInterval(function() {
      var i, offsetX, offsetY, x, y, _results;
      if (!running) return;
      x = pos[0], y = pos[1];
      _results = [];
      for (i = 0; i <= 2; i++) {
        offsetX = ~~(i * Math.random() * 15) - (i * 15 / 2);
        offsetY = ~~(i * Math.random() * 15) - (i * 15 / 2);
        ctx.beginPath();
        ctx.arc(x + offsetX, y + offsetY, ~~(Math.random() * 16), 0, Math.PI * 2, true);
        ctx.closePath();
        _results.push(ctx.fill());
      }
      return _results;
    }, 1000 / 45);
  };

  window.onresize = function() {
    if (window.innerHeight > 1440) {
      if (!(canvas != null)) {
        return createCanvas();
      } else if (canvas.style.display === 'none') {
        return canvas.style.display('block');
      }
    } else if ((canvas != null) && canvas.style.display === 'block') {
      return canvas.style.display = 'none';
    }
  };

}).call(this);

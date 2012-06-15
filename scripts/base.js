// Generated by CoffeeScript 1.3.3
(function() {
  var $, $$, Request, canvas, createCanvas, displayTag, drawingBoard, getDocHeight, posts,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  $ = function(sel) {
    return Array.prototype.slice.call(document.querySelectorAll(sel));
  };

  $$ = function(sel) {
    return document.querySelector(sel);
  };

  Request = (function() {

    function Request(method, url, callback, data) {
      this.xhr = this.createXHR();
      this.send.apply(this, arguments);
    }

    Request.prototype.createXHR = function() {
      var fn, tries, _i, _len;
      tries = [
        function() {
          return new XMLHttpRequest;
        }, function() {
          return new ActiveXObject("Msxml2.XMLHTTP");
        }, function() {
          return new ActiveXObject("Msxml3.XMLHTTP");
        }, function() {
          return new ActiveXObject("Microsoft.XMLHTTP");
        }
      ];
      for (_i = 0, _len = tries.length; _i < _len; _i++) {
        fn = tries[_i];
        try {
          return fn();
        } catch (_error) {}
      }
      return false;
    };

    Request.prototype.send = function(method, url, callback, data) {
      var _this = this;
      this.xhr.open(method, url, true);
      if (data) {
        this.xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      }
      this.xhr.onreadystatechange = function() {
        if (_this.xhr.readyState === 4 && _this.xhr.status === 200) {
          return callback(_this.xhr.responseText);
        }
      };
      return this.xhr.send(data);
    };

    return Request;

  })();

  getDocHeight = function() {
    var D;
    D = document;
    return Math.max(Math.max(D.body.scrollHeight, D.documentElement.scrollHeight), Math.max(D.body.offsetHeight, D.documentElement.offsetHeight), Math.max(D.body.clientHeight, D.documentElement.clientHeight));
  };

  createCanvas = function() {
    var attr, canvas, val, _ref;
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
    return canvas;
  };

  drawingBoard = function(canvas) {
    var ctx, pos, running;
    ctx = canvas.getContext('2d');
    ctx.fillStyle = '#543';
    ctx.globalAlpha = 0.1;
    ctx.globalCompositeOperation = 'lighter';
    pos = [-50, -50];
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
      var i, offsetX, offsetY, x, y, _i, _results;
      if (!running) {
        return;
      }
      x = pos[0], y = pos[1];
      _results = [];
      for (i = _i = 0; _i <= 2; i = ++_i) {
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

  canvas = createCanvas();

  if (canvas.getContext && canvas.addEventListener && window.innerWidth > 1440) {
    drawingBoard(canvas);
  } else {
    canvas.parentNode.removeChild(canvas);
  }

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

  if ($$('.tag-list')) {
    posts = [];
    new Request('GET', '/search.json', function(data) {
      var currentTag;
      posts = JSON.parse(data);
      if (currentTag = location.hash.split('#!')[1]) {
        return displayTag(currentTag);
      }
    });
  }

  displayTag = function(tag) {
    var items, res, results;
    res = $$('.results');
    if (res != null) {
      res.parentNode.removeChild(res);
    }
    if (!tag) {
      return;
    }
    results = posts.filter(function(post) {
      return post && __indexOf.call(post.tags, tag) >= 0;
    });
    items = results.map(function(post) {
      return "<li><a href=\"" + post.url + "\">" + post.title + "</a></li>";
    });
    $$('#main').innerHTML += "<div class=\"results\">\n    <h3>" + tag + "</h3>\n    <ul>\n        " + (items.join('')) + "\n    </ul>\n</div>";
  };

  window.addEventListener('hashchange', function() {
    return displayTag(location.hash.split('#!')[1]);
  });

}).call(this);

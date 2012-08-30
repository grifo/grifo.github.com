(function() {
  var $, $$, Request, displayTag, posts,
    __indexOf = Array.prototype.indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  $ = function(sel) {
    return Array.prototype.slice.call(document.querySelectorAll(sel));
  };

  $$ = function(sel) {
    return document.querySelector(sel);
  };

  window.addEventListener('click', function(event) {
    var url;
    url = event.target.href;
    if (url && !url.match(/\/\/gri.fo/)) {
      event.preventDefault();
      return window.open(url);
    }
  });

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

  if ($$('.tag-list')) {
    posts = [];
    new Request('GET', '/search.json', function(data) {
      var currentTag;
      posts = JSON.parse(data);
      if (currentTag = location.hash.split('#!')[1]) return displayTag(currentTag);
    });
  }

  displayTag = function(tag) {
    var items, res, results;
    res = $$('.results');
    if (res != null) res.parentNode.removeChild(res);
    if (!tag) return;
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

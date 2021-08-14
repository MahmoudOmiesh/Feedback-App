// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"data/data.json":[function(require,module,exports) {
module.exports = {
  "currentUser": {
    "image": "user-images/image-zena.jpg",
    "name": "Zena Kelley",
    "username": "velvetround"
  },
  "productRequests": [{
    "id": 1,
    "title": "Add tags for solutions",
    "category": "enhancement",
    "upvotes": 112,
    "status": "suggestion",
    "description": "Easier to search for solutions based on a specific stack.",
    "comments": [{
      "id": 1,
      "content": "Awesome idea! Trying to find framework-specific projects within the hubs can be tedious",
      "user": {
        "image": "user-images/image-suzanne.jpg",
        "name": "Suzanne Chang",
        "username": "upbeat1811"
      }
    }, {
      "id": 2,
      "content": "Please use fun, color-coded labels to easily identify them at a glance",
      "user": {
        "image": "user-images/image-thomas.jpg",
        "name": "Thomas Hood",
        "username": "brawnybrave"
      }
    }]
  }, {
    "id": 2,
    "title": "Add a dark theme option",
    "category": "feature",
    "upvotes": 99,
    "status": "suggestion",
    "description": "It would help people with light sensitivities and who prefer dark mode.",
    "comments": [{
      "id": 3,
      "content": "Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.",
      "user": {
        "image": "user-images/image-elijah.jpg",
        "name": "Elijah Moss",
        "username": "hexagon.bestagon"
      }
    }, {
      "id": 4,
      "content": "Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and  apparently saves battery life.",
      "user": {
        "image": "user-images/image-james.jpg",
        "name": "James Skinner",
        "username": "hummingbird1"
      },
      "replies": [{
        "content": "While waiting for dark mode, there are browser extensions that will also do the job. Search for 'dark theme' followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.",
        "replyingTo": "hummingbird1",
        "user": {
          "image": "user-images/image-anne.jpg",
          "name": "Anne Valentine",
          "username": "annev1990"
        }
      }, {
        "content": "Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I'd prefer not to use one of such extensions, however, for security and privacy reasons.",
        "replyingTo": "annev1990",
        "user": {
          "image": "user-images/image-ryan.jpg",
          "name": "Ryan Welles",
          "username": "voyager.344"
        }
      }]
    }]
  }, {
    "id": 3,
    "title": "Q&A within the challenge hubs",
    "category": "feature",
    "upvotes": 65,
    "status": "suggestion",
    "description": "Challenge-specific Q&A would make for easy reference.",
    "comments": [{
      "id": 5,
      "content": "Much easier to get answers from devs who can relate, since they've either finished the challenge themselves or are in the middle of it.",
      "user": {
        "image": "user-images/image-george.jpg",
        "name": "George Partridge",
        "username": "soccerviewer8"
      }
    }]
  }, {
    "id": 4,
    "title": "Add image/video upload to feedback",
    "category": "enhancement",
    "upvotes": 51,
    "status": "suggestion",
    "description": "Images and screencasts can enhance comments on solutions.",
    "comments": [{
      "id": 6,
      "content": "Right now, there is no ability to add images while giving feedback which isn't ideal because I have to use another app to show what I mean",
      "user": {
        "image": "user-images/image-javier.jpg",
        "name": "Javier Pollard",
        "username": "warlikeduke"
      }
    }, {
      "id": 7,
      "content": "Yes I'd like to see this as well. Sometimes I want to add a short video or gif to explain the site's behavior..",
      "user": {
        "image": "user-images/image-roxanne.jpg",
        "name": "Roxanne Travis",
        "username": "peppersprime32"
      }
    }]
  }, {
    "id": 5,
    "title": "Ability to follow others",
    "category": "feature",
    "upvotes": 42,
    "status": "suggestion",
    "description": "Stay updated on comments and solutions other people post.",
    "comments": [{
      "id": 8,
      "content": "I also want to be notified when devs I follow submit projects on FEM. Is in-app notification also in the pipeline?",
      "user": {
        "image": "user-images/image-victoria.jpg",
        "name": "Victoria Mejia",
        "username": "arlen_the_marlin"
      },
      "replies": [{
        "content": "Bumping this. It would be good to have a tab with a feed of people I follow so it's easy to see what challenges they’ve done lately. I learn a lot by reading good developers' code.",
        "replyingTo": "arlen_the_marlin",
        "user": {
          "image": "user-images/image-zena.jpg",
          "name": "Zena Kelley",
          "username": "velvetround"
        }
      }]
    }, {
      "id": 9,
      "content": "I've been saving the profile URLs of a few people and I check what they’ve been doing from time to time. Being able to follow them solves that",
      "user": {
        "image": "user-images/image-jackson.jpg",
        "name": "Jackson Barker",
        "username": "countryspirit"
      }
    }]
  }, {
    "id": 6,
    "title": "Preview images not loading",
    "category": "bug",
    "upvotes": 3,
    "status": "suggestion",
    "description": "Challenge preview images are missing when you apply a filter."
  }, {
    "id": 7,
    "title": "More comprehensive reports",
    "category": "feature",
    "upvotes": 123,
    "status": "planned",
    "description": "It would be great to see a more detailed breakdown of solutions.",
    "comments": [{
      "id": 10,
      "content": "This would be awesome! It would be so helpful to see an overview of my code in a way that makes it easy to spot where things could be improved.",
      "user": {
        "image": "user-images/image-victoria.jpg",
        "name": "Victoria Mejia",
        "username": "arlen_the_marlin"
      }
    }, {
      "id": 11,
      "content": "Yeah, this would be really good. I'd love to see deeper insights into my code!",
      "user": {
        "image": "user-images/image-jackson.jpg",
        "name": "Jackson Barker",
        "username": "countryspirit"
      }
    }]
  }, {
    "id": 8,
    "title": "Learning paths",
    "category": "feature",
    "upvotes": 28,
    "status": "planned",
    "description": "Sequenced projects for different goals to help people improve.",
    "comments": [{
      "id": 12,
      "content": "Having a path through the challenges that I could follow would be brilliant! Sometimes I'm not sure which challenge would be the best next step to take. So this would help me navigate through them!",
      "user": {
        "image": "user-images/image-george.jpg",
        "name": "George Partridge",
        "username": "soccerviewer8"
      }
    }]
  }, {
    "id": 9,
    "title": "One-click portfolio generation",
    "category": "feature",
    "upvotes": 62,
    "status": "in-progress",
    "description": "Add ability to create professional looking portfolio from profile.",
    "comments": [{
      "id": 13,
      "content": "I haven't built a portfolio site yet, so this would be really helpful. Might it also be possible to choose layout and colour themes?!",
      "user": {
        "image": "user-images/image-ryan.jpg",
        "name": "Ryan Welles",
        "username": "voyager.344"
      }
    }]
  }, {
    "id": 10,
    "title": "Bookmark challenges",
    "category": "feature",
    "upvotes": 31,
    "status": "in-progress",
    "description": "Be able to bookmark challenges to take later on.",
    "comments": [{
      "id": 14,
      "content": "This would be great! At the moment, I'm just starting challenges in order to save them. But this means the My Challenges section is overflowing with projects and is hard to manage. Being able to bookmark challenges would be really helpful.",
      "user": {
        "image": "user-images/image-suzanne.jpg",
        "name": "Suzanne Chang",
        "username": "upbeat1811"
      }
    }]
  }, {
    "id": 11,
    "title": "Animated solution screenshots",
    "category": "bug",
    "upvotes": 9,
    "status": "in-progress",
    "description": "Screenshots of solutions with animations don’t display correctly."
  }, {
    "id": 12,
    "title": "Add micro-interactions",
    "category": "enhancement",
    "upvotes": 71,
    "status": "live",
    "description": "Small animations at specific points can add delight.",
    "comments": [{
      "id": 15,
      "content": "I'd love to see this! It always makes me so happy to see little details like these on websites.",
      "user": {
        "image": "user-images/image-victoria.jpg",
        "name": "Victoria Mejia",
        "username": "arlen_the_marlin"
      },
      "replies": [{
        "content": "Me too! I'd also love to see celebrations at specific points as well. It would help people take a moment to celebrate their achievements!",
        "replyingTo": "arlen_the_marlin",
        "user": {
          "image": "user-images/image-suzanne.jpg",
          "name": "Suzanne Chang",
          "username": "upbeat1811"
        }
      }]
    }]
  }]
};
},{}],"assets/shared/icon-arrow-up.svg":[function(require,module,exports) {
module.exports = "/icon-arrow-up.15c07bf3.svg";
},{}],"assets/shared/icon-comments.svg":[function(require,module,exports) {
module.exports = "/icon-comments.55e7345e.svg";
},{}],"js/showPosts.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _iconArrowUp = _interopRequireDefault(require("../assets/shared/icon-arrow-up.svg"));

var _iconComments = _interopRequireDefault(require("../assets/shared/icon-comments.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(posts) {
  var postsContainer = document.querySelector('.posts__body');
  posts.forEach(function (post) {
    var postDiv = document.createElement('div');
    postDiv.classList.add('post');
    postDiv.innerHTML = "\n    <div class=\"post__upvote\">\n      <img src=\"".concat(_iconArrowUp.default, "\" alt=\"Upvote\" />\n      <span data-filter=\"upvotes\">").concat(post.upvotes, "</span>\n    </div>\n\n    <div class=\"post__content\">\n      <h1 class=\"post__title\">").concat(post.title, "</h1>\n      <p class=\"post__text\">").concat(post.description, "</p>\n      <div class=\"tag\">").concat(post.category, "</div>\n    </div>\n\n    <div class=\"post__replies\">\n      <img src=\"").concat(_iconComments.default, "\" alt=\"Replies\" />\n      <span data-filter=\"replies\">\n        ").concat(post.comments ? post.comments.length : 0, "\n      </span>\n    </div>\n    ");
    postsContainer.appendChild(postDiv);
  });
}
},{"../assets/shared/icon-arrow-up.svg":"assets/shared/icon-arrow-up.svg","../assets/shared/icon-comments.svg":"assets/shared/icon-comments.svg"}],"assets/suggestions/illustration-empty.svg":[function(require,module,exports) {
module.exports = "/illustration-empty.daaa623c.svg";
},{}],"js/filterPosts.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filterPosts;

var _illustrationEmpty = _interopRequireDefault(require("../assets/suggestions/illustration-empty.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function filterPosts(filterText, clickedTag) {
  var postsContainer = document.querySelector('.posts__body');
  var postTags = document.querySelectorAll('.post .tag');

  var allPosts = _toConsumableArray(document.querySelectorAll('.post'));

  var activeTag = document.querySelector('.filter .tag.active');
  activeTag.classList.remove('active');
  clickedTag.classList.add('active');
  allPosts.forEach(function (post) {
    return post.style.display = 'none';
  });
  if (document.querySelector('.none')) document.querySelector('.none').remove();

  if (filterText === 'all') {
    allPosts.forEach(function (post) {
      return post.style.display = 'flex';
    });
  }

  postTags.forEach(function (tag) {
    if ("".concat(filterText.toLowerCase()) === tag.textContent.toLowerCase()) {
      var filteredPost = tag.parentElement.parentElement;
      filteredPost.style.display = 'flex';
    }
  });

  if (allPosts.every(function (post) {
    return post.style.display === 'none';
  })) {
    var noneDiv = document.createElement('div');
    noneDiv.classList.add('none');
    noneDiv.innerHTML = "\n\t\t<img src=\".".concat(_illustrationEmpty.default, "\" alt=\"None Found\" />\n\t\t<h1 class='none__title'>There is no ").concat(filterText, " feedback yet.</h1>\n\t\t<p class='none__text'>\n\t\t\tGot a suggestion? Found a bug that needs to be squashed? We love hearing\n\t\t\tabout new ideas to improve our app.\n\t\t</p>\n\t\t<button class='btn btn-primary btn-add'>Add Feedback</button>\n\t\t");
    if (document.querySelector('.none')) document.querySelector('.none').remove();
    postsContainer.appendChild(noneDiv);
  }
}
},{"../assets/suggestions/illustration-empty.svg":"assets/suggestions/illustration-empty.svg"}],"js/selectList.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = selectListLogic;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function selectListLogic(e) {
  var selectedText = document.querySelector('.selectlist__selected');
  var activeOption = document.querySelector('.selectlist__options li.active');
  activeOption.classList.remove('active');
  e.target.classList.add('active');
  selectedText.textContent = e.target.textContent;
  var filterTerm = e.target.textContent.toLowerCase();
  selectListFilter(filterTerm);
}

function selectListFilter(filterTerm) {
  var allPosts = _toConsumableArray(document.querySelectorAll('.post'));

  var postsContainer = document.querySelector('.posts__body');

  if (filterTerm === 'least upvotes') {
    allPosts.sort(function (a, b) {
      var upvotesOne = +a.querySelector('[data-filter="upvotes"]').textContent;
      var upvotesTwo = +b.querySelector('[data-filter="upvotes"]').textContent;
      return upvotesOne - upvotesTwo;
    });
    postsContainer.innerHTML = '';
    allPosts.forEach(function (post) {
      return postsContainer.appendChild(post);
    });
  } else if (filterTerm === 'least comments') {
    allPosts.sort(function (a, b) {
      var repliesOne = +a.querySelector('[data-filter="replies"]').textContent;
      var repliesTwo = +b.querySelector('[data-filter="replies"]').textContent;
      return repliesOne - repliesTwo;
    });
    postsContainer.innerHTML = '';
    allPosts.forEach(function (post) {
      return postsContainer.appendChild(post);
    });
  } else if (filterTerm === 'most comments') {
    allPosts.sort(function (a, b) {
      var repliesOne = +a.querySelector('[data-filter="replies"]').textContent;
      var repliesTwo = +b.querySelector('[data-filter="replies"]').textContent;
      if (repliesOne > repliesTwo) return -1;
    });
    postsContainer.innerHTML = '';
    allPosts.forEach(function (post) {
      return postsContainer.appendChild(post);
    });
  } else {
    allPosts.sort(function (a, b) {
      var upvotesOne = +a.querySelector('[data-filter="upvotes"]').textContent;
      var upvotesTwo = +b.querySelector('[data-filter="upvotes"]').textContent;
      if (upvotesOne > upvotesTwo) return -1;
    });
    postsContainer.innerHTML = '';
    allPosts.forEach(function (post) {
      return postsContainer.appendChild(post);
    });
  }

  document.querySelector('.selectlist__options').classList.remove('active');
}
},{}],"js/showRoadmap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = showRoadmap;

var _iconArrowUp = _interopRequireDefault(require("../assets/shared/icon-arrow-up.svg"));

var _iconComments = _interopRequireDefault(require("../assets/shared/icon-comments.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function showRoadmap(plannedPosts, progressPosts, livePosts) {
  var main = document.querySelector('.main');
  var roadmap = document.querySelector('.roadmapposts');
  var goBack = document.querySelector('.roadmapposts .btn');
  var plannedContainer = document.querySelector('.planned .roadmapposts__content');
  var progressContainer = document.querySelector('.inprogress .roadmapposts__content');
  var liveContainer = document.querySelector('.live .roadmapposts__content');
  main.style.display = 'none';
  roadmap.style.display = 'block';
  goBack.addEventListener('click', function () {
    main.style.display = 'grid';
    roadmap.style.display = 'none';
    plannedContainer.innerHTML = '';
    progressContainer.innerHTML = '';
    liveContainer.innerHTML = '';
  });
  plannedPosts.forEach(function (post) {
    var postDiv = document.createElement('div');
    postDiv.classList.add('minipost');
    postDiv.innerHTML = "\n      <p class=\"minipost__category\">".concat(post.status, "</p>\n      <div class=\"post__content\">\n        <h1 class=\"post__title\">").concat(post.title, "</h1>\n        <p class=\"post__text\">\n          ").concat(post.description, "\n        </p>\n        <div class=\"tag\">").concat(post.category, "</div>\n      </div>\n      <div class=\"minipost__footer\">\n        <div class=\"post__upvote\">\n          <img src=\"").concat(_iconArrowUp.default, "\" />\n          <span>").concat(post.upvotes, "</span>\n        </div>\n        <div class=\"post__replies\">\n          <img src=\"").concat(_iconComments.default, "\" />\n          <span>").concat(post.comments ? post.comments.length : 0, "</span>\n        </div>\n      </div>\n    ");
    plannedContainer.appendChild(postDiv);
  });
  progressPosts.forEach(function (post) {
    var postDiv = document.createElement('div');
    postDiv.classList.add('minipost');
    postDiv.innerHTML = "\n      <p class=\"minipost__category\">".concat(post.status, "</p>\n      <div class=\"post__content\">\n        <h1 class=\"post__title\">").concat(post.title, "</h1>\n        <p class=\"post__text\">\n          ").concat(post.description, "\n        </p>\n        <div class=\"tag\">").concat(post.category, "</div>\n      </div>\n      <div class=\"minipost__footer\">\n        <div class=\"post__upvote\">\n          <img src=\"").concat(_iconArrowUp.default, "\" />\n          <span>").concat(post.upvotes, "</span>\n        </div>\n        <div class=\"post__replies\">\n          <img src=\"").concat(_iconComments.default, "\" />\n          <span>").concat(post.comments ? post.comments.length : 0, "</span>\n        </div>\n      </div>\n    ");
    progressContainer.appendChild(postDiv);
  });
  livePosts.forEach(function (post) {
    var postDiv = document.createElement('div');
    postDiv.classList.add('minipost');
    postDiv.innerHTML = "\n      <p class=\"minipost__category\">".concat(post.status, "</p>\n      <div class=\"post__content\">\n        <h1 class=\"post__title\">").concat(post.title, "</h1>\n        <p class=\"post__text\">\n          ").concat(post.description, "\n        </p>\n        <div class=\"tag\">").concat(post.category, "</div>\n      </div>\n      <div class=\"minipost__footer\">\n        <div class=\"post__upvote\">\n          <img src=\"").concat(_iconArrowUp.default, "\" />\n          <span>").concat(post.upvotes, "</span>\n        </div>\n        <div class=\"post__replies\">\n          <img src=\"").concat(_iconComments.default, "\" />\n          <span>").concat(post.comments ? post.comments.length : 0, "</span>\n        </div>\n      </div>\n    ");
    liveContainer.appendChild(postDiv);
  });
}
},{"../assets/shared/icon-arrow-up.svg":"assets/shared/icon-arrow-up.svg","../assets/shared/icon-comments.svg":"assets/shared/icon-comments.svg"}],"js/showNumbers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = showNumbers;

function showNumbers(suggestion, planned, progress, live) {
  var plannedPostsNumber = document.querySelector('.roadmap__list li:first-child .roadmap__count');
  var inprogressPostsNumber = document.querySelector('.roadmap__list li:nth-child(2) .roadmap__count');
  var livePostsNumber = document.querySelector('.roadmap__list li:last-child .roadmap__count');
  var postsCount = document.querySelector('.posts__header-suggestion p span');
  postsCount.textContent = suggestion;
  plannedPostsNumber.textContent = planned;
  inprogressPostsNumber.textContent = progress;
  livePostsNumber.textContent = live;
}
},{}],"js/main.js":[function(require,module,exports) {
"use strict";

var _data = _interopRequireDefault(require("../data/data"));

var _showPosts = _interopRequireDefault(require("./showPosts"));

var _filterPosts = _interopRequireDefault(require("./filterPosts"));

var _selectList = _interopRequireDefault(require("./selectList"));

var _showRoadmap = _interopRequireDefault(require("./showRoadmap"));

var _showNumbers = _interopRequireDefault(require("./showNumbers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var suggestionPosts = _data.default.productRequests.filter(function (post) {
  return post.status === 'suggestion';
});

var roadmapPosts = _data.default.productRequests.filter(function (post) {
  return post.status === 'planned' || post.status === 'in-progress' || post.status === 'live';
});

var plannedPosts = roadmapPosts.filter(function (post) {
  return post.status === 'planned';
});
var progressPosts = roadmapPosts.filter(function (post) {
  return post.status === 'in-progress';
});
var livePosts = roadmapPosts.filter(function (post) {
  return post.status === 'live';
});
(0, _showNumbers.default)(suggestionPosts.length, plannedPosts.length, progressPosts.length, livePosts.length);
var filterTags = document.querySelectorAll('.filter .tag');
(0, _showPosts.default)(suggestionPosts);
filterTags.forEach(function (tag) {
  tag.addEventListener('click', function (e) {
    return (0, _filterPosts.default)(tag.textContent, e.target);
  });
});
var selectedText = document.querySelector('.selectlist__selected');
var optionsList = document.querySelector('.selectlist__options');
var options = document.querySelectorAll('.selectlist__options li');
selectedText.addEventListener('click', function () {
  optionsList.classList.toggle('active');
});
options.forEach(function (option) {
  option.addEventListener('click', function (e) {
    (0, _selectList.default)(e);
  });
});
var roadmapBtn = document.querySelector('.roadmap__link');
roadmapBtn.addEventListener('click', function () {
  return (0, _showRoadmap.default)(plannedPosts, progressPosts, livePosts);
});
},{"../data/data":"data/data.json","./showPosts":"js/showPosts.js","./filterPosts":"js/filterPosts.js","./selectList":"js/selectList.js","./showRoadmap":"js/showRoadmap.js","./showNumbers":"js/showNumbers.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59081" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map
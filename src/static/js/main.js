(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNewMessage = void 0;

var _sockets = require("./sockets");

// export function handleMessageNotification(data) {
// 	const { message, nickname } = data;
// 	console.log(`${nickname} said ${message}`);
// }
var messages = document.getElementById("jsMessages");
var sendMsg = document.getElementById("jsSendMsg");

var appendMsg = function appendMsg(text, nickname) {
  var li = document.createElement("li");
  li.innerHTML = "\n        <span class=\"author ".concat(nickname ? "out" : "self", "\">").concat(nickname ? nickname : "You", ":</span> ").concat(text, "\n    ");
  messages.appendChild(li);
};

var handleSendMsg = function handleSendMsg(event) {
  event.preventDefault();
  var input = sendMsg.querySelector("input");
  var value = input.value;
  (0, _sockets.getSocket)().emit(window.events.sendMsg, {
    message: value
  });
  input.value = "";
  appendMsg(value);
};

var handleNewMessage = function handleNewMessage(_ref) {
  var message = _ref.message,
      nickname = _ref.nickname;
  console.log(message);
  appendMsg(message, nickname);
};

exports.handleNewMessage = handleNewMessage;

if (sendMsg) {
  sendMsg.addEventListener("submit", handleSendMsg);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsibWVzc2FnZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2VuZE1zZyIsImFwcGVuZE1zZyIsInRleHQiLCJuaWNrbmFtZSIsImxpIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiaGFuZGxlU2VuZE1zZyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImVtaXQiLCJ3aW5kb3ciLCJldmVudHMiLCJtZXNzYWdlIiwiaGFuZGxlTmV3TWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0E7O0FBTEE7QUFDQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFqQjtBQUNBLElBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWhCOztBQUVBLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBT0MsUUFBUCxFQUFvQjtBQUNyQyxNQUFNQyxFQUFFLEdBQUdOLFFBQVEsQ0FBQ08sYUFBVCxDQUF1QixJQUF2QixDQUFYO0FBQ0FELEVBQUFBLEVBQUUsQ0FBQ0UsU0FBSCw0Q0FDNkJILFFBQVEsR0FBRyxLQUFILEdBQVcsTUFEaEQsZ0JBQzJEQSxRQUFRLEdBQUdBLFFBQUgsR0FBYyxLQURqRixzQkFDa0dELElBRGxHO0FBR0FMLEVBQUFBLFFBQVEsQ0FBQ1UsV0FBVCxDQUFxQkgsRUFBckI7QUFDQSxDQU5EOztBQVFBLElBQU1JLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2hDQSxFQUFBQSxLQUFLLENBQUNDLGNBQU47QUFDQSxNQUFNQyxLQUFLLEdBQUdYLE9BQU8sQ0FBQ1ksYUFBUixDQUFzQixPQUF0QixDQUFkO0FBRmdDLE1BR3hCQyxLQUh3QixHQUdkRixLQUhjLENBR3hCRSxLQUh3QjtBQUloQyw0QkFBWUMsSUFBWixDQUFpQkMsTUFBTSxDQUFDQyxNQUFQLENBQWNoQixPQUEvQixFQUF3QztBQUFFaUIsSUFBQUEsT0FBTyxFQUFFSjtBQUFYLEdBQXhDO0FBQ0FGLEVBQUFBLEtBQUssQ0FBQ0UsS0FBTixHQUFjLEVBQWQ7QUFDQVosRUFBQUEsU0FBUyxDQUFDWSxLQUFELENBQVQ7QUFDQSxDQVBEOztBQVNPLElBQU1LLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsT0FBMkI7QUFBQSxNQUF4QkQsT0FBd0IsUUFBeEJBLE9BQXdCO0FBQUEsTUFBZmQsUUFBZSxRQUFmQSxRQUFlO0FBQzFEZ0IsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILE9BQVo7QUFDQWhCLEVBQUFBLFNBQVMsQ0FBQ2dCLE9BQUQsRUFBVWQsUUFBVixDQUFUO0FBQ0EsQ0FITTs7OztBQUtQLElBQUlILE9BQUosRUFBYTtBQUNaQSxFQUFBQSxPQUFPLENBQUNxQixnQkFBUixDQUF5QixRQUF6QixFQUFtQ2IsYUFBbkM7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4cG9ydCBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlTm90aWZpY2F0aW9uKGRhdGEpIHtcbi8vIFx0Y29uc3QgeyBtZXNzYWdlLCBuaWNrbmFtZSB9ID0gZGF0YTtcbi8vIFx0Y29uc29sZS5sb2coYCR7bmlja25hbWV9IHNhaWQgJHttZXNzYWdlfWApO1xuLy8gfVxuXG5pbXBvcnQgeyBnZXRTb2NrZXQgfSBmcm9tIFwiLi9zb2NrZXRzXCI7XG5cbmNvbnN0IG1lc3NhZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc01lc3NhZ2VzXCIpO1xuY29uc3Qgc2VuZE1zZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNTZW5kTXNnXCIpO1xuXG5jb25zdCBhcHBlbmRNc2cgPSAodGV4dCwgbmlja25hbWUpID0+IHtcblx0Y29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cdGxpLmlubmVySFRNTCA9IGBcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJhdXRob3IgJHtuaWNrbmFtZSA/IFwib3V0XCIgOiBcInNlbGZcIn1cIj4ke25pY2tuYW1lID8gbmlja25hbWUgOiBcIllvdVwifTo8L3NwYW4+ICR7dGV4dH1cbiAgICBgO1xuXHRtZXNzYWdlcy5hcHBlbmRDaGlsZChsaSk7XG59O1xuXG5jb25zdCBoYW5kbGVTZW5kTXNnID0gKGV2ZW50KSA9PiB7XG5cdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdGNvbnN0IGlucHV0ID0gc2VuZE1zZy5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG5cdGNvbnN0IHsgdmFsdWUgfSA9IGlucHV0O1xuXHRnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMuc2VuZE1zZywgeyBtZXNzYWdlOiB2YWx1ZSB9KTtcblx0aW5wdXQudmFsdWUgPSBcIlwiO1xuXHRhcHBlbmRNc2codmFsdWUpO1xufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZU5ld01lc3NhZ2UgPSAoeyBtZXNzYWdlLCBuaWNrbmFtZSB9KSA9PiB7XG5cdGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuXHRhcHBlbmRNc2cobWVzc2FnZSwgbmlja25hbWUpO1xufTtcblxuaWYgKHNlbmRNc2cpIHtcblx0c2VuZE1zZy5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVNlbmRNc2cpO1xufVxuIl19
},{"./sockets":5}],2:[function(require,module,exports){
"use strict";

require("./sockets");

require("./login");

require("./chat");

require("./notification");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfYTlmNDBhMjYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFrQkE7O0FBQ0E7O0FBQ0E7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBoYW5kbGVNZXNzYWdlTm90aWZpY2F0aW9uIH0gZnJvbSBcIi4vY2hhdFwiO1xuXG4vLyBjb25zdCBzb2NrZXQgPSBpbyhcIi9cIik7XG5cbi8vIC8vIHNvY2tldC5vbihcImhlbGxvXCIsICgpID0+IGNvbnNvbGUubG9nKFwiU29tZWJvZHkgSm9pblwiKSk7XG4vLyAvLyBzb2NrZXQuZW1pdChcIkhlbGxvU1wiKTtcblxuLy8gZnVuY3Rpb24gc2VuZE1lc3NhZ2UobWVzc2FnZSkge1xuLy8gXHRzb2NrZXQuZW1pdChcIm5ld01lc3NhZ2VcIiwgeyBtZXNzYWdlOiBtZXNzYWdlIH0pO1xuLy8gXHRjb25zb2xlLmxvZyhgWW91OiAke21lc3NhZ2V9YCk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIHNldE5pY2tuYW1lKG5pY2tuYW1lKSB7XG4vLyBcdHNvY2tldC5lbWl0KFwic2V0Tmlja25hbWVcIiwgeyBuaWNrbmFtZSB9KTtcbi8vIH1cblxuLy8gc29ja2V0Lm9uKFwibWVzc2FnZU5vdGlmaWNhdGlvblwiLCBoYW5kbGVNZXNzYWdlTm90aWZpY2F0aW9uKTtcblxuaW1wb3J0IFwiLi9zb2NrZXRzXCI7XG5pbXBvcnQgXCIuL2xvZ2luXCI7XG5pbXBvcnQgXCIuL2NoYXRcIjtcbmltcG9ydCBcIi4vbm90aWZpY2F0aW9uXCI7XG4iXX0=
},{"./chat":1,"./login":3,"./notification":4,"./sockets":5}],3:[function(require,module,exports){
"use strict";

var _sockets = require("./sockets");

var NICKNAME = "nickname";
var LOGGED_OUT = "loggedOut";
var LOGGED_IN = "loggedIn";
var body = document.querySelector("body");
var loginForm = document.getElementById("jsLogin");
var nickname = localStorage.getItem(NICKNAME);

var logIn = function logIn(nickname) {
  // eslint-disable-next-line no-undef
  var socket = io("/");
  socket.emit(window.events.setNickname, {
    nickname: nickname
  });
  (0, _sockets.initSockets)(socket);
};

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
  logIn(nickname);
}

var handleFormSubmit = function handleFormSubmit(e) {
  e.preventDefault();
  body.className = LOGGED_IN;
  var input = loginForm.querySelector("input");
  var value = input.value;
  localStorage.setItem(NICKNAME, value);
  input.value = "";
  logIn(value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbIk5JQ0tOQU1FIiwiTE9HR0VEX09VVCIsIkxPR0dFRF9JTiIsImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dpbkZvcm0iLCJnZXRFbGVtZW50QnlJZCIsIm5pY2tuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvZ0luIiwic29ja2V0IiwiaW8iLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwic2V0Tmlja25hbWUiLCJjbGFzc05hbWUiLCJoYW5kbGVGb3JtU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJ2YWx1ZSIsInNldEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxVQUFqQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxXQUFuQjtBQUNBLElBQU1DLFNBQVMsR0FBRyxVQUFsQjtBQUVBLElBQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQSxJQUFNQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixTQUF4QixDQUFsQjtBQUVBLElBQU1DLFFBQVEsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCVixRQUFyQixDQUFqQjs7QUFFQSxJQUFNVyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDSCxRQUFELEVBQWM7QUFDM0I7QUFDQSxNQUFNSSxNQUFNLEdBQUdDLEVBQUUsQ0FBQyxHQUFELENBQWpCO0FBQ0FELEVBQUFBLE1BQU0sQ0FBQ0UsSUFBUCxDQUFZQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsV0FBMUIsRUFBdUM7QUFBRVQsSUFBQUEsUUFBUSxFQUFSQTtBQUFGLEdBQXZDO0FBQ0EsNEJBQVlJLE1BQVo7QUFDQSxDQUxEOztBQU9BLElBQUlKLFFBQVEsS0FBSyxJQUFqQixFQUF1QjtBQUN0QkwsRUFBQUEsSUFBSSxDQUFDZSxTQUFMLEdBQWlCakIsVUFBakI7QUFDQSxDQUZELE1BRU87QUFDTkUsRUFBQUEsSUFBSSxDQUFDZSxTQUFMLEdBQWlCaEIsU0FBakI7QUFDQVMsRUFBQUEsS0FBSyxDQUFDSCxRQUFELENBQUw7QUFDQTs7QUFFRCxJQUFNVyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLENBQUQsRUFBTztBQUMvQkEsRUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FsQixFQUFBQSxJQUFJLENBQUNlLFNBQUwsR0FBaUJoQixTQUFqQjtBQUNBLE1BQU1vQixLQUFLLEdBQUdoQixTQUFTLENBQUNELGFBQVYsQ0FBd0IsT0FBeEIsQ0FBZDtBQUgrQixNQUl2QmtCLEtBSnVCLEdBSWJELEtBSmEsQ0FJdkJDLEtBSnVCO0FBSy9CZCxFQUFBQSxZQUFZLENBQUNlLE9BQWIsQ0FBcUJ4QixRQUFyQixFQUErQnVCLEtBQS9CO0FBQ0FELEVBQUFBLEtBQUssQ0FBQ0MsS0FBTixHQUFjLEVBQWQ7QUFDQVosRUFBQUEsS0FBSyxDQUFDWSxLQUFELENBQUw7QUFDQSxDQVJEOztBQVVBLElBQUlqQixTQUFKLEVBQWU7QUFDZEEsRUFBQUEsU0FBUyxDQUFDbUIsZ0JBQVYsQ0FBMkIsUUFBM0IsRUFBcUNOLGdCQUFyQztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdFNvY2tldHMgfSBmcm9tIFwiLi9zb2NrZXRzXCI7XG5cbmNvbnN0IE5JQ0tOQU1FID0gXCJuaWNrbmFtZVwiO1xuY29uc3QgTE9HR0VEX09VVCA9IFwibG9nZ2VkT3V0XCI7XG5jb25zdCBMT0dHRURfSU4gPSBcImxvZ2dlZEluXCI7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbmNvbnN0IGxvZ2luRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNMb2dpblwiKTtcblxuY29uc3Qgbmlja25hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShOSUNLTkFNRSk7XG5cbmNvbnN0IGxvZ0luID0gKG5pY2tuYW1lKSA9PiB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHRjb25zdCBzb2NrZXQgPSBpbyhcIi9cIik7XG5cdHNvY2tldC5lbWl0KHdpbmRvdy5ldmVudHMuc2V0Tmlja25hbWUsIHsgbmlja25hbWUgfSk7XG5cdGluaXRTb2NrZXRzKHNvY2tldCk7XG59O1xuXG5pZiAobmlja25hbWUgPT09IG51bGwpIHtcblx0Ym9keS5jbGFzc05hbWUgPSBMT0dHRURfT1VUO1xufSBlbHNlIHtcblx0Ym9keS5jbGFzc05hbWUgPSBMT0dHRURfSU47XG5cdGxvZ0luKG5pY2tuYW1lKTtcbn1cblxuY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IChlKSA9PiB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblx0Ym9keS5jbGFzc05hbWUgPSBMT0dHRURfSU47XG5cdGNvbnN0IGlucHV0ID0gbG9naW5Gb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcblx0Y29uc3QgeyB2YWx1ZSB9ID0gaW5wdXQ7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKE5JQ0tOQU1FLCB2YWx1ZSk7XG5cdGlucHV0LnZhbHVlID0gXCJcIjtcblx0bG9nSW4odmFsdWUpO1xufTtcblxuaWYgKGxvZ2luRm9ybSkge1xuXHRsb2dpbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVGb3JtU3VibWl0KTtcbn1cbiJdfQ==
},{"./sockets":5}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleDisconnected = exports.handleNewUser = void 0;
var body = document.querySelector("body");

var fireNotification = function fireNotification(text, color) {
  var notification = document.createElement("div");
  notification.innerText = text;
  notification.style.backgroundColor = color;
  notification.className = "notification";
  body.appendChild(notification);
};

var handleNewUser = function handleNewUser(_ref) {
  var nickname = _ref.nickname;
  console.log(nickname, "just Joined");
  fireNotification("".concat(nickname, " just Joined!"), "#39c5bb");
};

exports.handleNewUser = handleNewUser;

var handleDisconnected = function handleDisconnected(_ref2) {
  var nickname = _ref2.nickname;
  fireNotification("".concat(nickname, " just left!"), "#ff3399");
};

exports.handleDisconnected = handleDisconnected;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbi5qcyJdLCJuYW1lcyI6WyJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZmlyZU5vdGlmaWNhdGlvbiIsInRleHQiLCJjb2xvciIsIm5vdGlmaWNhdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImNsYXNzTmFtZSIsImFwcGVuZENoaWxkIiwiaGFuZGxlTmV3VXNlciIsIm5pY2tuYW1lIiwiY29uc29sZSIsImxvZyIsImhhbmRsZURpc2Nvbm5lY3RlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjs7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUN6QyxNQUFNQyxZQUFZLEdBQUdMLFFBQVEsQ0FBQ00sYUFBVCxDQUF1QixLQUF2QixDQUFyQjtBQUNBRCxFQUFBQSxZQUFZLENBQUNFLFNBQWIsR0FBeUJKLElBQXpCO0FBQ0FFLEVBQUFBLFlBQVksQ0FBQ0csS0FBYixDQUFtQkMsZUFBbkIsR0FBcUNMLEtBQXJDO0FBQ0FDLEVBQUFBLFlBQVksQ0FBQ0ssU0FBYixHQUF5QixjQUF6QjtBQUNBWCxFQUFBQSxJQUFJLENBQUNZLFdBQUwsQ0FBaUJOLFlBQWpCO0FBQ0EsQ0FORDs7QUFRTyxJQUFNTyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQWtCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQzlDQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWixFQUFzQixhQUF0QjtBQUNBWCxFQUFBQSxnQkFBZ0IsV0FBSVcsUUFBSixvQkFBNkIsU0FBN0IsQ0FBaEI7QUFDQSxDQUhNOzs7O0FBS0EsSUFBTUcsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixRQUFrQjtBQUFBLE1BQWZILFFBQWUsU0FBZkEsUUFBZTtBQUNuRFgsRUFBQUEsZ0JBQWdCLFdBQUlXLFFBQUosa0JBQTJCLFNBQTNCLENBQWhCO0FBQ0EsQ0FGTSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuY29uc3QgZmlyZU5vdGlmaWNhdGlvbiA9ICh0ZXh0LCBjb2xvcikgPT4ge1xuXHRjb25zdCBub3RpZmljYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRub3RpZmljYXRpb24uaW5uZXJUZXh0ID0gdGV4dDtcblx0bm90aWZpY2F0aW9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuXHRub3RpZmljYXRpb24uY2xhc3NOYW1lID0gXCJub3RpZmljYXRpb25cIjtcblx0Ym9keS5hcHBlbmRDaGlsZChub3RpZmljYXRpb24pO1xufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZU5ld1VzZXIgPSAoeyBuaWNrbmFtZSB9KSA9PiB7XG5cdGNvbnNvbGUubG9nKG5pY2tuYW1lLCBcImp1c3QgSm9pbmVkXCIpO1xuXHRmaXJlTm90aWZpY2F0aW9uKGAke25pY2tuYW1lfSBqdXN0IEpvaW5lZCFgLCBcIiMzOWM1YmJcIik7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlRGlzY29ubmVjdGVkID0gKHsgbmlja25hbWUgfSkgPT4ge1xuXHRmaXJlTm90aWZpY2F0aW9uKGAke25pY2tuYW1lfSBqdXN0IGxlZnQhYCwgXCIjZmYzMzk5XCIpO1xufTtcbiJdfQ==
},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSockets = exports.updateSocket = exports.getSocket = void 0;

var _chat = require("./chat");

var _notification = require("./notification");

var socket = null;

var getSocket = function getSocket() {
  return socket;
};

exports.getSocket = getSocket;

var updateSocket = function updateSocket(aSocket) {
  return socket = aSocket;
};

exports.updateSocket = updateSocket;

var initSockets = function initSockets(aSocket) {
  var _window = window,
      events = _window.events;
  updateSocket(aSocket);
  aSocket.on(events.newUser, _notification.handleNewUser);
  aSocket.on(events.disconnected, _notification.handleDisconnected);
  aSocket.on(events.newMsg, _chat.handleNewMessage);
};

exports.initSockets = initSockets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0IiwidXBkYXRlU29ja2V0IiwiYVNvY2tldCIsImluaXRTb2NrZXRzIiwid2luZG93IiwiZXZlbnRzIiwib24iLCJuZXdVc2VyIiwiaGFuZGxlTmV3VXNlciIsImRpc2Nvbm5lY3RlZCIsImhhbmRsZURpc2Nvbm5lY3RlZCIsIm5ld01zZyIsImhhbmRsZU5ld01lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQSxJQUFJQSxNQUFNLEdBQUcsSUFBYjs7QUFFTyxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFNBQU1ELE1BQU47QUFBQSxDQUFsQjs7OztBQUVBLElBQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLE9BQUQ7QUFBQSxTQUFjSCxNQUFNLEdBQUdHLE9BQXZCO0FBQUEsQ0FBckI7Ozs7QUFFQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDRCxPQUFELEVBQWE7QUFBQSxnQkFDcEJFLE1BRG9CO0FBQUEsTUFDL0JDLE1BRCtCLFdBQy9CQSxNQUQrQjtBQUV2Q0osRUFBQUEsWUFBWSxDQUFDQyxPQUFELENBQVo7QUFDQUEsRUFBQUEsT0FBTyxDQUFDSSxFQUFSLENBQVdELE1BQU0sQ0FBQ0UsT0FBbEIsRUFBMkJDLDJCQUEzQjtBQUNBTixFQUFBQSxPQUFPLENBQUNJLEVBQVIsQ0FBV0QsTUFBTSxDQUFDSSxZQUFsQixFQUFnQ0MsZ0NBQWhDO0FBQ0FSLEVBQUFBLE9BQU8sQ0FBQ0ksRUFBUixDQUFXRCxNQUFNLENBQUNNLE1BQWxCLEVBQTBCQyxzQkFBMUI7QUFDQSxDQU5NIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFuZGxlTmV3TWVzc2FnZSB9IGZyb20gXCIuL2NoYXRcIjtcbmltcG9ydCB7IGhhbmRsZURpc2Nvbm5lY3RlZCwgaGFuZGxlTmV3VXNlciB9IGZyb20gXCIuL25vdGlmaWNhdGlvblwiO1xuXG5sZXQgc29ja2V0ID0gbnVsbDtcblxuZXhwb3J0IGNvbnN0IGdldFNvY2tldCA9ICgpID0+IHNvY2tldDtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVNvY2tldCA9IChhU29ja2V0KSA9PiAoc29ja2V0ID0gYVNvY2tldCk7XG5cbmV4cG9ydCBjb25zdCBpbml0U29ja2V0cyA9IChhU29ja2V0KSA9PiB7XG5cdGNvbnN0IHsgZXZlbnRzIH0gPSB3aW5kb3c7XG5cdHVwZGF0ZVNvY2tldChhU29ja2V0KTtcblx0YVNvY2tldC5vbihldmVudHMubmV3VXNlciwgaGFuZGxlTmV3VXNlcik7XG5cdGFTb2NrZXQub24oZXZlbnRzLmRpc2Nvbm5lY3RlZCwgaGFuZGxlRGlzY29ubmVjdGVkKTtcblx0YVNvY2tldC5vbihldmVudHMubmV3TXNnLCBoYW5kbGVOZXdNZXNzYWdlKTtcbn07XG4iXX0=
},{"./chat":1,"./notification":4}]},{},[2])
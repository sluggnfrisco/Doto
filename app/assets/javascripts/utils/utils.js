(function() {
  Array.prototype.find = function(func) {
    for (var i = 0; i < this.length; i++) {
      console.log(this[i])
      if (func(this[i])) {
        return this[i];
      }
    }

    return undefined;
  };

  Array.prototype.findIndex = function(func) {
    for (var i = 0; i < this.length; i++) {
      if (func(this[i])) {
        return i;
      }
    }

    return -1;
  };
}());

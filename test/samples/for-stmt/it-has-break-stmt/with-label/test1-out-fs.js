(function () {
  var i, ref;
  ref = [1, 2, 3];
  i = 0;
  return _1(i, ref);

  function _1(i, ref) {
    if (i < 3) return _2(i, ref);else return _11();
  }

  function _2(i, ref) {
    return M.j(eff(i), _3, i, ref);
  }

  function _3(i, ref) {
    var j, len;
    j = 0, len = ref.length;
    return _4(i, j, len, ref);
  }

  function _4(i, j, len, ref) {
    if (j < len) return _5(i, j, len, ref);else return _8(i, ref);
  }

  function _5(i, j, len, ref) {
    d = ref[j];
    return M.jB(eff(d), _6, i, j, len, ref);
  }

  function _6(a, i, j, len, ref) {
    if (a) return _8(i, ref);else {
      return M.jB(eff(2), _7, i, j, len, ref);
    }
  }

  function _7(a, i, j, len, ref) {
    if (a) return _11();else {
      j++;
      return M.jR(_4, i, j, len, ref);
    }
  }

  function _8(i, ref) {
    return M.j(eff(3), _9, i, ref);
  }

  function _9(i, ref) {
    return M.j(eff(4), _10, i, ref);
  }

  function _10(i, ref) {
    i++;
    return M.jR(_1, i, ref);
  }

  function _11() {
    return M.j(eff(5), _12);
  }

  function _12() {
    return M.j(eff(6), _13);
  }

  function _13() {
    return M.pure();
  }
});
function a_1(i) {
  i += 2;
  return M.jM1(effM(), a_2, i);
}

function a_2(i) {
  return M.jM1(effN(), a_3, i);
}

function a_3(i) {
  var a;
  const a = ++i;
  return M.jMB1(effI1(a), a_4, i);
}

function a_4(a, i) {
  return M.jMB1(eff2(a), a_5, i);
}

function a_5(a, i) {
  const b = i++;
  return M.jMB1(eff3(i), a_6, a);
}

function a_6(c, a) {
  var b;
  return M.jM(eff1(a, b, c), a_7);
}

function a_7() {
  return M.jMB(effN(), a_8);
}

function a_8(a) {
  return M.jMB(effI(a), a_9);
}

function a_9(a) {
  return M.jM(effM(a), a_10);
}

function a_10() {
  return M.jMB(effI(), a_11);
}

function a_11(a) {
  return M.jMB1(effJ(), a_12, a);
}

function a_12(b, a) {
  return M.jM(eff4(a, b), a_13);
}

function a_13() {
  return eff5();
}

function a() {
  var i;
  i = 0;
  return M.jM1(eff0(), a_1, i);
}
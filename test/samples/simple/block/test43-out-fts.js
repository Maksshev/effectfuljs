function a_1(a) {
  if (a) return a_2();else {
    return eff6();
  }
}

function a_2() {
  return M.pure(5);
}

function a() {
  return M.jM1(eff1(), a_1, a);
}
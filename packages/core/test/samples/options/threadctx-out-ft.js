import * as M from "@effectful/core";

function a() {
  var a = M.context();
  return M.scope(a_1);
}

function a_1(a) {
  return M.chain(eff1(), a_2);
}

function a_2(a, b) {
  a._ = b;
  return M.chain(eff2(), a_3);
}

function a_3(a, b) {
  a._ + b;
}
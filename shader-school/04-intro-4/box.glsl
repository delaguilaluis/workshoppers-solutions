// Why didn't this work?
bool isBetween(float lo, float hi, float a) {
  return all(bvec2(a >= lo, a <= hi));
}

bool inBox(highp vec2 lo, highp vec2 hi, highp vec2 p) {
  return all(bvec2(
    isBetween(lo.x, hi.x, p.x),
    isBetween(lo.y, hi.y, p.y)
  ));
}

//Do not change this line or the name of the above function
#pragma glslify: export(inBox)

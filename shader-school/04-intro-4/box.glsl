bool inBox(highp vec2 lo, highp vec2 hi, highp vec2 p) {
  //Test if the point p is inside the box bounded by [lo, hi]
  // return all(bvec2(
  //   all(bvec2(p.x >= lo.x, p.x <= hi.x)),
  //   all(bvec2(p.y >= lo.y, p.y <= hi.y))
  // ));
  return all(bvec2(
    isBetween(lo.x, hi.x, p.x),
    isBetween(lo.y, hi.y, p.y)
  ));
}

bool isBetween(float lo, float hi, float a) {
  return all(bvec2(a >= lo, a <= hi));
}

//Do not change this line or the name of the above function
#pragma glslify: export(inBox)

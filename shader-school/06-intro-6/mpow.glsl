mat2 matrixPower(highp mat2 m, int n) {
  if (n == 0) {
    return m * mat2(1.0);
  }

  if (n == 1) {
    return m;
  }

  // GLSL loops are un-rolled into native GPU instructions.
  // This means there needs to be a hard upper limit to the number of passes
  // through the for loop
  const int MAX_N = 20;

  for (int i = 0; i < MAX_N; i += 1) {
    if (i >= n) {
      break;
    }

    m = m * m;
  }

  return m;
}

//Do not change this line or the name of the above function
#pragma glslify: export(matrixPower)
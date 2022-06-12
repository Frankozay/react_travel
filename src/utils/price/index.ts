export const handlePrice: any = (x, d = 0) => {
  let w = x.toString();
  let f = parseFloat(w);
  if (isNaN(f)) {
    return;
  }
  if (f === 0) {
    return f;
  }
  d = d ? d * 100 : 100;
  f = Math.floor(f * 100) / d;
  let s = f.toString();
  let rs = s.indexOf(".");
  if (rs < 0) {
    rs = s.length;
    s += ".";
  }
  while (s.length <= rs + 2) {
    s += "0";
  }

  if (s.includes(".00") === true) {
    s = s.replace(".00", "");
  }

  return s;
};

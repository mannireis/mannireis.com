function makeRGB() {
  const currentHue = document.documentElement.style.getPropertyValue("--hue");
  document.documentElement.style.setProperty("--hue", (currentHue % 360) + 1);

  setTimeout(makeRGB, 10);
}

makeRGB();

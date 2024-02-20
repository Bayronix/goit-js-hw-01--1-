function getElementWidth(content, padding, border) {
  if (document.documentElement.style.boxSizing === "border-box") {
    return parseFloat(content);
  } else {
    return (
      parseFloat(content) + 2 * parseFloat(padding) + 2 * parseFloat(border)
    );
  }
}

console.log(getElementWidth("50px", "8px", "4px"));

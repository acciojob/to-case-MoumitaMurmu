function toCase(text) {
  // Check if the input text is empty
  if (text.length === 0) {
    return '-';
  }

  // Convert the text to lowercase and uppercase with - as the delimiter
  const lowercaseText = text.toLowerCase();
  const uppercaseText = text.toUpperCase();

  return `${lowercaseText}-${uppercaseText}`;
}

// Example usage
const text = prompt("Enter text:");
alert(toCase(text));

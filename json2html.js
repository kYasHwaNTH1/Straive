export default function json2html(data) {
  // Extract all unique keys to create headers
  const headers = Array.from(new Set(data.flatMap(Object.keys)));

  // Create the HTML table structure
  let html = `<table data-user="kesagoniyashwanth@gmail.com">\n`;
  html += `  <thead>\n    <tr>${headers.map(header => `<th>${header}</th>`).join('')}</tr>\n  </thead>\n`;
  html += `  <tbody>\n`;

  // Add rows for each data entry
  for (const row of data) {
    html += `    <tr>${headers.map(header => `<td>${row[header] || ''}</td>`).join('')}</tr>\n`;
  }

  html += `  </tbody>\n</table>`;
  return html;
}

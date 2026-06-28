const KEYWORDS_REGEX = /\b(package|import|func|return|var|const|struct|interface|type|go|select|chan|defer|nil|err|require)\b/g;
const TYPES_REGEX = /\b(context|Context|string|int|error|byte|Background|Print|New|NewClient|Stream|Call)\b/g;
const COMMENTS_REGEX = /(\/\/.*)/g;
const STRINGS_REGEX = /("[^"]*")/g;

/**
 * Highly optimized simple syntax highlighter for Go code snippets.
 * Pre-compiles regular expressions at the module level for maximum performance.
 * 
 * @param {string} code - The raw Go code snippet.
 * @returns {string} The HTML-safe highlighted code string.
 */
export function highlightGo(code) {
  if (!code) return "";
  let escaped = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Keywords
  escaped = escaped.replace(KEYWORDS_REGEX, '<span class="syntax-keyword">$1</span>');

  // Built-ins/Types
  escaped = escaped.replace(TYPES_REGEX, '<span class="syntax-type">$1</span>');

  // Comments
  escaped = escaped.replace(COMMENTS_REGEX, '<span class="syntax-comment">$1</span>');

  // Strings
  escaped = escaped.replace(STRINGS_REGEX, '<span class="syntax-string">$1</span>');

  return escaped;
}

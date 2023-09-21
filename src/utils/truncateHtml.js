export const removeHtmlAndCssTags = (inputString) => {
  // Remove HTML tags using a regular expression
  const stringWithoutHtml = inputString.replace(/<[^>]*>/g, "");

  // Remove CSS tags using a regular expression (inside <style> and <script> tags)
  const stringWithoutCss = stringWithoutHtml.replace(
    /<style[^>]*>[\s\S]*?<\/style>|<script[^>]*>[\s\S]*?<\/script>/gi,
    ""
  );

  return stringWithoutCss;
};

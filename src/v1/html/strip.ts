export default function stripTags(html: string) {
  try {
    const strippedString = html.replace(/(<([^>]+)>)/gi, "");
    return strippedString;
  } catch (error) {
    throw error;
  }
}

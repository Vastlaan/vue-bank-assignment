import type { VueWrapper } from "@vue/test-utils";

export default function findByText (wrap: VueWrapper, selector: string, text: string) {
  return wrap.findAll(selector).find(n => n.text().match(text));
}
import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import AboutPage from "../AboutPage.vue";

describe("About page", () => {
  it("renders properly", () => {
    // const wrapper = mount(About, { props: { msg: "Hello Vitest" } });
    const wrapper = mount(AboutPage);
    expect(wrapper.text()).toContain("О нас");
  });
});

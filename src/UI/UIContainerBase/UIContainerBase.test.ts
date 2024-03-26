import { shallowMount } from "@vue/test-utils";
import UIContainerBase from "./UIContainerBase.vue";
import { describe, it, expect } from "vitest";

describe("UIContainerBase", () => {
  it("renders with default props", () => {
    const wrapper = shallowMount(UIContainerBase);

    // Assert the presence of the wrapper element
    expect(wrapper.find(".wrapper").exists()).toBe(true);

    // Assert that the space class is not applied by default
    expect(wrapper.classes("space")).toBe(false);
  });

  it("renders with space prop", () => {
    const wrapper = shallowMount(UIContainerBase, {
      props: {
        space: true,
      },
    });

    // Assert the presence of the wrapper element
    expect(wrapper.find(".wrapper").exists()).toBe(true);

    // Assert that the space class is applied when space prop is true
    expect(wrapper.classes("space")).toBe(true);
  });
});

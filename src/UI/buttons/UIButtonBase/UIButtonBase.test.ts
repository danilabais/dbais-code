import { shallowMount } from "@vue/test-utils";
import UIButtonBase from "./UIButtonBase.vue";
import { describe, it, expect } from "vitest";

describe("UIButtonBase", () => {
  it("renders with default props", () => {
    const wrapper = shallowMount(UIButtonBase);

    // Assert the presence of the button element
    const button = wrapper.find("button");
    expect(button.exists()).toBe(true);

    // Assert that default classes are applied
    expect(button.classes()).toEqual(["button"]);
    expect(button.classes("small")).toBe(false);
    expect(button.classes("danger")).toBe(false);
  });

  it("renders with small prop", () => {
    const wrapper = shallowMount(UIButtonBase, {
      props: {
        small: true,
      },
    });

    // Assert the presence of the button element
    const button = wrapper.find("button");
    expect(button.exists()).toBe(true);

    // Assert that the small class is applied
    expect(button.classes("small")).toBe(true);
  });

  it("renders with danger prop", () => {
    const wrapper = shallowMount(UIButtonBase, {
      props: {
        danger: true,
      },
    });

    // Assert the presence of the button element
    const button = wrapper.find("button");
    expect(button.exists()).toBe(true);

    // Assert that the danger class is applied
    expect(button.classes("danger")).toBe(true);
  });
});

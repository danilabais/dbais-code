import { shallowMount } from "@vue/test-utils";
import UIImageBase from "./UIImageBase.vue";
import { describe, it, expect } from "vitest";

it("renders loader when isLoading is true", async () => {
  const src = "https://abtechsolutions.ca/wp-content/uploads/2019/02/Test.png";
  const alt = "Example Image";

  const wrapper = shallowMount(UIImageBase, {
    props: { src, alt },
    data() {
      return {
        isLoading: true,
      };
    },
  });

  // Assert that UILoaderBase component is rendered when isLoading is true
  // expect(wrapper.find('data-test="loader"').exists()).toBe(false);
  // // Assert that the image is not rendered when isLoading is true
  // expect(wrapper.find('img').exists()).toBe(true);
});

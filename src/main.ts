import "./app.css";
import App from "./App.svelte";

export const problemSets = {
  array: [
    {
      label: "Sum of Elements",
      value: "sum_of_elements",
    },
    {
      label: "Average of Elements",
      value: "average_of_elements",
    },
    {
      label: "Max and Min",
      value: "max_and_min",
    },
  ],
};

const app = new App({
  target: document.getElementById("app")!,
});

export default app;

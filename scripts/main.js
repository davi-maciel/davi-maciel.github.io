import { ALL_ALGOS } from "./algorithms.js";

document.getElementById("sortBtn").addEventListener("click", () => {
    const raw = document.getElementById("inputArray").value.trim();
    const algo = document.getElementById("sortingSelect").value;
    const outputEl = document.getElementById("output");

    if (!raw) {
        outputEl.textContent = "Please input an array.";
        return;
    }

    const nums = raw.split(",")
        .map(s => s.trim())
        .filter(s => s.length)
        .map(Number);

    if (nums.some(Number.isNaN)) {
        outputEl.textContent = "Please input comma-separated integers.";
        return;
    }

    const sorted = ALL_ALGOS[algo](nums);

    outputEl.textContent = `Sorted: [${sorted.join(", ")}]`;
});
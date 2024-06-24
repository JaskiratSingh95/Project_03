import bb, {radar} from "billboard.js"

var chart = bb.generate({
    padding: {
      top: 25
    },
    data: {
      x: "x",
      columns: [
      ["x", "1st\nPrize", "2nd\nPrize", "3rd\nPrize"],
      ["data1", 230, 250, 100],
      ["data2", 150, 150, 230]
      ],
      type: "radar", // for ESM specify as: radar()
      labels: true
    },
    radar: {
      axis: {
        max: 300
      }
    },
    bindto: "#radarAxisMultiline"})
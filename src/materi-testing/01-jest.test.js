import { penjumlahan } from "./angka";
import { potongPajak, sapaan } from "./text.js";

describe("Basic testing", () => {
  test("testing sederhana", () => {
    expect(true).toBe(true);
  });

  test("menjumlahkan nilai", () => {
    expect(1 + 1).toBe(2);
  });
});

describe("Group testing angka", () => {
  test("Fungsi penjumlahan", () => {
    expect(penjumlahan(3, 2)).toBe(5);
  });
});

describe("Group testing text", () => {
  test("Hitung gaji bersih", () => {
    expect(potongPajak(10000000)).toBe(`Gaji bersih anda Rp. ${9000000}`);
  });

  test("Sapa saya", () => {
    expect(sapaan("Adhri")).toBe(`Halo Adhri`);
  });
});

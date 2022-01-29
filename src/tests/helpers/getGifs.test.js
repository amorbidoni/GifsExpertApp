import React from "react";
import { getGifs } from "../../helpers/getGifs";

describe("pruebas en fetcha gifs", () => {
  test("debe traer 10 elementos", async () => {
    const gifs = await getGifs("one ponch");
    expect(gifs.length).toBe(10);
  });
  test("si mando un string vacio como argumento recibo 0", async () => {
    const gifs = await getGifs("");
    expect(gifs.length).toBe(0);
  });
});

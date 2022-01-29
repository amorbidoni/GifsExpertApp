import "@testing-library/jest-dom";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("pruebas en el hook useFetchGifs", () => {
  test("debe retornar el estado inicial", async () => {
    //   no podemos aplicar el test de la siguiente forma por eso usamos la libreria para hacer test sobre hooks
    // const { data: images, loading } = useFetchGifs("one ponch");
    // utilizamos y desestructuramos el render hook que lleva como artgumento una funcion anonima y retorna el hook
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("one ponch")
    );
    // desestructuro la datra y loading del resultado
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });
  test("debe retornar un arreglo de img y loading en flase", async () => {
    //   el render hook los pued desestructurar de diferentes maneras. hacer un copnsole.log de todo el render hook almacenandolo en unavariable para verificar.
    // waitForNextUpdate espera un nuevo cambio en el estado. e suna promesa  que nos va a indicar cuando sucedio un cambio por ende usamos una funcion async
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("one ponch")
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data.length).toEqual(10);
    expect(loading).toBe(false);
  });
});

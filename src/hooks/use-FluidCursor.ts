import { useEffect, useCallback } from 'react';

const useFluidCursor = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const canvas = document.getElementById('fluid') as HTMLCanvasElement | null;
    if (!canvas) return;

    const resizeCanvas = useCallback(() => {
      if (!canvas) return false;
      const width = scaleByPixelRatio(canvas.clientWidth);
      const height = scaleByPixelRatio(canvas.clientHeight);
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        return true;
      }
      return false;
    }, [canvas]);

    const scaleByPixelRatio = useCallback((input: number) => {
      return Math.floor(input * (window.devicePixelRatio || 1));
    }, []);

    resizeCanvas();

    type Color = { r: number; g: number; b: number };
    type Pointer = {
      id: number;
      texcoordX: number;
      texcoordY: number;
      prevTexcoordX: number;
      prevTexcoordY: number;
      deltaX: number;
      deltaY: number;
      down: boolean;
      moved: boolean;
      color: Color;
    };

    const pointers: Pointer[] = [{
      id: -1,
      texcoordX: 0,
      texcoordY: 0,
      prevTexcoordX: 0,
      prevTexcoordY: 0,
      deltaX: 0,
      deltaY: 0,
      down: false,
      moved: false,
      color: { r: 0, g: 0, b: 0 }
    }];

    const config = {
      SIM_RESOLUTION: 128,
      DYE_RESOLUTION: 1440,
      DENSITY_DISSIPATION: 3.5,
      VELOCITY_DISSIPATION: 2,
      PRESSURE: 0.1,
      PRESSURE_ITERATIONS: 20,
      CURL: 3,
      SPLAT_RADIUS: 0.2,
      SPLAT_FORCE: 6000,
      SHADING: true,
      COLOR_UPDATE_SPEED: 10,
      TRANSPARENT: true,
    };

    const updatePointerMoveData = useCallback((pointer: Pointer, posX: number, posY: number) => {
      pointer.prevTexcoordX = pointer.texcoordX;
      pointer.prevTexcoordY = pointer.texcoordY;
      pointer.texcoordX = posX / canvas!.width;
      pointer.texcoordY = 1.0 - posY / canvas!.height;
      pointer.deltaX = pointer.texcoordX - pointer.prevTexcoordX;
      pointer.deltaY = pointer.texcoordY - pointer.prevTexcoordY;
      pointer.moved = Math.abs(pointer.deltaX) > 0 || Math.abs(pointer.deltaY) > 0;
    }, [canvas]);

    const updatePointerDownData = useCallback((pointer: Pointer, id: number, posX: number, posY: number) => {
      pointer.id = id;
      pointer.down = true;
      pointer.moved = false;
      pointer.texcoordX = posX / canvas!.width;
      pointer.texcoordY = 1.0 - posY / canvas!.height;
      pointer.prevTexcoordX = pointer.texcoordX;
      pointer.prevTexcoordY = pointer.texcoordY;
      pointer.deltaX = 0;
      pointer.deltaY = 0;
      pointer.color = generateColor();
    }, [canvas]);

    const generateColor = useCallback((): Color => {
      const c = HSVtoRGB(Math.random(), 1.0, 1.0);
      return { r: c.r * 0.15, g: c.g * 0.15, b: c.b * 0.15 };
    }, []);

    const HSVtoRGB = useCallback((h: number, s: number, v: number): Color => {
      let r = 0, g = 0, b = 0;
      const i = Math.floor(h * 6);
      const f = h * 6 - i;
      const p = v * (1 - s);
      const q = v * (1 - f * s);
      const t = v * (1 - (1 - f) * s);

      switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
      }

      return { r, g, b };
    }, []);

    const handleMouseDown = useCallback((e: MouseEvent) => {
      const pointer = pointers[0];
      updatePointerDownData(pointer, -1, e.clientX, e.clientY);
    }, [updatePointerDownData]);

    const handleMouseMove = useCallback((e: MouseEvent) => {
      const pointer = pointers[0];
      updatePointerMoveData(pointer, e.clientX, e.clientY);
    }, [updatePointerMoveData]);

    const handleMouseUp = useCallback(() => {
      pointers[0].down = false;
    }, []);

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);
};

export default useFluidCursor;

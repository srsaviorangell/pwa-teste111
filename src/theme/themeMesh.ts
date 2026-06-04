type MeshColor = {
  r: number;
  g: number;
  b: number;
};

type Props = {
  colors: MeshColor[];
  speed?: number;
  blur?: number;
  noise?: number;
  contrast?: number;
  animated?: boolean;
  style?: any;
  width?: number;
  height?: number;
};

export const meshLight = {
  colors: [
    "#F54900",
    "#FFEDD4",
    "#FF6A00",
    "#FFD7A3",
  ],
  speed: 0.03,
  blur: 0.2,
  noise: 0.3,
};

export const meshDark = {
  colors: [
    "#0B0B1A",
    "#1A0B2E",
    "#120A1F",
    "#0A0F1F",
  ],
  speed: 0.03,
  blur: 0.25,
  noise: 0.35,
};
# maplibre-graticule

Check the demo here [Link](https://kaditya97.github.io/maplibre-graticule/)

## Install

```bash
npm install maplibre-gl maplibre-graticule
```

or

```html
<link href="https://unpkg.com/maplibre-gl@2.2.0/dist/maplibre-gl.css" rel="stylesheet" />
<script src="https://unpkg.com/maplibre-gl@2.2.0/dist/maplibre-gl.js"></script>
<script src="https://unpkg.com/maplibre-graticule@0.0.1/dist/maplibre-graticule.js"></script>
```

## Usage
```jsx
import Maplibre from 'maplibre-gl';
import * as MaplibreGraticule from 'maplibre-graticule';
```

## Example usage
Check docs/index.html for example implementation.
```Javascript
const graticule = new MaplibreGraticule.Graticule({
    minZoom: 0,
    maxZoom: 20,
    showLabels: true,
    labelType: 'hdms',
    labelSize: 12,
    labelColor: "#0000ee",
    longitudePosition: 'bottom',
    latitudePosition: 'right',
    paint: {
      'line-opacity': 0.8,
      'line-color': "rgba(255,120,0,0.9)",
      'line-dasharray': [2, 1],
    }
});
map.addControl(graticule);
```

### Remove

```Javascript
map.removeControl(graticule);
```

### Options for use

```Typescript
export interface GraticuleConfig {
  minZoom?: number;
  maxZoom?: number;
  showLabels?: boolean;
  labelType?: 'hdms' | 'decimal';
  labelSize?: number;
  labelColor?: string;
  longitudePosition?: 'top' | 'bottom';
  latitudePosition?: 'left' | 'right';
  longitudeOffset?: number[];
  latitudeOffset?: number[];
  paint?: maplibregl.LinePaint;
}

const graticule = new MaplibreGraticule.Graticule(config: GraticuleConfig);
```

- `minZoom` - number, min zoom to display the grid, **default: 0**
- `maxZoom` - number, max zoom to display the grid , **default: 20**
- `showLabels` - boolean, true | false to show label, **default: false** 
- `labelType` - 'hdms' | 'decimal', type of label to show, **default: hdms**
- `labelSize` - number, size to display the label, **default: 12**
- `labelColor` - string, color to display the label, **default: #000000**
- `longitudePosition` - 'top' | 'bottom', longitude label position, **default: bottom**
- `latitudePosition` - 'left' | 'right', latitude lable position, **default: right**
- `longitudeOffset` - number[], offset to shift longitude label, **default: [0, 0]**
- `latitudeOffset` - number[], offset to shift latitude label, **default: [0, 0]**
- `paint` - maplibregl.LinePaint, layer line paint properties

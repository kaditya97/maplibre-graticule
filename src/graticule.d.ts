import maplibregl from 'maplibre-gl';

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
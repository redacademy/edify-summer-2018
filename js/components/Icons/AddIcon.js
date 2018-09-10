import React from 'react';
import Svg, { G, Path, Rect } from 'react-native-svg';

export const AddIcon = () => (
  <Svg width="40" height="40">
    <G
      id="Wireframes"
      stroke="none"
      stroke-width="3"
      fill="none"
      fill-rule="evenodd"
    >
      <G id="child-notes" transform="translate(-165.000000, -501.000000)">
        <G id="add-note-button" transform="translate(165.000000, 501.000000)">
          <Rect
            id="button"
            fill="#5F59A5"
            fill-rule="nonzero"
            transform="translate(20.378680, 20.500000) rotate(-90.000000) translate(-20.378680, -20.500000) "
            x="0.378679656"
            y="0.5"
            width="40"
            height="40"
            rx="5"
          />
          <Path
            d="M11.2516213,11.806746 L28.6381292,29.193254"
            id="Line-3-Copy-2"
            stroke="#FFFFFF"
            stroke-width="3"
            stroke-linecap="round"
            transform="translate(19.944875, 20.500000) rotate(-45.000000) translate(-19.944875, -20.500000) "
          />
          <Path
            d="M28.6378708,11.6011221 L11.250115,28.9888779"
            id="Line-3-Copy-2"
            stroke="#FFFFFF"
            stroke-width="3"
            stroke-linecap="round"
            transform="translate(19.943993, 20.295000) rotate(-45.000000) translate(-19.943993, -20.295000) "
          />
        </G>
      </G>
    </G>
  </Svg>
);

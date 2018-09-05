import React from 'react';
import Svg, { Circle, G, Path } from 'react-native-svg';

export const HumanIcon = ({ color }) => (
  <Svg width="29" height="34">
    <G
      id="Symbols"
      stroke="none"
      stroke-width="1"
      fill={color}
      fill-rule="evenodd"
    >
      <G
        id="Tab-Bar"
        transform="translate(-40.000000, -17.000000)"
        fill={color}
      >
        <G id="human" transform="translate(40.000000, 17.000000)">
          <Circle id="Oval-5" cx="14.5" cy="8.5" r="8.5" />
          <Path
            d="M2.35320877e-13,34 C0.197290363,26.4505046 6.61363227,20.3888889 14.5,20.3888889 C22.3863677,20.3888889 28.8027096,26.4505046 29,34 L2.3625546e-13,34 Z"
            id="Combined-Shape"
          />
        </G>
      </G>
    </G>
  </Svg>
);

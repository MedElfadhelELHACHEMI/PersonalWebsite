import React from 'react';
import PropTypes from 'prop-types';

const Logo = props => (
  <svg viewBox="0 0 215 271" width={props.width} height={props.height}>
    <g
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g
        transform="translate(3.000000, 3.000000)"
        stroke={props.color || '#333'}
        strokeWidth="10"
      >
        <path
          d="M-26.75,28.75 L-26.75,28.75 L-26.75,236.75 M38.25,132.25 C1.79920651,132.25 -27.75,178.812386 -27.75,236.25 M105.25,236.25 C105.25,178.812386 75.7007935,132.25 39.25,132.25 M104.25,236.25 C104.25,178.812386 133.799207,132.25 170.25,132.25 M236.25,236.25 C236.25,178.812386 206.700793,132.25 170.25,132.25 M236.25,236.75 L236.25,236.75 L236.25,28.75 L236.25,28.75 M105.25,236.25 C68.7992065,236.25 39.25,189.687614 39.25,132.25 M105.25,28.25 C68.7992065,28.25 39.25,74.812386 39.25,132.25 M170.25,132.25 C170.25,74.812386 140.700793,28.25 104.25,28.25 M104.25,236.25 C121.754288,236.25 138.541647,225.292889 150.919048,205.789105 C163.296449,186.285322 170.25,159.832515 170.25,132.25 M-27.25,29.25 L-27.25,29.25 L236.75,29.25 M-26.75,236.75 L-26.75,236.75 L-26.75,28.75 M38.25,132.25 C1.79920651,132.25 -27.75,85.687614 -27.75,28.25 M105.25,28.25 C105.25,85.687614 75.7007935,132.25 39.25,132.25 M104.25,28.25 C104.25,85.687614 133.799207,132.25 170.25,132.25 M236.25,28.25 C236.25,85.687614 206.700793,132.25 170.25,132.25 M236.25,28.75 L236.25,28.75 L236.25,236.75 L236.25,236.75 M105.25,28.25 C68.7992065,28.25 39.25,74.812386 39.25,132.25 M105.25,236.25 C68.7992065,236.25 39.25,189.687614 39.25,132.25 M170.25,132.25 C170.25,159.832515 163.296449,186.285322 150.919048,205.789105 C138.541647,225.292889 121.754288,236.25 104.25,236.25 M104.25,28.25 C140.700793,28.25 170.25,74.812386 170.25,132.25 M-27.25,237.25 L-27.25,237.25 L236.75,237.25"
          transform="translate(104.500000, 132.750000) rotate(-90.000000) translate(-104.500000, -132.750000) "
        />
      </g>
    </g>
  </svg>
);
Logo.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
};

export default Logo;

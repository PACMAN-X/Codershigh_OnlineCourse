export const theme = {
  cBlue: '#007bec',
  padding: '2vh 3vw',
  setMediaQuery: (size) => {
    const minPadding = '0px 300px';
    const breakpoints = {
      // XL
      1: {
        deviceSize: '1024',
        max: {
          size: '20px;',
          height: '40px;'
        },
        min: {
          size: '40px;',
          height: '60px;'
        }
      },
      // L
      2: {
        deviceSize: '1024',
        max: {
          size: '18px;',
          height: '30px;'
        },
        min: {
          size: '30px;',
          height: '40px;'
        }
      },
      // M
      3: {
        deviceSize: '1024',
        max: {
          size: '14px;',
          height: '25px;'
        },
        min: {
          size: '25px;',
          height: '40px;'
        }
      },
      // S
      4: {
        deviceSize: '1024',
        max: {
          size: '13px;',
          height: '25px;'
        },
        min: {
          size: '20px;',
          height: '30px;'
        }
      },
      // XS
      5: {
        deviceSize: '1024',
        max: {
          size: '11px;',
          height: '15px'
        },
        min: {
          size: '18px;',
          height: '20px'
        }
      },
      6: {
        deviceSize: '1024',
        max: {
          size: '8px;',
          height: '15px'
        },
        min: {
          size: '13px;',
          height: '25px'
        }
      },
      7: {
        deviceSize: '1024',
        max: {
          size: '8px;',
          height: '15px'
        },
        min: {
          size: '20px;',
          height: '25px'
        }
      }
    };

    const limitation = '1024';
    const minSize = breakpoints[size].min.size;
    const maxSize = breakpoints[size].max.size;
    const minLineHeight = breakpoints[size].min.height;
    const maxLineHeight = breakpoints[size].max.height;

    return `@media (min-width: ${limitation}px) { font-size: ${minSize}px; line-height: ${minLineHeight}; padding: ${minPadding}px;} @media (max-width: ${limitation}px) { font-size: ${maxSize}; line-height: ${maxLineHeight};  }`;
  }
};

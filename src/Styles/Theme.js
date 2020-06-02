export const theme = {
  cBlue: '#007bec',
  padding: '2vh 3vw',
  linked: 'text-decoration: underline; text-align: center;',
  setMediaQuery: (size) => {
    const desktopPadding = '0px 300px';
    const breakpoints = {
      // XL
      1: {
        mobile: {
          size: '20px;',
          height: '40px;'
        },
        pad: {
          size: '25px;',
          height: '40px;'
        },
        desktop: {
          size: '40px;',
          height: '40px;'
        }
      },
      // L
      2: {
        mobile: {
          size: '15px;',
          height: '30px;'
        },
        pad: {
          size: '20px;',
          height: '40px;'
        },
        desktop: {
          size: '30px;',
          height: '40px;'
        }
      },
      // M
      3: {
        mobile: {
          size: '14px;',
          height: '25px;'
        },
        pad: {
          size: '20px;',
          height: '40px;'
        },
        desktop: {
          size: '25px;',
          height: '40px;'
        }
      },
      // S
      4: {
        mobile: {
          size: '13px;',
          height: '25px;'
        },
        pad: {
          size: '18px;',
          height: '30px;'
        },
        desktop: {
          size: '20px;',
          height: '30px;'
        }
      },
      // XS
      5: {
        mobile: {
          size: '11px;',
          height: '15px'
        },
        pad: {
          size: '14px;',
          height: '25px;'
        },
        desktop: {
          size: '18px;',
          height: '20px'
        }
      },
      6: {
        mobile: {
          size: '8px;',
          height: '15px'
        },
        pad: {
          size: '11px;',
          height: '20px;'
        },
        desktop: {
          size: '13px;',
          height: '25px'
        }
      },
      7: {
        mobile: {
          size: '6px;'
        },
        pad: {
          size: '14px;'
        },
        desktop: {
          size: '20px;'
        }
      }
    };

    const desktop = '1024';
    const pad = '768';
    const desktopFontSize = breakpoints[size].desktop.size;
    const padFontSize = breakpoints[size].pad.size;
    const mobileFontSize = breakpoints[size].mobile.size;
    const desktopLineHeight = breakpoints[size].desktop.height;
    const padLineHeight = breakpoints[size].pad.height;
    const mobileLineHeight = breakpoints[size].mobile.height;

    return `
    @media all and (min-width: ${desktop}px) { 
      font-size: ${desktopFontSize}px; 
      line-height: ${desktopLineHeight}; 
      padding: ${desktopPadding}px;
    }
    @media all and (min-width: ${pad}px) and (max-width: ${desktop}px){ 
      font-size: ${padFontSize}; 
      line-height: ${padLineHeight}; 
    }
    @media all and (max-width: ${pad - 1}px) { 
      font-size: ${mobileFontSize}; 
      line-height: ${mobileLineHeight}; 
    }`;
  }
};

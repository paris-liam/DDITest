import Typography from 'typography';
import funstonTheme from 'typography-theme-funston';

funstonTheme.baseFontSize = '30vw';
funstonTheme.headerFontFamily = ['Lato', 'sans-serif'];
funstonTheme.bodyFontFamily = ['open sans', 'sans-serif'];
funstonTheme.scaleRation = '2';
funstonTheme.googleFonts = [{ name: 'Lato' }, { name: 'open sans' }, { name: 'Ubuntu Mono' }];
const typography = new Typography(funstonTheme);

export default typography;

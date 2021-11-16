import breakpoints from "./breakpoints";
import spacing from "./spacing";
import { light, dark } from './colours';

/*
 * Things to keep in themes:
 *  - Colours
 *  - Spacing
 *  - Breakpoints
 */

const commonTheme = {
    breakpoints,
    spacing
};

const lightTheme = { ...commonTheme, ...light};
const darkTheme = { ...commonTheme, ...dark};
console.log(lightTheme);

export { lightTheme, darkTheme }


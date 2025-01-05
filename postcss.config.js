import autoprefixer from 'autoprefixer';
//eslint-disable-next-line
import cssnano from 'cssnano';
import nesting from 'postcss-nesting';

export default [
    {
        plugins: [autoprefixer, nesting, cssnano],
    },
];

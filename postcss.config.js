import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import nesting from 'postcss-nesting';

export default [
    {
        plugins: [autoprefixer, nesting, cssnano],
    },
];

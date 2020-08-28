import image from './assets/iop.jpeg';
import {ImageBlock, TextBlock, TextColumnsBlock, TitleBlock} from './classes/block';
import {css} from "./utils";

export const model = [
    new TitleBlock('JavaScript',
        {
            tag: "h1",
            styles: css({
                background: 'linear-gradient(to right, #ff0099, #493240)',
                color: '#fff',
                padding: '1.5rem',
                'text-align': 'center'
            })
        }),
    new ImageBlock(image,
        {
            styles: css({
                "font-size": "20px",
                "justify-content": "center"
            }),
            alt: "image",
            imageStyles: css({
                width: "500px",
                height: "auto"
            })
        }),
    new TextBlock('lorem text',
        {
            tag: "h4",
            styles: css({
                background: 'linear-gradient(to left, #f2994a, #f2c94c);',
                color: '#000;',
                'text-align': 'center;'
            })
        }),
    new TextColumnsBlock([
            '1 text',
            '2 text',
            '3 text'
        ],
        {
            styles: css({
                margin: '1rem'
            })
        })
]
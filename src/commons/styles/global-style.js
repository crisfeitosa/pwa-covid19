import { createGlobalStyle } from 'styled-components'
import CovidImg from '../../assets/images/covid.jpg'

const globalStyle = createGlobalStyle`
    * {
        outline: none;
        box-sizing: border-box;
    }

    box {
        line-height: normal;
    }

    html, body {
        width: 100%;
        min-height: 100%;
        display: flex;
        padding: 0;
        margin: 0;
    }

    #root {
        background: url(${CovidImg});
        height: 100%;
        width: 100%;
        background-size: cover;
        background-position: center center;
    }

    .mb-2 {
        margin-bottom: 1rem;
    }

    .pt-2 {
        padding-top: 1rem;
    }

    .cursor {
        cursor: pointer;
    }
`

export default globalStyle









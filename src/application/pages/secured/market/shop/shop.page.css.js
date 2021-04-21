import { css } from 'lit-element';
import { registerStyleModule } from '../../../../../modules/utils/registerStyleModule.fnc';

registerStyleModule('shop-page', css`
    .market-layout {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .market-layout__products {
        width: 950px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
    }
`);
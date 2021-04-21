import { css } from 'lit-element';
import { registerStyleModule } from '../../../../modules/utils/registerStyleModule.fnc';

registerStyleModule('simulator-page', css`
    .simulator-layout {
        display: flex;
        color: var(--main);
    }

    .simulator-layout__previews {
        width: 300px;
    }

    .simulator-layour__previews__preview {
        margin-top: 24px;
    }

    .simulator-layout__selected {
        flex-grow: 1;
        margin-left: 45px;
    }

    .simulator-layout__selected__box__button {
        width: 100%;
        margin-top: 24px;
    }

    .simulator-layout__not-selected {
        text-align: center;
    }

    .simulator-layout__selected__box {
        padding: 24px;
    }

    .simulator-layout__selected__box__top {
        display: flex;
        justify-content: space-between;
    }

    .simulator-layout__selected__box__top__statistic {
        font-size: 22px;
        color: white;
    }
`);

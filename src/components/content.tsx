import { useContext } from 'react';
import { useState } from 'react';
import { ThemeContext } from 'styled-components';
import styled from "styled-components";
import './content.css'

const App2 = () => {
    const theme = useContext(ThemeContext);

    const All = styled.div`
      color: ${theme.primaryText};
      background-color: ${theme.bodyColor};
      flex: 0 1 auto;
      min-height: 390px;
      max-height: 390px;
      overflow: scroll;
    `

    return (
    <All className='container'>
        <div className='px-1 content-wrap'>
            <h1>sometext</h1>
        </div>
        <div className='px-1 content-wrap'>
        dlaj;lsdjf;asdjfas;;fj;alsdf;adfdlfja;jdfja;fj;asljfd;lasjfd;ljf;lasjdf;ldjasdlfjalsdfkjadl;fj;alsdjf;laskdjf;lasdjfl;kajsd;fljasd;lfj;alsdjf;ladksfja;dlkfja;slfjd;lasdkjf;lkasdjf;lasdjf;lkjds;flkadjsl;akfadlk;ja;lsdkf
        dlaj;lsdjf;asdjfas;;fj;alsdf;adfdlfja;jdfja;fj;asljfd;lasjfd;ljf;lasjdf;ldjasdlfjalsdfkjadl;fj;alsdjf;laskdjf;lasdjfl;kajsd;fljasd;lfj;alsdjf;ladksfja;dlkfja;slfjd;lasdkjf;lkasdjf;lasdjf;lkjds;flkadjsl;akfadlk;ja;lsdkf
        dlaj;lsdjf;asdjfa            dlaj;lsdjf;asdjfas;;fj;alsdf;adfdlfja;jdfja;fj;asljfd;lasjfd;ljf;lasjdf;ldjasdlfjalsdfkjadl;fj;alsdjf;laskdjf;lasdjfl;kajsd;fljasd;lfj;alsdjf;ladksfja;dlkfja;slfjd;lasdkjf;lkasdjf;lasdjf;lkjds;flkadjsl;akfadlk;ja;lsdkf
        dlaj;lsdjf;asdjfas;;fj;alsdf;adfdlfja;jdfja;fj;asljfd;lasjfd;ljf;lasjdf;ldjasdlfjalsdfkjadl;fj;alsdjf;laskdjf;lasdjfl;kajsd;fljasd;lfj;alsdjf;ladksfja;dlkfja;slfjd;lasdkjf;lkasdjf;lasdjf;lkjds;flkadjsl;akfadlk;ja;lsdkf
        dlaj;lsdjf;asdjfas;;fj;alsdf;adfdlfja;jdfja;fj;asljfd;lasjfd;ljf;lasjdf;ldjasdlfjalsdfkjadl;fj;alsdjf;laskdjf;lasdjfl;kajsd;fljasd;lfj;alsdjf;ladksfja;dlkfja;slfjd;lasdkjf;lkasdjf;lasdjf;lkjds;flkadjsl;akfadlk;ja;lsdkf
s;;fj;alsdf;adfdlfja;jdfja;fj;asljfd;lasjfd;ljf;lasjdf;ldjasdlfjalsdfkjadl;fj;alsdjf;laskdjf;lasdjfl;kajsd;fljasd;lfj;alsdjf;ladksfja;dlkfja;slfjd;lasdkjf;lkasdjf;lasdjf;lkjds;flkadjsl;akfadlk;ja;lsdkf
        </div>
    </All>
)};

export default App2
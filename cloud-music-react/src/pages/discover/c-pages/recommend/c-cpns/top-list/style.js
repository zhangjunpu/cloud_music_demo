import styled from 'styled-components';
import rank_bg from '@/assets/img/ic_rank_bg.png'

export const TopListWrapped = styled.div`
  .content {
    height: 472px;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    background: url(${rank_bg});
  }
`
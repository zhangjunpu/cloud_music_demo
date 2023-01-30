import styled from "styled-components";

export const DiscoverWrapped = styled.div`
    height: 35px;
    line-height: 35px;
    background-color: #c20c0c;
    margin-top: -5px;

    .top {
        
        .menu {
            margin-left: 180px;

            .item {
                height: 20px;
                line-height: 20px;
                padding: 3px 13px;
                margin: 0 17px;
                color: #fff;

                &.active, &:hover {
                    background-color: #9B0909;
                    border-radius: 10px;
                    text-decoration: none;
                }
            }
        }
    }
`
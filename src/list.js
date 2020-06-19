import React from 'react';
import styled from "styled-components";

const Listing = styled.ol`
    display: inline-flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: center;
`;
const Item = styled.li`
    margin-bottom: 0.5em;
    &:last-child {
        margin-bottom: 0em;
    }
`;
const list = ({ values, del }) => (
    <Listing>
        {
            values.map((todo, index) => (
                <Item key={String(index)}>
                    &nbsp;
                    <span className='text'>{todo}</span>
                    &nbsp;
                    <button onClick={() => del(index)}>
                        Delete
                    </button>
                </Item>
            ))
        }
    </Listing>
);
export default list;
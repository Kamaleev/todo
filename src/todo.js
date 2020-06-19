import React from 'react';
import Actions from './actions';
import Input from './input';
import List from './list';
import styled from "styled-components";

const TODO = () => {
    const { values, add, del } = Actions([]);
    const { value, clear, focus, onChange } = Input();
    const Wrapper = styled.div`
        font-family: sans-serif;
        text-align: center;
        font-size: 16px;
    `;
    const Title = styled.h1`
        font-size: 2em;
    `;

    styled.input`
        display: none;
    `;
  
    return (
      <Wrapper>
        <Title>Todo</Title>

        <form
          onSubmit={e => {
            const trimmed = value.trim();
            e.preventDefault();
            if (trimmed !== '') {
              add(trimmed);
              clear();
              focus()
            }
          }}
        >
          <input
            id='send'
            variant='outlined'
            placeholder='Insert new todo'
            autoFocus
            onChange={onChange}
            value={value}
            size='12'
          />
          &nbsp;
          <input
            type='submit'
            value='Send'
          />
        </form>
  
        <List values={values} del={del} />
      </Wrapper>
    );
  };

export default TODO;
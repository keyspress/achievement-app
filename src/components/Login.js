import React from 'react';

export const Login = ({onSubmit}) => (
  <div style={{paddingTop: '200px'}}>
    <h1>Test Form</h1>
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Email" name="email" />
      <input type="password" placeholder="Password" name="password" />
      <button type="submit">Submit</button>
    </form>
  </div>
)
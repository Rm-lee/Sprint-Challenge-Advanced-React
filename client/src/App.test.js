import React from 'react';
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App';
import { EXPECTED_COLOR } from 'jest-matcher-utils';


it('Has a button',async () => {
  const wrapper = rtl.render(
    <App />
  )
  const element = wrapper.queryByText(/Darkmode/i)
  
});

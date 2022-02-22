/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  svg: {
    width: 'auto',
    height: 30,
  },
  path: {
    fill: '#E9711C',
  }
});
const LogoFull = () => {
  const classes = useStyles();

  return (
    <svg
      className={classes.svg}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2079.95 456.05"
    >
      <path
        className={classes.path}
        d="M3 21.7c2.2 0 3-.5 3-3V5.5c0-2.4-.8-3-3-3V2h16.7l.3 4.5h-.6C19 3.9 17.9 3 15.6 3h-5.4C9 3.1 9 3.5 9 5.2V11h5.9c2 0 2.5-.8 2.7-2.8h.6v6.8h-.6c-.2-1.9-.8-2.8-2.7-2.8h-6v6.4c0 1.9.2 2.5 1.5 2.5h5.9c2.5 0 4-1.6 4.8-4l.5.3-1.5 5H3v-.6"
      />
      <path
        className={classes.path}
        d="M21.5 21.7c2-.1 2.8-.5 2.8-2.9V5.3c0-2.3-.8-2.7-2.8-2.8v-.6h8.8v.6c-2.2 0-3 .5-3 2.9v13c0 1.6 0 2.6 1.7 2.6h4c3 0 4.4-1.3 5.6-4h.7l-1.7 5.3H21.5v-.6M39.8 16.2h.6c1 2.6 2.8 5.4 5.9 5.4 2 0 3.7-1.3 3.7-3.3 0-1.6-1.7-3-4.2-5-3.3-2.3-5.4-3.7-5.4-6.4 0-3.4 2.5-5.5 5.6-5.5 2.2 0 3 1 4.2 1 .5 0 .6-.3.5-.8h.6l.6 6.1h-.6c-.7-2.6-2.5-5.2-5.3-5.2a3.1 3.1 0 0 0-3.2 3.2c0 2 2 3.2 5 5 2.6 1.5 5 3.4 5 6.3 0 3.2-2.6 5.7-6 5.7-2 0-4-.8-4.6-.8-.3 0-.7.2-.8.6H41l-1.1-6.3M53 21.7c2.2 0 3-.5 3-3V5.5c0-2.4-.8-3-3-3V2h16.7l.3 4.5h-.6C69.1 3.9 68 3 65.6 3h-5.4c-1.2 0-1.2.4-1.2 2.1V11h5.9c2 0 2.5-.8 2.7-2.8h.6v6.8h-.6c-.1-1.9-.8-2.8-2.7-2.8h-6v6.4c0 1.9.2 2.5 1.5 2.5h5.9c2.5 0 4-1.6 4.8-4l.6.3-1.6 5H53v-.6M81 22.5h-.3L75.2 10c-.9-2.1-1.7-4.2-2.8-6.2a2.6 2.6 0 0 0-2.3-1.3v-.6h8.3v.6c-.7 0-2.3 0-2.3 1.1 0 .4.9 2.5 1.6 4.4l4.1 9.6 4.9-11.3c.6-1.4.7-2.1.7-2.7 0-.7-.6-1-2.1-1.1v-.6h6v.6c-.4 0-.8.1-1 .3-1.2.6-2.2 3.6-2.7 4.7l-6.5 15M91.4 21.7c2.3 0 3-.5 3-3V5.5c0-2.4-.7-3-3-3V2h9.1v.6c-2.2 0-3 .5-3 2.9v13.4c0 2.4.8 2.9 3 2.9v.6h-9v-.6M101.8 21.7c2.2 0 3-.5 3-3V5.5c0-2.4-.8-3-3-3V2h16.8l.2 4.5h-.5c-.4-2.5-1.6-3.3-3.9-3.3h-5.3c-1.3 0-1.3.4-1.3 2.1V11h6c1.9 0 2.5-.8 2.7-2.8h.5v6.8h-.5c-.2-1.9-.9-2.8-2.8-2.8h-5.9v6.4c0 1.9.1 2.5 1.4 2.5h6c2.5 0 4-1.6 4.8-4l.5.3-1.5 5h-17.2v-.6M141 21.7a4 4 0 0 1-2.5-1.7l-6.2-7.6c3-.6 5.1-2.1 5.1-5.5 0-4.8-4.2-5-7.7-5h-9.2v.6c2.2 0 3 .5 3 2.9v13.4c0 2.4-.8 2.9-3 2.9v.6h9v-.6c-2.2 0-3-.5-3-3v-5.5h2.6l7.3 9h4.5v-.5M126.5 4.5c0-1.4.4-1.5 2.2-1.5 2.8 0 5.3 1 5.3 4.3 0 3.6-2.9 4.6-6 4.6h-1.5V4.5z" 
      />
    </svg>
  );
};

export default LogoFull;

import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { CustomTheme } from '../../theme';
import { LayoutProps } from '../../utils/types';

const useStyles = makeStyles((theme: CustomTheme) => ({
  content: {},
}));

const Empty = (props: LayoutProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { children, layoutprops } = props;

  const classes = useStyles();

  return (
    <Container>
      <main className={classes.content}>{children}</main>
    </Container>
  );
};

export default Empty;

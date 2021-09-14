import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import React from 'react';
import { CustomTheme } from '../theme';
import { ClassNameChildrenProps } from '../utils/types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: CustomTheme) => ({
  cardRoot: {},
  card: { height: '100%' },
}));

interface CardWidgetProps extends ClassNameChildrenProps {
  text?: string;
  title?: string;
  onClick?: () => unknown;
}

export const CardWidget = (props: CardWidgetProps) => {
  const { className, text, title, onClick, children } = props;
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} className={clsx(classes.cardRoot, className)}>
      <Card className={classes.card} style={onClick != null ? { cursor: 'pointer' } : {}} onClick={onClick}>
        <CardContent>
          {title && <Typography variant="h5">{title}</Typography>}
          {text && <Typography>{text}</Typography>}
          {children}
        </CardContent>
      </Card>
    </Grid>
  );
};

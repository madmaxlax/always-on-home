import { Card, CardContent, Fab, Grid, SvgIconTypeMap, Typography } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { Refresh } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { CustomTheme } from '../theme';
import { ClassNameChildrenProps } from '../utils/types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: CustomTheme) => ({
  cardRoot: {},
  card: { height: '100%', position: 'relative' },
  fab: { position: 'absolute', right: theme.spacing(1), top: theme.spacing(1) },
}));

interface CardWidgetProps extends ClassNameChildrenProps {
  text?: string;
  title?: string;
  onClick?: () => unknown;
  action?: () => unknown;
  actionIcon?: ReactNode;
  icon?: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, 'svg'>> & {
    muiName: string;
  };
}

export const CardWidget = (props: CardWidgetProps) => {
  const { className, text, icon: Icon, title, onClick, children, action, actionIcon } = props;
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} className={clsx(classes.cardRoot, className)}>
      <Card classes={{ root: classes.card }} style={onClick != null ? { cursor: 'pointer' } : {}}>
        {action != null && (
          <Fab className={classes.fab} size="small" color="primary" onClick={action}>
            {actionIcon ? actionIcon : <Refresh />}
          </Fab>
        )}
        <CardContent onClick={onClick}>
          {title && (
            <Typography variant="h5">
              {Icon != null && <Icon color="primary" size="sm" sx={{ verticalAlign: 'middle' }} />}
              {title}
            </Typography>
          )}
          {text && <Typography>{text}</Typography>}
          {children}
        </CardContent>
      </Card>
    </Grid>
  );
};

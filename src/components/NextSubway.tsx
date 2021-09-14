import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useState } from 'react';
import { CustomTheme } from '../theme';
import moment from 'moment';
import { ClassNameProps } from '../utils/types';
import { CardWidget } from './Card';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: CustomTheme) => ({
  nextSubwayRoot: {},
}));

interface NextSubwayProps extends ClassNameProps {
  location?: number;
  line?: string;
  subway?: string;
  direction?: 'N' | 'S';
  listLimit?: number;
}
interface Departure {
  destinationStationId: string;
  routeId: string;
  time: number;
}
interface SubwayData {
  complexId: number;
  name: string;
  lines: Array<{
    name: string;
    stationId: string;
    departures: { N: Array<Departure>; S: Array<Departure> };
  }>;
}

export const NextSubway = (props: NextSubwayProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className, location = 614, line = '8th Av - Fulton St', subway, direction } = props;
  const listLimit = direction ? 6 : 3;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const classes = useStyles();
  const [subwayData, setSubwayData] = useState<Partial<SubwayData>>({});

  const getSubwayData = () => {
    setSubwayData({});
    fetch(`https://nice-chambray-wombat.glitch.me/departures/${location}`).then(async (response) =>
      setSubwayData(await response.json())
    );
    setTimeout(() => {
      window.location.reload();
    }, 5 * 60 * 1000);
  };
  useEffect(() => {
    getSubwayData();
  }, []);
  const filterFunc = (departure: Departure) => !subway || departure.routeId === subway;
  const displayFunc = (departure: Departure, index: number) => {
    const deptTime = new Date(departure.time * 1000);
    // if (deptTime > curTime &&
    if (index < listLimit) {
      return (
        <div key={index}>
          <span className={'sub_icon _' + departure.routeId}>{departure.routeId}</span>: {moment(deptTime).fromNow()}:{' '}
          {deptTime.toLocaleTimeString()}
        </div>
      );
    }
  };
  const lineToUse = subwayData?.lines?.filter((currentLine) => currentLine.name === line)?.[0];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const curTime = new Date();
  return (
    <CardWidget
      onClick={getSubwayData}
      title={`${subwayData.name || 'loading'} ${
        direction === 'S' ? 'Southbound' : direction === 'N' ? 'Northbound' : ''
      }`}
    >
      <>
        {/* <Typography>From {subwayData.name}</Typography> */}
        {direction ? (
          lineToUse?.departures?.[direction]?.filter(filterFunc)?.map(displayFunc)
        ) : (
          <>
            {' '}
            <div>North:</div>
            {lineToUse?.departures?.N?.filter(filterFunc)?.map(displayFunc)}
            <div>South</div>
            {lineToUse?.departures?.S?.filter(filterFunc)?.map(displayFunc)}
          </>
        )}
      </>
    </CardWidget>
  );
};

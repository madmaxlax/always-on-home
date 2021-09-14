import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useState } from 'react';
import { CustomTheme } from '../theme';
import { ClassNameProps } from '../utils/types';
import { CardWidget } from './Card';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: CustomTheme) => ({
  nextSubwayRoot: {},
}));

interface NextSubwayProps extends ClassNameProps {
  location?: number;
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

const ACE_LINE = '8th Av - Fulton St';
export const NextSubway = (props: NextSubwayProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className, location } = props;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const classes = useStyles();
  const [subwayData, setSubwayData] = useState<Partial<SubwayData>>({});

  const getSubwayData = () => {
    setSubwayData({});
    fetch(`https://nice-chambray-wombat.glitch.me/departures/${location || 614}`).then(async (response) =>
      setSubwayData(await response.json())
    );
  };
  useEffect(() => {
    getSubwayData();
  }, []);

  const line = subwayData?.lines?.filter((line) => line.name === ACE_LINE)?.[0];
  console.log(line);
  return (
    <CardWidget onClick={getSubwayData}>
      <>
        Upcoming departures: <br />
        {line?.departures.N.filter((departure) => departure.routeId === 'A').map((departure, index) =>
          index < 6 ? (
            <div key={index}>
              {departure.routeId}: {new Date(departure.time).toLocaleTimeString()}
            </div>
          ) : null
        )}
      </>
    </CardWidget>
  );
};

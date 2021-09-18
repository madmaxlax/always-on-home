import { Grid } from '@material-ui/core';
import { AddShoppingCart, ShoppingBasket } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useState } from 'react';
import { CustomTheme } from '../theme';
import { ClassNameProps } from '../utils/types';
import { CardWidget } from './Card';
import CustomCircularProgress from './CustomCircularProgress';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: CustomTheme) => ({
  groceryListRoot: {},
}));
interface TrelloCard {
  address: string;
  attachments: Array<string>;
  badges: string;
  cardRole: string;
  checkItemStates: string;
  closed: boolean;
  coordinates: string;
  cover: string;
  creationMethod: string;
  customFieldItems: Array<string>;
  dateLastActivity: string;
  desc: string;
  descData: string;
  due: string;
  dueComplete: string;
  dueReminder: string;
  id: string;
  idAttachmentCover: string;
  idBoard: string;
  idChecklists: Array<string>;
  idLabels: Array<string>;
  idList: string;
  idMembers: Array<string>;
  idMembersVoted: Array<string>;
  idShort: string;
  isTemplate: string;
  labels: Array<string>;
  limits: string;
  locationName: string;
  manualCoverAttachment: string;
  name: string;
  pluginData: Array<string>;
  pos: string;
  shortLink: string;
  shortUrl: string;
  start: string;
  subscribed: string;
}

//for full json response https://trello.com/b/FgrSihcE/groceries.json
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface TrelloResponse {
  actions: Array<{ [name: string]: unknown }>;
  cards: Array<TrelloCard>;
  lists: Array<{
    closed: string;
    creationMethod: string;
    id: string;
    idBoard: string;
    limits: string;
    name: string;
    pos: string;
    softLimit: string;
  }>;
}
const knownEmojis = [
  ['spinach', '🍃'],
  ['bananas', '🍌'],
  ['chicken', '🐓'],
  ['eggs', '🍳🥚'],
  ['avocado', '🥑'],
  ['pizza', '🍕'],
  ['bread', '🍞'],
];
const listLimit = 9;
export const GroceryList = (props: ClassNameProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className } = props;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const classes = useStyles();
  const [showAll, setShowAll] = useState(false);
  const [groceryData, setGroceryData] = useState<Array<TrelloCard>>([]);
  const fetchTrelloGroceries = () => {
    setGroceryData([]);
    fetch(
      `https://api.trello.com/1/lists/611ab9702b68a509a8047f4f/cards?key=${process.env.REACT_APP_TRELLO_API_KEY}&token=${process.env.REACT_APP_TRELLO_API_TOKEN}`
    ).then(async (data) => {
      const cards = (await data.json()) as Array<TrelloCard>;
      setGroceryData(cards?.filter((card) => card.idList === '611ab9702b68a509a8047f4f' && !card.closed) || []);
    });
    setTimeout(fetchTrelloGroceries, 60 * 60 * 10000);
  };
  useEffect(() => {
    fetchTrelloGroceries();
  }, []);

  return (
    <CardWidget
      title="Grocery List"
      onClick={() => {
        setShowAll(!showAll);
      }}
      action={() => {
        fetchTrelloGroceries();
      }}
      icon={AddShoppingCart}
    >
      {!groceryData?.length ? (
        <CustomCircularProgress text="loading trello data" />
      ) : (
        <>
          {groceryData.length || 0} items
          <br />
          <Grid container spacing={1}>
            {groceryData.map((card, index) => {
              const hasFunEmoji = knownEmojis.filter((emoji) => card.name.toLowerCase().includes(emoji[0]));
              return showAll || index < listLimit ? (
                <Grid item xs={6} key={index}>
                  {hasFunEmoji.length ? (
                    hasFunEmoji[0][1]
                  ) : (
                    <ShoppingBasket fontSize="small" color="secondary" sx={{ verticalAlign: 'middle' }} />
                  )}{' '}
                  {card.name}
                </Grid>
              ) : index === listLimit ? (
                <Grid item xs={6} key={index}>
                  ...click to see all
                </Grid>
              ) : null;
            })}
          </Grid>
        </>
      )}
    </CardWidget>
  );
};

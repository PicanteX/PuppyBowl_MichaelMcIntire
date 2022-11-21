// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2209-ftb-et-web-pt';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;


export const fetchAllPlayers = async () => {
    try {
        const response = await fetch(`${APIURL}players`);
        const result = await response.json();
        if (result.error) {
            throw result.error;
        }
        return result.data.players;
      } catch (error) {
        console.error('Uh oh, trouble fetching players!', error);
      }
    };

export const fetchSinglePlayer = async (playerId) => {
    try {
        const response = await fetch(`${APIURL}players/${playerId}`);
        const result = await response.json();
        if (result.error) {
            throw result.error;
        }
        return result.data.player;
      } catch (error) {
        console.error('Single player error', error);
      }
};

export const addNewPlayer = async (playerObj) => {
    console.log(playerObj);
    try {
        const response = await fetch(
            `${APIURL}players/${playerObj}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            // body: JSON.stringify({
            //   name:'',
            //   breed:'',
            // }),
          }
        );
        const result = await response.json();
        return result.data.players;
      } catch (err) {
        console.error(err);
      }
      
};

export const removePlayer = async (playerId) => {
    try {
        const response = await fetch(`${APIURL}/players/${playerId}`, {
          method: 'DELETE',
        });
        const result = await response.json();
        if (result.error) throw result.error;
        return;
       } catch (err) {
        console.error(
          `remove player error#${playerId} from the roster!`,
          err
        );
        }
 };
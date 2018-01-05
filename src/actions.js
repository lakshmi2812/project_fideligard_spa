export const GET_STOCKS_REQUEST = "GET_STOCKS_REQUEST";
export const GET_STOCKS_SUCCESS = "GET_STOCKS_SUCCESS";
export const GET_STOCKS_FAILURE = "GET_STOCKS_FAILURE";

export function getStocksRequest() {
  return {
    type: GET_STOCKS_REQUEST
  };
}

export function getStocksSuccess(data) {
  return {
    type: GET_STOCKS_SUCCESS,
    data
  };
}

export function getStocksFailure(error) {
  return {
    type: GET_STOCKS_FAILURE,
    error
  };
}

//thunk action creator
//thunk is used to make asynchronous api calls in redux
export function getStocks() {
  return dispatch => {
    // Update the state so that it knows the request has begun
    dispatch(getStocksRequest());

    //let { search, type } = formData;
    let stockArray = ["AAPL", "BA", "IBM", "INTC", "MSFT"];
    for (let i = 0; i < stockArray.length; i++) {
      fetch(
        `https://www.quandl.com/api/v3/datasets/EOD/${
          stockArray[i]
        }.json?api_key=Ker6SsX6Mn79xiRobmxu&start_date=2016-01-01&end_date=2016-12-31`
      )
        .then(response => {
          // If response not okay, throw an error
          if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
          }
          // Otherwise, extract the response into json
          return response.json();
        })
        .then(json => {
          // Dispatch success which sets the Books.
          // console.log(json);
          dispatch(getStocksSuccess(json));
        })
        .catch(error => {
          // Dispatch failure which sets the error in state
          dispatch(getStocksFailure(error));
        });
    }
  };
}

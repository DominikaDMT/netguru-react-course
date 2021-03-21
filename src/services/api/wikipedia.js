import ky from 'ky';

const client = ky.create({
  prefixUrl: 'https://pl.wikipedia.org/w',
  headers: {
    'content-type': 'application/json',
  },
});

const defaultParams = {
  origin: '*',
};

const api = {
  getArticles({ coord, radius = 10000, limit = 10 } = {}) {
    const params = {
      action: 'query',
      list: 'geosearch',
      format: 'json',
      ...defaultParams,
    };
    if (!coord) {
      console.error('Wikipedia API: no coord passed to get getArticles');
    }
    return client
      .get(`api.php?`, {
        searchParams: {
          // zamiast url search params
          ...params,
          gscoord: coord.lat + '|' + coord.lng,
          gsradius: radius,
          gslimit: limit,
        },
      })
      .json();
    // odp będzie w formacie json
  },
};

export default api;
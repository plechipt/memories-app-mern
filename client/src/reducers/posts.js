export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.paylod;
    case "CREATE":
      return [...posts, action.paylod];
    default:
      return posts;
  }
};
